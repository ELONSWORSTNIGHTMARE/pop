# Aura Café & Bar — static site

Two-page layout: **home** (`index.html`) and **full menu** (`menu.html`). Anchor sections on the home page (About, Reviews, Location). No build step.

## Preview locally

**Option 1 — open the file**

Open `index.html` in your browser (double-click or drag into a window).

**Option 2 — local HTTP server** (recommended if the map embed blocks file://)

From this folder:

```bash
cd "$(dirname "$0")"
python3 -m http.server 8080
```

Then visit [http://127.0.0.1:8080/](http://127.0.0.1:8080/) and [http://127.0.0.1:8080/menu.html](http://127.0.0.1:8080/menu.html).

## Files

- `index.html` — hero, menu teaser, about, reviews, location
- `menu.html` — full textual carta (ES/EN) plus printable menu photo scans
- `styles.css` — layout, menu carta typography, menu scan gallery, home teaser
- `menu-i18n.js` — menu data and translations, `localStorage` language toggle; `initNavI18n()` on home, `initMenuPage()` on `menu.html`
- `hero.js` — hero slideshow rotation (home only)
- `reviews.js` — reviews carousel (home only)

## Menu (Carta)

The home **#menu** block is a short teaser with **Ver carta completa** / **View full menu** linking to `menu.html`.

On `menu.html`, copy and prices come from the owner’s printed carta (encoded in `menu-i18n.js`). Scanned pages:

- `images/menu/scan-brunch-smoothies.png`
- `images/menu/scan-pancakes-cocktails.png`

Tap a scan to open it full size in a lightbox. Use the **ES / EN** control in the header on either page; the choice persists in `localStorage` under `aura-menu-lang`.

## Hero slideshow

First slide is `images/interior.png` (full resolution). `images/interior-dining.png` (small) is **not** used in the hero; it appears in the About photo strip on the home page.

Slide order on `index.html`:

1. `interior.png`
2. `drinks.png`
3. `breakfast-bowl.png`
4. `pancakes.png`

## Replacing review placeholders

Review cards in `index.html` use the `review-card` markup. Edit or add cards inside `[data-reviews-track]` as needed.
