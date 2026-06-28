# TACO website update

This is a minimal patch for `Astro-Ayan/astro-ayan.github.io`.

Copy these paths into the repository root, preserving folders:

- `taco.md`
- `_sass/_taco.scss`
- `_data/menu.yml`
- `assets/css/main.scss`
- `assets/images/taco/*.png`
- `assets/taco/resources/*.pdf`

Then commit and push to `main`.

Suggested command from inside the repository:

```bash
cp -R path/to/taco_update/* .
git status
git add taco.md _sass/_taco.scss _data/menu.yml assets/css/main.scss assets/images/taco assets/taco/resources
bundle exec jekyll build
git commit -m "Add TACO research archive page"
git push origin main
```

Notes:

- This patch adds `/taco/` and one `TACO` navigation item.
- It does not change the homepage, About page, Publications page, or global palette.
- The TACO-specific styling is isolated in `_sass/_taco.scss`.
- The page presents the uploaded papers/thesis as resources, not as a code release.
