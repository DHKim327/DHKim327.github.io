# Donghee Kim — private academic homepage

This repository is the private staging version of Donghee Kim's academic homepage and CV.

## Preview locally

From this directory:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Privacy

- The repository is private.
- GitHub Pages deployment should remain disabled during review.
- The HTML includes `noindex` metadata and `robots.txt` blocks crawlers, but these are not access controls.
- Publishing with standard GitHub Pages can expose the rendered site publicly even when the source repository is private. Add an authenticated hosting layer before publishing if private web access is required.

## Current scope

- Academic profile, research interests, and recent updates
- Selected research: scUnify, spHOT, and QCAgent
- Compact publication list, research engineering, and career trajectory
- Pathology AI and research-compute infrastructure
- Responsive, dependency-free HTML/CSS
- Local profile image stored under `assets/`
