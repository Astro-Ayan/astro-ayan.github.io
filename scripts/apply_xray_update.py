#!/usr/bin/env python3
from pathlib import Path

root = Path.cwd()
main = root / "assets" / "css" / "main.scss"
if main.exists():
    text = main.read_text()
    line = '@import "xray";'
    if line not in text:
        main.write_text(text.rstrip() + "\n" + line + "\n")
else:
    print("assets/css/main.scss not found; import _sass/_xray.scss manually if needed.")

menu = root / "_data" / "menu.yml"
if menu.exists():
    text = menu.read_text()
    if "url: /xray/" not in text and "url: \"/xray/\"" not in text:
        text = text.rstrip() + "\n- title: X-Ray\n  url: /xray/\n"
        menu.write_text(text + "\n")
else:
    print("_data/menu.yml not found; add X-Ray -> /xray/ to your navigation manually if needed.")
