# X-Ray Spectral & Timing Studies module

This patch adds a conservative `/xray/` research archive page.

## Files included

- `xray.md`
- `_sass/_xray.scss`
- `assets/images/xray/*.png`
- `assets/xray/resources/*.pdf`
- `scripts/apply_xray_update.py`

## Apply

From the repo root, after copying this folder into the repo:

```bash
python3 scripts/apply_xray_update.py
bundle exec jekyll serve
```

Preview:

```text
http://127.0.0.1:4000/xray/
```

Then commit:

```bash
git add xray.md _sass/_xray.scss assets/images/xray assets/xray/resources scripts/apply_xray_update.py assets/css/main.scss _data/menu.yml
git commit -m "Add X-ray spectral and timing studies page"
git push origin main
```

## Notes

The page is intentionally not a broad review. It maps the uploaded paper set into a compact research archive: data/tools, H1743-322, Cygnus X-1, GRS 1915+105 subclasses, comparative variability, timing diagnostics, and resources.
