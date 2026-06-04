import os
import shutil


FONT_SOURCE = "docs/resources/fonts/MPlus-1c-NerdFont-Bold.ttf"
FONT_FAMILY = "MPlus1c-NerdFont"
CACHE_DIR = ".cache/plugin/social/fonts"


def on_pre_build(config, **kwargs):
    target_dir = os.path.join(CACHE_DIR, FONT_FAMILY)
    os.makedirs(target_dir, exist_ok=True)
    for style in ("Bold.ttf", "Regular.ttf"):
        dest = os.path.join(target_dir, style)
        if not os.path.exists(dest):
            shutil.copy(FONT_SOURCE, dest)
