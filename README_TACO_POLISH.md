# TACO page polish update

This is a small follow-up patch for the existing `/taco/` page.

It updates:

- `taco.md`
- `_sass/_taco.scss`

What changed:

- Adds a compact section navigation: Overview, TACO-MC, TACO-HD, TACO-RT, Resources.
- Adds a clearer code-availability note.
- Adds a short Overview section.
- Converts the Resources list into a compact table.
- Refines spacing, captions, and mobile behaviour.

Apply from the root of the repository:

```bash
cp -R /path/to/taco_polish_update/* .
bundle exec jekyll serve
```

Then check:

```text
http://127.0.0.1:4000/taco/
```

Commit:

```bash
git add taco.md _sass/_taco.scss README_TACO_POLISH.md
git commit -m "Polish TACO archive page"
git push origin main
```
