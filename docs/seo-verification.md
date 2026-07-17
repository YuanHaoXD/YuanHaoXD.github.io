# SEO Verification Checklist

## Local

1. Start dev server:
   - `npm run dev`
2. Open:
   - `http://localhost:4321/robots.txt`
3. Note:
   - Sitemap files are generated on build, so dev mode may not expose `sitemap*.xml`.

## Build Output

1. Run:
   - `npm run build`
2. Confirm files exist in `dist/`:
   - `robots.txt`
   - `sitemap-index.xml`
   - `sitemap-0.xml` (or equivalent split sitemap file)
   - `sitemap.xml` (copied from `sitemap-index.xml` by postbuild step)

## Production (GitHub Pages)

- `curl -I https://yuanhaoxd.github.io/sitemap-index.xml`
- `curl -I https://yuanhaoxd.github.io/sitemap-0.xml`
- `curl -I https://yuanhaoxd.github.io/sitemap.xml`

Expected:
- `HTTP 200`
- `Content-Type: application/xml` (or `text/xml`)
