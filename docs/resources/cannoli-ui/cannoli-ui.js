const CSS_URL = new URL("./cannoli-ui.css", import.meta.url);
const LIBRARY_URL = new URL("./library.json", import.meta.url);
const QR_URL = new URL("./qr-romm.svg", import.meta.url);
// Text uses M PLUS Rounded 1c Medium (matches the launcher's weight). The status
// bar's connectivity icons come from the Nerd Font (bold), which the plain
// Google font lacks, so we load it only for those glyphs.
const TEXT_FONT_URL = new URL("../fonts/MPLUSRounded1c-Medium.ttf", import.meta.url);
const GLYPH_FONT_URL = new URL("../fonts/MPlus-1c-NerdFont-Bold.ttf", import.meta.url);
const CANVAS_W = 1240;
const CANVAS_H = 1080;

// Current wall-clock time as 24-hour "HH:MM", used when no `time` attribute is set.
function currentTime24() {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}

// @font-face inside a shadow root is ignored by browsers, so register the fonts
// at the document level ourselves. This makes the component self-contained
// (works on any host page, not just ones that already load theme.css).
let fontPromise = null;
function ensureFont() {
  if (fontPromise) return fontPromise;
  fontPromise = (async () => {
    if (!("fonts" in document) || typeof FontFace === "undefined") return;
    const specs = [
      ["CannoliUI", TEXT_FONT_URL],
      ["CannoliNF", GLYPH_FONT_URL],
    ];
    for (const [family, url] of specs) {
      if (Array.from(document.fonts).some((f) => f.family === family)) continue;
      try {
        const ff = new FontFace(family, `url(${url.href})`);
        await ff.load();
        document.fonts.add(ff);
      } catch (e) {
        /* fall back to the CSS font stack */
      }
    }
  })();
  return fontPromise;
}

let libraryPromise = null;
function loadLibrary() {
  if (window.CANNOLI_LIBRARY) return Promise.resolve(window.CANNOLI_LIBRARY);
  if (!libraryPromise) libraryPromise = fetch(LIBRARY_URL).then((r) => r.json());
  return libraryPromise;
}

// Bottom button-hint bar, per view.
const HINTS = {
  "system-list":  { left: [["X", "SETTINGS"]], right: [["A", "SELECT"]] },
  "game-list":    { left: [["B", "BACK"]],     right: [["X", "PLAY"], ["A", "RESUME"]] },
  "igm":          { left: [["B", "BACK"]],     right: [["A", "SELECT"]] },
  "context-menu": { left: [["B", "BACK"]],     right: [] },
  "collections":         { left: [["B", "BACK"]], right: [["A", "SELECT"]] },
  "collection-menu":     { left: [["B", "BACK"]], right: [["A", "SELECT"]] },
  "collection-toggle":   { left: [["B", "BACK"]], right: [["Y", "NEW"], ["A", "TOGGLE"]] },
  "child-toggle":        { left: [["B", "BACK"]], right: [["A", "TOGGLE"]] },
  "collection-contents": { left: [["B", "BACK"]], right: [["A", "SELECT"]] },
  "keyboard":          { left: [["X", "CANCEL"]], right: [["START", "CONFIRM"]] },
  "romm-settings": { left: [["B", "BACK"]], right: [["A", "SELECT"]] },
  "romm-pair": { left: [["B", "BACK"]], right: [] },
};

// On-screen keyboard: the KEYBOARD_ALPHA layout (rows top to bottom), matching
// the launcher's KeyboardController.kt. The space row is a single wide key.
const KEYBOARD_ROWS = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "←"], // digits + backspace
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "↵"],       // + enter
  ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌨"],       // shift + symbols
  [" "], // space bar (wide key)
];
const KEYBOARD_SPECIAL_KEYS = new Set(["⇧", "↵", "←", "⌨"]);

// Nerd Font (M PLUS 1c) glyphs: bluetooth (plain rune), wifi, charging bolt.
const STATUS_GLYPHS = "\uf294 \uf1eb \uf0e7";

const IGM_ITEMS = ["Resume", "Save State", "Load State", "Guide", "Settings", "Reset", "Quit"];

// Play-overlay icons: a play triangle before the first run, a restart glyph after.
const ICON_PLAY =
  '<svg viewBox="0 0 100 100" aria-hidden="true"><polygon points="40,28 40,72 76,50"></polygon></svg>';
const ICON_RESTART =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></svg>';
const REPLAY_BAR_H = 46; // px reserved below the screen for the "Replay" text control


function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

class CannoliScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CSS_URL;
    this.shadowRoot.appendChild(link);

    this._canvas = document.createElement("div");
    this._canvas.className = "screen";
    this.shadowRoot.appendChild(this._canvas);

    // Click-to-play overlay so tutorials don't all autoplay at once.
    this._playOverlay = document.createElement("button");
    this._playOverlay.className = "play-overlay";
    this._playOverlay.type = "button";
    this._playOverlay.hidden = true;
    this._playOverlay.innerHTML = '<span class="play-overlay__btn"></span>';
    this._playOverlay.addEventListener("click", () => this._startTutorial());
    this.shadowRoot.appendChild(this._playOverlay);

    // "Replay" text control shown UNDER the screen after the first play.
    this._replayBar = document.createElement("button");
    this._replayBar.className = "replay-bar";
    this._replayBar.type = "button";
    this._replayBar.hidden = true;
    this._replayBar.innerHTML = ICON_RESTART + "<span>Replay</span>";
    this._replayBar.addEventListener("click", () => this._startTutorial());
    this.shadowRoot.appendChild(this._replayBar);

    const [library] = await Promise.all([loadLibrary(), ensureFont()]);
    this._library = library;

    const tutorial = this.getAttribute("tutorial");
    const script = tutorial && window.CANNOLI_TUTORIALS && window.CANNOLI_TUTORIALS[tutorial];
    // A tutorial definition may carry a `library` partial that overrides the
    // shared library for that demo only (e.g. a focused `platforms` list).
    if (script && script.library) {
      this._library = { ...this._library, ...script.library };
    }

    // A def marked `static` (or one with no steps) is a still preview: apply its
    // start frame with any library override, but no play button or replay bar.
    const playable = !!(script && !script.static && Array.isArray(script.steps) && script.steps.length);
    // Set before the fitter runs so it reserves the Replay-bar space up front
    // (a playable tutorial keeps that space always, so nothing shifts later).
    this._tutorialScript = playable ? script : null;
    this._resetDemoState();
    this._ready = true;
    this._render();
    this._installFitter();
    this._startClock();

    if (script) {
      this._applyState(script.start || {}); // show the start frame
      if (playable) {
        if (this.hasAttribute("autoplay")) this._startTutorial();
        else this._showPlayOverlay();
      }
    }
  }

  static get observedAttributes() {
    return [
      "view", "list", "selection", "game", "battery", "time", "backdrop", "accent",
      "multimode", "multiselect", "reordermode", "fullmenu", "contentmode", "phase",
    ];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (!this._ready || this._batching || oldVal === newVal) return;
    const key = this._viewKey();
    if (name === "selection" && key === this._builtKey) this._moveSelection();
    else this._render();
  }

  get state() {
    return {
      view: this.getAttribute("view") || "system-list",
      list: this.getAttribute("list") || "favorites",
      selection: parseInt(this.getAttribute("selection") || "0", 10),
      game: this.getAttribute("game") || null,
      battery: this.getAttribute("battery") || "97",
      time: this.getAttribute("time") || currentTime24(),
      backdrop: this.getAttribute("backdrop") || null,
      accent: this.getAttribute("accent") || null,
      multimode: this.hasAttribute("multimode"),
      multi: (this.getAttribute("multiselect") || "").split(",").filter((x) => x !== "").map(Number),
      reordermode: this.hasAttribute("reordermode"),
      contentmode: this.getAttribute("contentmode") || null,
      phase: this.getAttribute("phase") || "connecting",
    };
  }

  _viewKey() {
    return (this.getAttribute("view") || "system-list") + "|" + (this.getAttribute("list") || "");
  }

  // ----- data helpers -----
  // Demo runtime state so tutorials show real outcomes (favorite -> star + resort,
  // remove -> gone). Reset each time a tutorial (re)starts.
  _resetDemoState() {
    const favList = this._library.lists && this._library.lists.favorites;
    this._fav = new Set(favList ? favList.games : []);
    this._removed = new Set();
    this._platformOrder = null;
    // Collection membership for the game currently open in the "Manage
    // Collections" checkbox toggle (this._contextGame). Demo-only state, so a
    // single Set (not per-game) is enough; reset whenever a tutorial (re)starts.
    this._collectionMembership = new Set();
    // Runtime copy of the collections list so "create a collection" can append
    // to it without mutating the shared library object (which every
    // <cannoli-screen> instance on the page reads from).
    this._collections = (this._library.collections || []).slice();
    // Child-collection nesting: maps a child collection's name to its parent's
    // name (single-parent is enough for the demo). Populated by the "Child
    // Collections" checkbox toggle (this._contextCollection is the parent
    // currently being edited).
    this._childOf = new Map();
    this._contextCollection = null;
    // On-screen keyboard runtime state (not attribute-backed; see _openKeyboard).
    this._keyRow = 2;
    this._keyCol = 0;
    this._kbdText = "";
    this._kbdTitle = null;
    this._keyboardPurpose = null;
    // RomM pairing demo state: the host typed on the RomM settings screen.
    // Empty means "Not set" (only Host + Allow Self-Signed Cert rows show).
    this._rommHost = "";
    this.removeAttribute("multimode");
    this.removeAttribute("multiselect");
    this.removeAttribute("reordermode");
    this.removeAttribute("contentmode");
  }

  // Runtime order of platform indices for the system-list, so reorder mode can
  // swap entries without touching the underlying library data. Lazily built on
  // first use and reset by _resetDemoState() so tutorials always start clean.
  _platformIndices() {
    if (!this._platformOrder) {
      this._platformOrder = this._library.platforms.map((_, i) => i);
    }
    return this._platformOrder;
  }

  _isNamedList(listId) {
    return !!(this._library.lists && this._library.lists[listId]);
  }

  // Ordered, filtered game ids for a list. Platform lists float favorites to the
  // top (sortFavoritesFirst); named lists (favorites, recently_played) keep order.
  _gamesForList(listId) {
    let base;
    if (this._isNamedList(listId)) base = this._library.lists[listId].games;
    else {
      const p = this._library.platforms.find((pl) => pl.id === listId);
      base = p && p.games ? p.games : [];
    }
    base = base.filter((id) => !this._removed.has(id));
    if (!this._isNamedList(listId)) {
      const favs = base.filter((id) => this._fav.has(id));
      const rest = base.filter((id) => !this._fav.has(id));
      return [...favs, ...rest];
    }
    return base;
  }

  // Context-menu actions in the launcher's order (GameListInputHandler /
  // DialogInputHandler.buildGameContextOptions): a couple are conditional on the
  // list and on whether the game is favorited / has box art. The `fullmenu`
  // attribute forces every option on, for the documentation reference screenshot
  // (a single real game never surfaces the whole set at once).
  _contextActions(gameId) {
    const full = this.hasAttribute("fullmenu");
    const game = this._library.games[gameId] || {};
    const actions = [];
    if (full || this._contextList === "recently_played") actions.push("Remove From Recently Played");
    actions.push(!full && this._fav.has(gameId) ? "Remove From Favorites" : "Add To Favorites");
    actions.push("Manage Collections", "Emulator Override", "RA Game ID");
    if (full) actions.push("Preload Achievements");
    actions.push("Rename");
    if (full || game.boxart) actions.push("Delete Art");
    actions.push("Delete Game");
    return actions;
  }

  // A favorited game shows a leading star in every list except Favorites itself
  // (matching the launcher: rowDisplayName prefixes "★ ").
  _gameLabel(id, listId) {
    const title = this._library.games[id].title;
    return listId !== "favorites" && this._fav.has(id) ? `★ ${title}` : title;
  }

  _itemsForView(s) {
    if (s.view === "system-list") {
      // Content mode controls how the main menu is composed (ContentMode in the
      // launcher's SystemListViewModel): default surfaces a Collections folder
      // above the platforms; collections-only hoists the collections themselves
      // and hides platforms; five-game-handheld shows only a collection's games.
      const mode = s.contentmode;
      const collections = this._collections || this._library.collections || [];
      // Tools and Ports stay reachable on the main menu in every mode (including
      // five-game-handheld); the demo library opts in via `ports` / `tools`.
      const folders = [];
      if (this._library.ports) folders.push("Ports");
      if (this._library.tools) folders.push("Tools");
      if (mode === "collections-only") {
        return ["Recently Played", "Favorites", ...collections, ...folders];
      }
      if (mode === "five-game-handheld") {
        const ids = this._library.fiveGameHandheld || [];
        const games = ids.map((id) => (this._library.games[id] || {}).title || id);
        return [...games, ...folders];
      }
      const platforms = this._platformIndices().map((i) => this._library.platforms[i].name);
      const head = ["Recently Played", "Favorites"];
      if (mode === "default" && collections.length) head.push("Collections");
      return [...head, ...platforms, ...folders];
    }
    if (s.view === "game-list") {
      return this._gamesForList(s.list).map((id) => this._gameLabel(id, s.list));
    }
    if (s.view === "igm") return IGM_ITEMS;
    if (s.view === "context-menu") return this._contextActions(s.game);
    if (s.view === "collections") {
      // Top-level collections only: any collection nested under a parent (via the
      // Child Collections toggle) is hidden here and shown inside its parent.
      return (this._collections || this._library.collections || []).filter(
        (name) => !this._childOf.has(name)
      );
    }
    if (s.view === "collection-menu") {
      // Context menu for a highlighted collection (Start on the Collections list).
      return ["Rename", "Child Collections", "Delete"];
    }
    if (s.view === "collection-toggle") {
      return (this._collections || this._library.collections || []).slice();
    }
    if (s.view === "child-toggle") {
      // Every other collection can become a child of the one being edited;
      // a collection cannot be its own child.
      const all = this._collections || this._library.collections || [];
      return all.filter((name) => name !== this._contextCollection);
    }
    if (s.view === "collection-contents") {
      // Child collections (marked via the "Child Collections" toggle) are
      // listed first with a "/" prefix, then the collection's own games (from
      // an optional library.collectionGames map; empty when the demo has none).
      const name = s.list;
      const children = this._childrenOf(name).map((c) => "/" + c);
      const games = (this._library.collectionGames && this._library.collectionGames[name]) || [];
      return [...children, ...games.map((id) => this._gameLabel(id, name))];
    }
    if (s.view === "romm-settings") {
      const rows = ["Host", "Allow Self-Signed Cert"];
      // The launcher reveals the pair actions only once a host is set.
      if (this._rommHost) rows.push("Pair with Another Device", "Pair with Code");
      return rows;
    }
    return [];
  }

  // Every collection whose _childOf entry points at `name` (i.e. every child
  // collection nested directly under it). Reads the map's entries directly, not
  // this._collections, so a child need not itself be a top-level collection.
  _childrenOf(name) {
    const out = [];
    for (const [child, parent] of this._childOf) {
      if (parent === name) out.push(child);
    }
    return out;
  }

  _titleForView(s) {
    if (s.view === "game-list") {
      if (this._library.lists && this._library.lists[s.list]) return this._library.lists[s.list].name;
      const p = this._library.platforms.find((pl) => pl.id === s.list);
      return p ? p.name : "";
    }
    if (s.view === "igm") {
      const game = s.game && this._library.games[s.game];
      return game ? game.title : "";
    }
    if (s.view === "context-menu") {
      const g = s.game && this._library.games[s.game];
      return g ? g.title : "";
    }
    if (s.view === "collections") return "Collections";
    if (s.view === "collection-menu") return this._contextCollection || "";
    if (s.view === "collection-toggle") return "Manage Collections";
    if (s.view === "child-toggle") return "Child Collections";
    if (s.view === "collection-contents") return s.list;
    if (s.view === "romm-settings") return "RomM";
    return "";
  }

  _selectedBoxart(s) {
    if (s.view !== "game-list") return null;
    const games = this._gamesForList(s.list);
    const game = this._library.games[games[s.selection]];
    if (!game || !game.boxart) return null;
    return new URL(game.boxart, LIBRARY_URL).href;
  }

  _backdropUrl(s) {
    if (s.view !== "igm" || !s.backdrop) return null;
    return new URL(s.backdrop, LIBRARY_URL).href;
  }

  // ----- rendering -----
  _render() {
    const s = this.state;
    if (s.accent) this._canvas.style.setProperty("--cannoli-accent", s.accent);
    const items = this._itemsForView(s);
    const boxart = this._selectedBoxart(s);
    const backdrop = this._backdropUrl(s);
    const title = this._titleForView(s);
    // The status bar floats top-right (absolute); the title (when present) and
    // the list flow from the top, so the first row lines up with the status bar
    // just like the real Cannoli. The flex-grow body pins the button bar to the
    // bottom.
    const body =
      s.view === "keyboard"
        ? this._keyboardHtml()
        : s.view === "romm-pair"
          ? this._rommPairHtml(s)
          : s.view === "romm-settings"
            ? this._rommSettingsHtml(s)
            : this._listHtml(items, s.selection, s) +
              (boxart ? `<div class="boxart"><img alt="" src="${boxart}"></div>` : "");
    this._canvas.innerHTML =
      (backdrop ? `<div class="backdrop" style="background-image:url('${backdrop}')"></div>` : "") +
      this._statusbarHtml({ battery: s.battery, time: s.time }) +
      (title ? `<h1 class="title">${escapeHtml(title)}</h1>` : "") +
      `<div class="body">${body}</div>` +
      this._buttonbarHtml(s.view);
    this._builtKey = this._viewKey();
    this._fitTitle();
    this._positionCursor(false);
    requestAnimationFrame(() => {
      this._fitTitle();
      this._positionCursor(false);
    });
  }

  // Title is 1.3x the list font (like the launcher's ScreenTitle). If that would
  // run under the status bar, shrink it to fit, down to the list font size.
  _fitTitle() {
    const title = this._canvas.querySelector(".title");
    if (!title) return;
    const LIST = 45;
    const MAX = Math.round(LIST * 1.3); // 58, matches the launcher's 1.3x
    const GAP = 40; // clearance to keep before the status bar
    const PAD_LEFT = 26;
    const statusbar = this._canvas.querySelector(".statusbar");
    // Measure the real element (offset* are in the unscaled 1240px layout space,
    // independent of the canvas transform), so the font metrics are exact.
    title.style.fontSize = `${MAX}px`;
    const limit = (statusbar ? statusbar.offsetLeft : CANVAS_W - 40) - GAP;
    const rightEdge = title.offsetLeft + title.offsetWidth;
    if (rightEdge > limit) {
      const textW = title.offsetWidth - PAD_LEFT;
      const availText = limit - title.offsetLeft - PAD_LEFT;
      const size = Math.max(LIST, Math.floor((MAX * availText) / textW));
      title.style.fontSize = `${size}px`;
    }
  }

  _listHtml(items, selection, s) {
    const rows = items
      .map((t, i) => {
        let check = "";
        if (s && s.view === "collection-toggle") {
          const checked = this._collectionMembership.has(t);
          check = `<span class="list__check">${checked ? "☑" : "☐"}</span>`;
        } else if (s && s.view === "child-toggle") {
          const checked = this._childOf.get(t) === this._contextCollection;
          check = `<span class="list__check">${checked ? "☑" : "☐"}</span>`;
        } else if (s && s.multimode && s.view === "game-list") {
          // Multi-select checkboxes belong to the game list only. The multimode
          // attribute persists as you open the context menu / Manage Collections
          // over a multi-selection, so without this view guard those checkboxes
          // would wrongly bleed onto the context-menu rows.
          check = `<span class="list__check">${s.multi.includes(i) ? "☑" : "☐"}</span>`;
        }
        // Reorder handle: only the selected row, and only platform entries
        // (index 0/1 are Recently Played / Favorites, not reorderable).
        const reorder = s && s.reordermode && s.view === "system-list" && i === selection && i >= 2
          ? `<span class="list__reorder">↕</span>`
          : "";
        return `<div class="list__item ${i === selection ? "is-selected" : ""}">${reorder}${check}${escapeHtml(t)}</div>`;
      })
      .join("");
    // The cursor is a single moving pill drawn behind the selected row so it can
    // slide smoothly between rows instead of the highlight jumping.
    return `<div class="list"><div class="list__cursor"></div>${rows}</div>`;
  }

  // RomM settings sub-list: label-left / value-right rows. Reuses the .list
  // container + moving cursor so selection behaves like every other list.
  _rommSettingsHtml(s) {
    const rows = this._itemsForView(s);
    const valueFor = (label) =>
      label === "Host" ? (this._rommHost || "Not set")
        : label === "Allow Self-Signed Cert" ? "Off"
          : null;
    const items = rows
      .map((label, i) => {
        const val = valueFor(label);
        const value = val != null ? `<span class="list__value">${escapeHtml(val)}</span>` : "";
        return `<div class="list__item ${i === s.selection ? "is-selected" : ""}">` +
          `<span class="list__label">${escapeHtml(label)}</span>${value}</div>`;
      })
      .join("");
    return `<div class="list list--settings"><div class="list__cursor"></div>${items}</div>`;
  }

  // Full-screen pairing overlay. `connecting` shows the host being reached;
  // `waiting` shows the QR to scan on a second device. Mirrors RommPairingOverlay.
  _rommPairHtml(s) {
    const host = (this._library.romm && this._library.romm.host) || "romm.local";
    if (s.phase === "waiting") {
      return `<div class="pair">` +
        `<div class="pair__caption">Scan to pair this device</div>` +
        `<img class="pair__qr" alt="Pairing QR code" src="${QR_URL.href}">` +
        `</div>`;
    }
    return `<div class="pair">` +
      `<div class="pair__caption">Connecting to RomM</div>` +
      `<div class="pair__host">${escapeHtml(host)}</div>` +
      `</div>`;
  }

  // Position the moving pill over the selected row. animate=false snaps without
  // a transition (fresh render); animate=true lets CSS slide it (selection move).
  _positionCursor(animate = true) {
    const cursor = this._canvas.querySelector(".list__cursor");
    const sel = this._canvas.querySelector(".list__item.is-selected");
    if (!cursor) return;
    if (!sel) {
      cursor.style.opacity = "0";
      return;
    }
    if (!animate) cursor.style.transition = "none";
    cursor.style.transform = `translateY(${sel.offsetTop}px)`;
    cursor.style.width = `${sel.offsetWidth}px`;
    cursor.style.height = `${sel.offsetHeight}px`;
    cursor.style.opacity = "1";
    if (!animate) {
      void cursor.offsetWidth; // commit the snap before re-enabling transitions
      cursor.style.transition = "";
    }
  }

  // Lightweight update when only the selection changed within the same list:
  // slide the cursor, flip which row is dark, and swap the box art.
  _moveSelection() {
    const s = this.state;
    this._canvas
      .querySelectorAll(".list__item")
      .forEach((el, i) => el.classList.toggle("is-selected", i === s.selection));
    this._positionCursor(true);
    if (s.view === "game-list") {
      const url = this._selectedBoxart(s);
      const img = this._canvas.querySelector(".boxart img");
      if (img && url) img.src = url;
    }
  }

  // The on-screen keyboard layout: KEYBOARD_ALPHA from KeyboardController.kt,
  // ported as-is (no shift/symbols layouts needed for this demo).
  _keyboardRows() {
    return KEYBOARD_ROWS;
  }

  // Renders the text field (typed text + blinking caret) and the key grid for
  // view="keyboard". Centered as its own column, replacing the normal
  // list/boxart body for this view.
  _keyboardHtml() {
    const rowsHtml = this._keyboardRows()
      .map((row, ri) => this._keyboardRowHtml(row, ri))
      .join("");
    return (
      `<div class="kbd">` +
      (this._kbdTitle ? `<div class="kbd__title">${escapeHtml(this._kbdTitle)}</div>` : "") +
      `<div class="kbd__field"><span class="kbd__text">${escapeHtml(this._kbdText)}</span>` +
      `<span class="kbd__caret">|</span></div>` +
      `<div class="kbd__grid">${rowsHtml}</div>` +
      `</div>`
    );
  }

  _keyboardRowHtml(row, ri) {
    // The space row is a single wide key with no glyph (a short bar, like the
    // launcher's KeyboardOverlay).
    if (row.length === 1 && row[0] === " ") {
      const selected = ri === this._keyRow;
      return (
        `<div class="kbd__row kbd__row--space">` +
        `<span class="kbd__key kbd__key--wide${selected ? " is-selected" : ""}">` +
        `<span class="kbd__key__bar"></span></span>` +
        `</div>`
      );
    }
    const keysHtml = row
      .map((key, ci) => {
        const classes = ["kbd__key"];
        if (ri === this._keyRow && ci === this._keyCol) classes.push("is-selected");
        if (KEYBOARD_SPECIAL_KEYS.has(key)) classes.push("kbd__key--special");
        return `<span class="${classes.join(" ")}">${escapeHtml(key)}</span>`;
      })
      .join("");
    return `<div class="kbd__row">${keysHtml}</div>`;
  }

  _statusbarHtml({ battery, time }) {
    return `
      <div class="statusbar">
        <span class="statusbar__glyphs">${STATUS_GLYPHS}</span>
        <span class="statusbar__battery">${escapeHtml(battery)}%</span>
        <span class="statusbar__time">${escapeHtml(time)}</span>
      </div>`;
  }

  _buttonbarHtml(view) {
    const hints = HINTS[view] || HINTS["system-list"];
    const side = (which) =>
      (hints[which] || [])
        .map(([b, l]) =>
          `<span class="hint"><span class="hint__badge">${b}</span>` +
          `<span class="hint__label">${l}</span></span>`)
        .join("");
    return `
      <footer class="buttonbar">
        <div class="buttonbar__side buttonbar__left">${side("left")}</div>
        <div class="buttonbar__side buttonbar__right">${side("right")}</div>
      </footer>`;
  }

  // ----- navigation state machine -----
  _press(input) {
    const s = this.state;
    if (s.view === "keyboard") {
      this._pressKeyboard(input);
      return;
    }
    if (s.view === "system-list" && s.reordermode && (input === "up" || input === "down")) {
      this._reorderMove(input === "down" ? 1 : -1);
      return;
    }
    if (input === "down") this._setSelection(this.state.selection + 1);
    else if (input === "up") this._setSelection(this.state.selection - 1);
    else if (input === "a") this._activate();
    else if (input === "b") this._back();
    else if (input === "start") this._openContext();
    else if (input === "y") {
      if (s.view === "collection-toggle") this._openKeyboard();
    } else if (input === "select") {
      if (s.view === "system-list") this._toggleReorderMode();
      else this._toggleMulti();
    }
  }

  // ----- on-screen keyboard -----
  // Open the keyboard to name a new collection. Entry point is "Y" (New) on the
  // Manage Collections screen, matching the launcher; the keyboard returns to
  // wherever it was opened, with the new collection added and selected.
  _openKeyboard() {
    this._returnState = { view: this.state.view, list: this.state.list, selection: this.state.selection };
    this._keyboardPurpose = "new-collection";
    this._kbdTitle = "New Collection";
    this._keyRow = 2;
    this._keyCol = 0;
    this._kbdText = "";
    this._applyState({ view: "keyboard", selection: 0 });
  }

  // Open the keyboard to type the RomM server host, then return to the RomM
  // settings screen with the host set (mirrors the launcher's Host row).
  _openRommHostKeyboard() {
    this._returnState = { view: "romm-settings", selection: 0 };
    this._keyboardPurpose = "romm-host";
    this._kbdTitle = "Host";
    this._keyRow = 2;
    this._keyCol = 0;
    this._kbdText = this._rommHost || "";
    this._applyState({ view: "keyboard", selection: 0 });
  }

  // up/down/left/right move the focused key (wrapping within the grid,
  // clamping columns like KeyboardController.moveSelection); a presses the
  // focused key; start confirms; b cancels back to where the keyboard opened.
  _pressKeyboard(input) {
    const rows = this._keyboardRows();
    if (input === "up" || input === "down") {
      const dir = input === "down" ? 1 : -1;
      const nextRow = (this._keyRow + dir + rows.length) % rows.length;
      this._keyRow = nextRow;
      this._keyCol = Math.min(this._keyCol, rows[nextRow].length - 1);
      this._render();
    } else if (input === "left" || input === "right") {
      const row = rows[this._keyRow];
      const dir = input === "right" ? 1 : -1;
      this._keyCol = (this._keyCol + dir + row.length) % row.length;
      this._render();
    } else if (input === "a") {
      this._pressFocusedKey();
    } else if (input === "start") {
      this._confirmKeyboard();
    } else if (input === "b") {
      this._cancelKeyboard();
    }
  }

  // "Presses" the currently focused key: letters/digits/space append to the
  // typed text, ← backspaces, ↵ confirms. ⇧/⌨ are rendered but are no-ops
  // here (this demo only needs the alpha layout).
  _pressFocusedKey() {
    const rows = this._keyboardRows();
    const key = rows[this._keyRow][this._keyCol];
    if (key === "←") this._kbdText = this._kbdText.slice(0, -1);
    else if (key === "↵") {
      this._confirmKeyboard();
      return;
    } else if (key === "⇧" || key === "⌨") {
      // no-op: shift/symbols behavior is out of scope for this demo.
    } else this._kbdText += key;
    this._render();
  }

  // Confirm (START or ↵): if the keyboard was opened to name a new
  // collection, append it to the runtime list and land back on Collections
  // with the new entry selected; otherwise just return to where it opened.
  _confirmKeyboard() {
    const purpose = this._keyboardPurpose;
    const text = this._kbdText.trim();
    this._keyboardPurpose = null;
    if (purpose === "new-collection" && text) {
      this._collections.push(text);
      const origin = this._returnState || { view: "collection-toggle", selection: 0 };
      const items = this._itemsForView({ ...origin, selection: 0 });
      const sel = items.indexOf(text);
      this._applyState({ view: origin.view, list: origin.list, selection: sel >= 0 ? sel : 0 });
      return;
    }
    if (purpose === "romm-host" && text) {
      this._rommHost = text;
      this._applyState({ view: "romm-settings", selection: 0 });
      return;
    }
    this._applyState(this._returnState || { view: "collection-toggle", selection: 0 });
  }

  _cancelKeyboard() {
    this._keyboardPurpose = null;
    this._applyState(this._returnState || { view: "collection-toggle", selection: 0 });
  }

  // "Presses" the key the focus is already sitting on: append the character to
  // the field (case preserved, since the alpha layout is lowercase-only) and
  // re-render. The focus is walked onto the key one D-pad step at a time by the
  // navigation steps _expandSteps emits, so this never teleports the cursor.
  _typeChar(ch) {
    if (this.state.view !== "keyboard") return;
    this._kbdText += ch;
    this._render();
  }

  // Grid position of the key that produces `ch` (letters match case-insensitively;
  // " " is the space key). Null if the character has no key on the alpha layout.
  _keyPosFor(ch) {
    const rows = this._keyboardRows();
    const target = ch === " " ? " " : ch.toLowerCase();
    for (let row = 0; row < rows.length; row++) {
      const col = rows[row].indexOf(target);
      if (col !== -1) return { row, col };
    }
    return null;
  }

  // One D-pad step from `pos`, applying the same wrap + column-clamp rules as
  // _pressKeyboard (the launcher's KeyboardController.moveSelection).
  _kbdStep(pos, dir) {
    const rows = this._keyboardRows();
    let { row, col } = pos;
    if (dir === "up" || dir === "down") {
      row = (row + (dir === "down" ? 1 : -1) + rows.length) % rows.length;
      col = Math.min(col, rows[row].length - 1);
    } else {
      col = (col + (dir === "right" ? 1 : -1) + rows[row].length) % rows[row].length;
    }
    return { row, col };
  }

  // A step-by-step path from `from` to `target`: move to the target row, then
  // along it, each axis taking the shorter wrapped direction. Returns the ordered
  // moves and the final focus position.
  _planKeyPath(from, target) {
    const rows = this._keyboardRows();
    const moves = [];
    let pos = { row: from.row, col: from.col };
    const R = rows.length;
    const down = (target.row - pos.row + R) % R;
    const up = (pos.row - target.row + R) % R;
    const vDir = down <= up ? "down" : "up";
    for (let n = Math.min(down, up); n > 0; n--) { moves.push(vDir); pos = this._kbdStep(pos, vDir); }
    const L = rows[pos.row].length;
    const right = (target.col - pos.col + L) % L;
    const left = (pos.col - target.col + L) % L;
    const hDir = right <= left ? "right" : "left";
    for (let n = Math.min(right, left); n > 0; n--) { moves.push(hDir); pos = this._kbdStep(pos, hDir); }
    return { moves, pos };
  }

  // Swap the selected platform with its neighbor (delta = ±1) and move the
  // selection with it, matching the launcher's reorderMoveUp/Down. Only the
  // platform range (index >= 2) is reorderable; Recently Played/Favorites are not.
  _reorderMove(delta) {
    const s = this.state;
    const order = this._platformIndices();
    const cur = s.selection - 2;
    if (cur < 0 || cur >= order.length) return;
    const next = Math.max(0, Math.min(order.length - 1, cur + delta));
    if (next === cur) return;
    [order[cur], order[next]] = [order[next], order[cur]];
    this._applyState({ view: "system-list", selection: next + 2 });
  }

  _setSelection(i) {
    const n = this._itemsForView(this.state).length;
    if (!n) return;
    this.setAttribute("selection", String(Math.max(0, Math.min(n - 1, i))));
  }

  _activate() {
    const s = this.state;
    if (s.view === "collection-toggle") { this._toggleCollection(s.selection); return; }
    if (s.view === "child-toggle") { this._toggleChild(s.selection); return; }
    if (s.view === "context-menu") { this._runContextAction(); return; }
    if (s.view === "collection-menu") {
      // Only "Child Collections" is wired for this demo; Rename/Delete are shown
      // for completeness but do nothing here.
      const item = this._itemsForView(s)[s.selection];
      if (item === "Child Collections") this._applyState({ view: "child-toggle", selection: 0 });
      return;
    }
    if (s.view === "collections") {
      const name = this._itemsForView(s)[s.selection];
      if (!name) return;
      this._applyState({ view: "collection-contents", list: name, selection: 0 });
      return;
    }
    if (s.view === "game-list" && s.multimode) { this._toggleCheck(s.selection); return; }
    if (s.view === "romm-settings") {
      const label = this._itemsForView(s)[s.selection];
      if (label === "Host") this._openRommHostKeyboard();
      else if (label === "Pair with Another Device")
        this._applyState({ view: "romm-pair", phase: "connecting" });
      return;
    }
    if (s.view !== "system-list") return;
    let listId;
    if (s.selection === 0) listId = "recently_played";
    else if (s.selection === 1) listId = "favorites";
    else listId = (this._library.platforms[this._platformIndices()[s.selection - 2]] || {}).id;
    if (!listId) return;
    this._returnSelection = s.selection;
    this._applyState({ view: "game-list", list: listId, selection: 0 });
  }

  // Run the highlighted context-menu action, mutating demo state, then return to
  // the list (favorited game floats to the top with a star; removed game is gone).
  _runContextAction() {
    const s = this.state;
    const gameId = s.game;
    const action = this._contextActions(gameId)[s.selection];
    if (action === "Manage Collections") {
      this._contextGame = gameId;
      this._applyState({ view: "collection-toggle", selection: 0 });
      return;
    }
    const ret = this._returnState || { list: this._contextList, selection: 0 };
    if (action === "Add To Favorites") this._fav.add(gameId);
    else if (action === "Remove From Favorites") this._fav.delete(gameId);
    else if (action === "Remove From Recently Played") this._removed.add(gameId);
    const newList = this._gamesForList(ret.list);
    const idx = newList.indexOf(gameId);
    const sel = idx >= 0 ? idx : Math.min(ret.selection, Math.max(0, newList.length - 1));
    this._applyState({ view: "game-list", list: ret.list, selection: sel });
  }

  _toggleCheck(i) {
    const cur = new Set(this.state.multi);
    if (cur.has(i)) cur.delete(i);
    else cur.add(i);
    this.setAttribute("multiselect", [...cur].sort((a, b) => a - b).join(","));
  }

  // Toggle the highlighted collection's membership for this._contextGame.
  // Not attribute-backed (it's a Set, not a string), so re-render explicitly.
  _toggleCollection(i) {
    const name = this._itemsForView(this.state)[i];
    if (!name) return;
    if (this._collectionMembership.has(name)) this._collectionMembership.delete(name);
    else this._collectionMembership.add(name);
    this._render();
  }

  // Toggle the highlighted collection's child status under this._contextCollection
  // (the parent currently being edited). Single-parent: marking it here replaces
  // any prior parent. Not attribute-backed (it's a Map), so re-render explicitly.
  _toggleChild(i) {
    const name = this._itemsForView(this.state)[i];
    if (!name) return;
    if (this._childOf.get(name) === this._contextCollection) this._childOf.delete(name);
    else this._childOf.set(name, this._contextCollection);
    this._render();
  }

  // Index of a collection in the top-level (children-hidden) Collections list,
  // so Back can restore the highlight to the collection you came from.
  _collectionsIndex(name) {
    const list = (this._collections || this._library.collections || []).filter(
      (n) => !this._childOf.has(n)
    );
    const i = list.indexOf(name);
    return i >= 0 ? i : 0;
  }

  _back() {
    const v = this.state.view;
    if (v === "system-list") return;
    if (v === "game-list") {
      this._applyState({ view: "system-list", selection: this._returnSelection || 0 });
      return;
    }
    if (v === "context-menu") {
      this._applyState(this._returnState || { view: "game-list", list: this._contextList, selection: 0 });
      return;
    }
    if (v === "collection-toggle") {
      // Opened from a game's context menu ("Manage Collections").
      const acts = this._contextActions(this._contextGame);
      this._applyState({
        view: "context-menu",
        game: this._contextGame,
        selection: Math.max(0, acts.indexOf("Manage Collections")),
      });
      return;
    }
    if (v === "child-toggle") {
      // Opened from the collection context menu ("Child Collections" = index 1).
      this._applyState({ view: "collection-menu", selection: 1 });
      return;
    }
    if (v === "collection-menu" || v === "collection-contents") {
      const name = v === "collection-menu" ? this._contextCollection : this.state.list;
      this._applyState({ view: "collections", selection: this._collectionsIndex(name) });
      return;
    }
    this._applyState({ view: "system-list", selection: this._returnSelection || 0 });
  }

  _openContext() {
    const s = this.state;
    if (s.view === "collections") {
      // Start on a highlighted collection opens its context menu
      // (Rename / Child Collections / Delete).
      const name = this._itemsForView(s)[s.selection];
      if (!name) return;
      this._contextCollection = name;
      this._applyState({ view: "collection-menu", selection: 0 });
      return;
    }
    if (s.view !== "game-list") return;
    const gameId = this._gamesForList(s.list)[s.selection];
    if (!gameId) return;
    this._contextList = s.list;
    this._returnState = { view: "game-list", list: s.list, selection: s.selection };
    this._applyState({ view: "context-menu", game: gameId, selection: 0 });
  }

  _toggleMulti() {
    if (this.hasAttribute("multimode")) this.removeAttribute("multimode");
    else this.setAttribute("multimode", "");
  }

  _toggleReorderMode() {
    if (this.hasAttribute("reordermode")) this.removeAttribute("reordermode");
    else this.setAttribute("reordermode", "");
  }

  // Set several attributes then render exactly once.
  _applyState(st) {
    this._batching = true;
    this.setAttribute("view", st.view || "system-list");
    if (st.list != null) this.setAttribute("list", st.list);
    if (st.game != null) this.setAttribute("game", st.game);
    if (st.backdrop != null) this.setAttribute("backdrop", st.backdrop);
    if (st.phase != null) this.setAttribute("phase", st.phase);
    if (st.contentmode != null) this.setAttribute("contentmode", st.contentmode);
    this.setAttribute("selection", String(st.selection != null ? st.selection : 0));
    this._batching = false;
    this._render();
  }

  // ----- tutorial player -----
  // Shorthand-step expansion, run once before playback. A { typeText, perChar?,
  // perMove? } step becomes real D-pad navigation: for each character the focus
  // walks one key at a time onto that key (like the launcher, never teleporting),
  // then a { typeChar } step presses it. The simulated focus is threaded through
  // manual keyboard moves and the keyboard-open reset too, so a later typeText
  // stays accurate. Returns a new array; never mutates the input (the same
  // script object is reused every loop/replay).
  _expandSteps(steps) {
    const out = [];
    let focus = { row: 2, col: 0 }; // keyboard's default focus (KeyboardState)
    for (const step of steps) {
      if (step.typeText != null) {
        const perChar = step.perChar != null ? step.perChar : 240;
        const perMove = step.perMove != null ? step.perMove : 90;
        for (const ch of step.typeText) {
          const target = this._keyPosFor(ch);
          if (!target) continue;
          const { moves, pos } = this._planKeyPath(focus, target);
          for (const m of moves) out.push({ press: m, wait: perMove });
          out.push({ typeChar: ch, wait: perChar });
          focus = pos;
        }
      } else {
        const p = step.press;
        if (p === "up" || p === "down" || p === "left" || p === "right") focus = this._kbdStep(focus, p);
        else if (p === "y") focus = { row: 2, col: 0 }; // opening the keyboard resets focus
        out.push(step);
      }
    }
    return out;
  }

  // script = { start: {state}, steps: [{press?, typeChar?, typeText?, wait?}], loop?: bool, loopDelay?: ms }
  play(script) {
    this.stop();
    this._script = script;
    const steps = this._expandSteps(script.steps || []);
    this._resetDemoState();
    this._applyState(script.start || {});
    let i = 0;
    const run = () => {
      if (this._script !== script || !this.isConnected) return;
      if (i >= steps.length) {
        if (script.loop === false) {
          if (script.onEnd) script.onEnd();
          return;
        }
        this._timer = setTimeout(() => {
          if (this._script !== script) return;
          this._resetDemoState();
          this._applyState(script.start || {});
          i = 0;
          run();
        }, script.loopDelay != null ? script.loopDelay : 1400);
        return;
      }
      const step = steps[i++];
      this._timer = setTimeout(() => {
        if (this._script !== script) return;
        if (step.press) this._press(step.press);
        if (step.typeChar != null) this._typeChar(step.typeChar);
        if (step.set) this._applyState(step.set);
        run();
      }, step.wait != null ? step.wait : 550);
    };
    run();
  }

  stop() {
    this._script = null;
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
    }
  }

  // Play the tutorial once on click, then reset to the start frame and re-show
  // the play button so it never loops on its own.
  _startTutorial() {
    if (!this._tutorialScript) return;
    const base = this._tutorialScript;
    this._hidePlayOverlay();
    this._hideReplayBar();
    this.play(
      Object.assign({}, base, {
        loop: false,
        // Stay on the final frame (the outcome) when the run ends, and offer
        // "Replay" as text under the screen. Replay itself resets from the start.
        onEnd: () => this._showReplayBar(),
      })
    );
  }

  // The initial control is always the play button (a restart, once played, is
  // offered as text under the screen instead of covering it).
  _showPlayOverlay() {
    if (!this._playOverlay) return;
    const btn = this._playOverlay.querySelector(".play-overlay__btn");
    if (btn) btn.innerHTML = ICON_PLAY;
    this._playOverlay.setAttribute("aria-label", "Play tutorial");
    this._playOverlay.hidden = false;
  }

  _hidePlayOverlay() {
    if (this._playOverlay) this._playOverlay.hidden = true;
  }

  // The Replay-bar space is reserved up front for tutorial screens (see the
  // fitter), so showing/hiding it never shifts the surrounding page layout.
  _showReplayBar() {
    if (this._replayBar) this._replayBar.hidden = false;
  }

  _hideReplayBar() {
    if (this._replayBar) this._replayBar.hidden = true;
  }

  _installFitter() {
    this._fit = () => {
      const w = this.clientWidth || CANVAS_W;
      const scale = w / CANVAS_W;
      this._canvas.style.transform = `scale(${scale})`;
      const screenH = CANVAS_H * scale;
      // Reserve the Replay-bar strip for any tutorial screen so its later
      // appearance does not push the page around.
      const barH = this._tutorialScript ? REPLAY_BAR_H : 0;
      this.style.height = `${screenH + barH}px`;
      // The play overlay covers only the screen, not the reserved strip.
      if (this._playOverlay) this._playOverlay.style.height = `${screenH}px`;
    };
    this._ro = new ResizeObserver(() => requestAnimationFrame(this._fit));
    this._ro.observe(this);
    this._fit();
  }

  // Keep the status-bar clock live: re-render on each minute boundary so the
  // displayed HH:MM flips with the wall clock. Skips the redraw when an explicit
  // `time` attribute pins the value (e.g. tutorials/screenshots).
  _startClock() {
    const schedule = () => setTimeout(tick, 60000 - (Date.now() % 60000));
    const tick = () => {
      if (this._ready && !this.hasAttribute("time")) this._render();
      this._clockTimer = schedule();
    };
    this._clockTimer = schedule();
  }

  disconnectedCallback() {
    this.stop();
    if (this._clockTimer) {
      clearTimeout(this._clockTimer);
      this._clockTimer = null;
    }
    if (this._ro) this._ro.disconnect();
  }
}

customElements.define("cannoli-screen", CannoliScreen);
