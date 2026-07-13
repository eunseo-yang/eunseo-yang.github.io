---
name: content-table
description: How to add clean, paper-style tables to blog posts (_posts/) and project pages (_projects/) on this Jekyll site. Use whenever creating or fixing a markdown table in bilingual content rendered inside .detail-body.
---

# Adding tables to blog / project content

Tables in `_posts/` and `_projects/` render inside `.detail-body`. Global CSS in
`assets/css/site.css` (search `.detail-body table`) already styles every table —
**do not add inline styles or per-table CSS.** Just write a normal kramdown table
and it comes out looking like a paper table: full-width, centered, header row with
a shaded background and an accent underline, zebra-striped body rows, 1px cell
borders, and horizontal scroll on mobile.

## How to write one

Standard kramdown table syntax. Use the alignment row (`:---`) to set per-column
alignment. Keep the **first column short** — it is a label column and is rendered
`white-space: nowrap`, so long text there will not wrap.

```markdown
| 비교 항목 | 피험자 내 설계 | 피험자 간 설계 |
| :--- | :--- | :--- |
| **핵심 개념** | 한 사람이 모든 버전을 경험 | 그룹을 나눠 각자 다른 버전을 경험 |
| **필요 유저 수** | 적은 인원으로 가능 | 많은 인원이 필요 |
```

- `:---` left · `:--:` center · `---:` right. Header cells are always centered by CSS.
- Bold a cell's label with `**...**` (common for the first column).

## Rules that matter here

1. **Bilingual = duplicate the table.** Content lives in two blocks,
   `<div data-t="en" markdown="1">` and `<div data-t="ko" markdown="1">`. Put the
   table in **both** blocks (translated), or it will only appear in one language.
   `markdown="1"` is required on the div or the table won't be parsed.
2. **Korean wrapping is already handled.** Cells use `word-break: keep-all`, so
   Korean wraps at word boundaries instead of breaking character-by-character.
   If a column still looks cramped, shorten the header/labels rather than adding CSS.
3. **First column = short labels only.** It is `nowrap`. If you genuinely need a
   long first column, that cell can overflow — restructure so the long text is in
   columns 2+.
4. **Wide tables scroll on mobile** automatically (`overflow-x: auto` under 640px);
   don't try to cram too many columns to avoid it.

## Styling knobs (only if asked to change the look)

All in `assets/css/site.css` under `.detail-body table`:
- Centered block: `margin: 26px auto`.
- Grid look (current): every cell has `border: 1px solid var(--line)`.
- **Booktabs / LaTeX look** (horizontal rules only, no vertical lines): remove the
  `border` on `th, td` and instead put `border-bottom` on rows + a top/bottom rule
  on the table. Offer this when the user wants a stricter academic paper style.
