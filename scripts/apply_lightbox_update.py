#!/usr/bin/env python3
from pathlib import Path

ROOT = Path.cwd()
MAIN_SCSS = ROOT / "assets" / "css" / "main.scss"
IMPORT_LINE = '@import "research_lightbox";'
SCRIPT_TAG = '<script src="/assets/js/research-lightbox.js" defer></script>'


def append_once(path: Path, text: str) -> None:
    content = path.read_text() if path.exists() else ""
    if text not in content:
        if content and not content.endswith("\n"):
            content += "\n"
        content += text + "\n"
        path.write_text(content)


def add_script_to_page(filename: str) -> None:
    path = ROOT / filename
    if not path.exists():
        print(f"Skipping {filename}: file not found")
        return
    content = path.read_text()
    if SCRIPT_TAG not in content:
        if not content.endswith("\n"):
            content += "\n"
        content += "\n" + SCRIPT_TAG + "\n"
        path.write_text(content)
        print(f"Added lightbox script to {filename}")
    else:
        print(f"Lightbox script already present in {filename}")


if __name__ == "__main__":
    if not MAIN_SCSS.exists():
        raise SystemExit("assets/css/main.scss not found. Run this script from the repo root.")
    append_once(MAIN_SCSS, IMPORT_LINE)
    print("Ensured lightbox stylesheet import in assets/css/main.scss")
    add_script_to_page("taco.md")
    add_script_to_page("xray.md")
