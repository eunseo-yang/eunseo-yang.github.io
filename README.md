# Personal Website

The personal website of **Eunseo Yang** — a master's student in Human-AI Interaction.
Live at **[eunseo-yang.github.io](https://eunseo-yang.github.io)**.

Built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages. Publications,
paper reviews, and projects are written as markdown files, so the site regenerates
itself whenever content is added.

> 📅 **Update cadence:** this site is refreshed roughly **once every six months**
> (about twice a year), as new publications, reviews, and projects accumulate.

## Structure

| Path | Purpose |
|------|---------|
| `_publications/`, `_reviews/`, `_projects/` | Content — one markdown file per item |
| `_layouts/`, `_includes/` | Page templates |
| `assets/css/site.css` | Theme (colors, fonts, spacing) |
| `assets/js/main.js` | Dark mode toggle, scroll animations |
| `_config.yml` | Site & profile settings |

## Local preview

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```
