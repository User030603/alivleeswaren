# Ali Vleeswaren — Website & Marketing Plan

## Project Status
- Phase 1 website built and technically tested. Ready for content/business approval before launch.
- The website now targets both private customers (particulieren) and professional wholesale customers (groothandel, beenhouwers, horeca and foodservice).
- Phase 1 has no customer login/account system.
- The site now uses clean language folders: `/nl/`, `/fr/`, `/en/`, `/tr/` and `/ar/`. Customer pages are under `/klanten/{language}/`.
- Admin access is visible in the footer and opens `/admin/`. The admin panel itself stays protected by the Ali login.
- Keep the site simple, customer-friendly and usable on both mobile and desktop.
- Show only essential information; avoid clutter and overly complex sections.

## Phase 1 Website
- Main pages: Home, Assortiment, Word klant, Contact.
- Show products, meat names, units and prices or “price on request”.
- Clear buttons: call, WhatsApp, quote request and “Word klant”.
- Both private customers and wholesalers must be able to request products, prices and delivery information.
- No customer login in phase 1.
- Fast, clear and easy to use on mobile and desktop.

## Animal Illustrations / Categories
- The “Kies je vlees” category cards no longer use cartoon animal faces: each card now shows a meat photo (`images/beef.jpg`, `images/lamb.jpg`, `images/chicken.jpg`), object-fit cropped, in all five language pages.
- The cut-map section now uses the client's own chart images (`images/cuts/rund.jpg`, `lam.jpeg`, `kip.jpeg`) instead of the previous vector diagrams.
- Beef: 8 cuts (Chuck, Rib, Short Loin, Sirloin, Round, Brisket, Short Plate, Flank).
- Lamb: 6 cuts (Shoulder, Rack, Loin, Leg, Stewing, Extra lamb products).
- Chicken: 6 cuts (Breast, Wings, Thigh, Drumsticks, Skewers, Liver).
- Cut names and panel subtitles are translated in the five languages, and product names are localised through `ALI_PRODUCT_NAMES`.

## Word Klant / Customer Discount
- Add a clear “Word klant” action.
- Customer registration is a simple lead form in phase 1, not a login system.
- The form has a customer type choice: private customer or wholesaler/horeca.
- New customers receive a welcome discount.
- Current site uses 8% welcome discount with code WELKOM8. The exact percentage (8% or 5%) and conditions still need final confirmation.
- Form fields: customer type, name, business/shop name (required for wholesale, optional for private), phone, email, city and optional VAT number.
- After registration: the site shows a discount confirmation and WhatsApp/e-mail buttons. The request is not approved automatically.
- The form saves a lead in the browser and prepares a WhatsApp/e-mail message. For production, connect it to e-mail/CRM or a form service so the business receives every request centrally.
- Later phase can add customer accounts, own prices, order history and repeat orders.
- Keep the phase 1 data structure ready for a future account system.

## Admin Panel (Ali Login)
- The footer contains a visible “Beheer” link that opens `/admin/`.
- The admin page is publicly reachable, but the panel itself is protected by the Ali login.
- The login uses a separate username and password. Access details are provided to Ali separately and are not listed here.
- The password is stored as a SHA-256 hash in `script.js`, not as plain text. Login requires HTTPS in production; localhost works for testing.
- A successful login lasts for the current browser tab session. The “Vergrendelen” button logs out immediately.
- Product management: add products, switch promo spotlight on/off, delete products and reset the demo assortment.
- Lead management: view all “Word klant” requests saved in the current browser and export them to CSV.
- Products and leads are stored in the browser only. Data does not sync between devices and is not delivered to a server.
- This is a static-site admin panel, not a full secure back office. Before production, connect real authentication and a central database or CRM if Ali must manage data across devices.
- Change the default admin credentials before launch.

## Website Structure
- Shared files stay in the root: `style.css`, `script.js`, `translations.js`, `favicon.svg` and the `images/` folder.
- Language homepages: `nl/index.html`, `fr/index.html`, `en/index.html`, `tr/index.html`, `ar/index.html`.
- Customer/lead pages: `klanten/nl/index.html`, `klanten/fr/index.html`, `klanten/en/index.html`, `klanten/tr/index.html`, `klanten/ar/index.html`.
- Admin page: `admin/index.html`.
- Internal links use clean folder URLs such as `/nl/`, `/fr/` and `/klanten/tr/`, not `index.html` links.
- The root `index.html` redirects to `/en/` (English landing page, per the client's static-per-language brief).
- Product and category images are stored locally in `images/`; category images are used as fallback when a product has no specific photo.

## Cut Maps (Beef, Lamb & Chicken)
- The homepage includes a “Vlees snijkaart” section for beef, lamb and chicken.
- Each panel is a `<figure class="cuts-map-figure">` containing the client-supplied chart image rendered as `<img class="cuts-map-img">`: `images/cuts/rund.jpg` (1131×743), `images/cuts/lam.jpeg` (720×404, dark background), `images/cuts/kip.jpeg` (402×497, portrait). Paths are centralised in `CUT_MAP_IMAGES` in `script.js`.
- CSS `.cuts-map-img` uses `max-height:460px; object-fit:contain; background:#f4ecdd`, so the portrait chicken chart and the wide lamb chart are letterboxed on the panel background rather than cropped.
- The interactive SVG overlay was removed with the switch to the client's charts: charts carry their own (Turkish) labels and their numbering does not match the product-card numbering. `setActiveCut` and the `.cuts-map-overlay` / `.cut-region` / `.cut-marker` CSS remain in place but nothing renders them.
- Caveat: the charts contain baked-in Turkish text, so NL/FR/EN/AR pages show Turkish labels. Localised or text-free charts would be needed to fix this.
- Original “butcher diagram” SVGs (`images/cuts/rund.svg`, `lam.svg`, `kip.svg`) are kept on disk but unused.
- 20 cuts in total: beef 8, lamb 6 (incl. “lende”), chicken 6 (incl. “spies” and “lever”).
- Cut names, indicative prices and “price on request” states are shown in a responsive card grid; each panel has a translated subtitle (`cuts.mapLabelRund/Lam/Kip`).
- Mobile: the layout collapses to one column at 991px; verified at 390px with no horizontal overflow in all 5 languages.

## Product Photos
- All 76 products have a local photo in `images/products/`. Filenames match `PRODUCT_IMAGES` in `script.js` (verified 76 files = 76 references).
- Photos were curated to be brand-free, halal-appropriate (no pork) and clean product shots. Rejected candidates included branded packaging, pork products, historic black-and-white prints and cooked dishes.
- Sources are Wikimedia Commons, Wikipedia infobox images and Pexels (`/tmp/opencode/newphotos/manifest.json` and `/tmp/opencode/newphotos3/` contain the file metadata). Before launch, confirm the license/attribution requirements for each file or replace with the client's own product photography.
- Latest swaps (client-requested style): `01-rundvlees-kwartier` = hanging beef on a hook (Pexels 5643415, styled studio shot), `10-hele-lam` = hanging lamb carcasses (Flickr/Openverse, CC BY), `17-hele-kip` = whole raw chicken on a slate board (Pexels 10842248). Portrait/square sources were composited onto a 4:3 canvas with a blurred background so the full product stays visible in the 212px card media.
- Previous photos are backed up in `/tmp/opencode/newphotos/old-*.jpg`, `old2-*.jpg` and in `images/products/old3-*.jpg`.

## Languages
- Dutch is the default language for Belgium.
- Required languages:
  - Dutch
  - Turkish
  - Arabic, with right-to-left layout support
  - English
  - French
- Full translations are required, not only a language switcher.
- The five-language switcher is implemented. Dutch, French, English, Turkish and Arabic translations are included.
- Arabic uses RTL alignment; mobile and desktop layouts were checked.
- Product names are localised through `window.ALI_PRODUCT_NAMES` (appended to `translations.js`, keys p1–p76) and the `getProductName(product)` helper in `script.js`; the Dutch `product.name` stays the canonical key for storage, admin editing and cut-group matching.
- The static text in each language page is still activated at runtime by `data-i18n`; a fully static per-language build (no JS i18n) remains an open point since it would also affect the admin panel and the JS-rendered product grid.

## Marketing & Advertising
- Goal: maximum attention and qualified leads from private customers and professional buyers (butchers, horeca and foodservice).
- Platforms: Google Ads/Search, YouTube, Facebook, Instagram, TikTok and Snapchat.
- Recommended phased rollout:
  1. Google Search + Facebook/Instagram + full tracking.
  2. YouTube + TikTok + a consistent content engine.
  3. Snapchat + retargeting and scaling.
- All platforms are part of the plan, but they should not all be launched at once without data.
- Tracking: Google Tag Manager, GA4, Google Ads conversions, Meta Pixel, TikTok Pixel and Snap Pixel.
- Social links: Facebook, Instagram, YouTube, TikTok and Snapchat.
- Content scope: 12–20 posts per month, 4–8 short videos, product photos, community management and monthly reporting.
- Main conversion actions: call, WhatsApp, “Word klant”, quote request and website form.
- Advertising must stay unobtrusive and must not make the site look cluttered.

## Investment Options
Prices are excl. VAT. Ad budget is paid directly to the platforms and is separate from the management fee.

| Package | Setup | Management/month | Ad budget/month | Monthly total | First month |
|---|---:|---:|---:|---:|---:|
| Minimum all-platform | €1,250 | €2,500 | €2,000 | €4,500 | €5,750 |
| Recommended | €1,500 | €3,000 | €2,000–€2,500 | €5,000–€5,500 | €6,500–€7,000 |
| Maximum attention | €2,000–€3,000 | €4,500–€6,000 | €6,000–€12,000 | €10,500–€18,000 | €12,500–€21,000 |

- Website phase 1: €1,250–€2,500 one-time, depending on final scope.
- Minimum recommended contract: 3 months.
- The minimum package covers all platforms, but with simpler content and a tighter budget.
- The recommended package is the realistic option for consistent attention and lead generation.
- The maximum attention package is for aggressive growth with daily content and higher ad spend.

## Future Account System
- Not part of phase 1.
- Later: customer login, own prices, order history, repeat orders and discount status.
- Do not block future accounts by making phase 1 fully static.
- Keep customer and discount data separate from public product data.

## To Confirm Before Launch
- Is the welcome discount 5% or 8%? The site currently uses 8% and code WELKOM8.
- Does the welcome discount apply to both private customers and wholesale customers, or only to one group?
- Should prices be visible or shown as “price on request”? The site currently shows indicative prices.
- Should all five languages launch at once, or only Dutch/French/English first?
- What is the confirmed monthly ad budget?
- Should the admin panel remain browser-based for now, or be connected to a real backend/login and central database before launch?
- Are the real phone number, WhatsApp number, e-mail, address, VAT number and company details available? The current details are placeholders.
- Are the real logo, product photos and brand assets available? The current images use Pexels stock photos.
- Are the real social media links available? The current links point to placeholder handles.
- Are the real Google Tag Manager, GA4, Google Ads and social pixel IDs available? Tracking hooks are prepared, but campaigns/pixels cannot go live without these IDs.
- Are discount conditions automatic after form submission or manually approved? The current flow is a request with manual follow-up.
- Where should customer leads be delivered: e-mail, CRM, Google Sheet or another system?
