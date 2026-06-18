# Oil Price Page

`pricepage` is a standalone static front-end directory.

## Files

- `index.html`: station list, sorting, daily stats, and the 7-day trend chart.
- `detail.html`: single-station 7-day price history and trend chart.
- `js/config.js`: Supabase anon key, oil types, chart CDN URLs, and timezone config.
- `js/supabaseClient.js`: browser-side Supabase client initialization.
- `js/chartLoader.js`: Chart.js CDN loader and chart fallback logic.
- `js/format.js`: price, date, and numeric formatting helpers.
- `js/dom.js`: safe DOM creation helpers that avoid `innerHTML`.

## Local Open

You can open `pricepage/index.html` directly in a browser. A dev server is not required for normal use.

## Maintenance Notes

- The front end only uses the Supabase anon key. Keep service role keys out of the browser.
- If you need fully offline chart loading, add the official Chart.js UMD file under a local vendor path and point `js/config.js` `CHART_CDN_URLS` at it.
- The repo currently ignores `pricepage/`, so changes to this page need to be committed from the `pricepage` directory repository itself.
