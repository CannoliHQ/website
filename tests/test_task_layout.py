import pytest


@pytest.fixture
def page_at(page, base_url):
    def go(width):
        page.set_viewport_size({"width": width, "height": 1000})
        page.goto(f"{base_url}/docs/resources/cannoli-ui/_tasktest.html")
        page.wait_for_selector(".task__visual")
        return page
    return go


def _box(page, sel):
    return page.locator(sel).bounding_box()


def test_side_by_side_on_desktop(page_at):
    p = page_at(1000)
    v, s = _box(p, ".task__visual"), _box(p, ".task__steps")
    # steps sit to the right of the visual...
    assert s["x"] > v["x"] + v["width"] / 2
    # ...and are vertically centered within the visual's span (not stacked below)
    s_mid = s["y"] + s["height"] / 2
    assert v["y"] < s_mid < v["y"] + v["height"]


def test_stacked_on_mobile(page_at):
    p = page_at(390)
    v, s = _box(p, ".task__visual"), _box(p, ".task__steps")
    # steps sit below the visual
    assert s["y"] > v["y"] + v["height"] / 2
