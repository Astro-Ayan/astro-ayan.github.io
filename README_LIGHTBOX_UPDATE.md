# Research Image Lightbox Update

Adds click-to-enlarge behavior for figures on the TACO and X-Ray pages.

## Files added

- `_sass/_research_lightbox.scss`
- `assets/js/research-lightbox.js`
- `scripts/apply_lightbox_update.py`

## What the script changes

- Appends `@import "research_lightbox";` to `assets/css/main.scss` if missing.
- Appends the lightbox script tag to `taco.md` and `xray.md` if missing.

## Apply

From the repository root:

```bash
cp -R ~/Downloads/lightbox_update/* .
python3 scripts/apply_lightbox_update.py
bundle exec jekyll serve
```

Check:

```text
http://127.0.0.1:4000/taco/
http://127.0.0.1:4000/xray/
```

Click any figure/image on either page. It should open in a dark overlay. Press `Esc` or click outside/× to close.

## Commit

```bash
git status
git add _sass/_research_lightbox.scss assets/js/research-lightbox.js scripts/apply_lightbox_update.py assets/css/main.scss taco.md xray.md README_LIGHTBOX_UPDATE.md
git commit -m "Add lightbox for research figures"
git push origin main
```
