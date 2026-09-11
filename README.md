# Donghee Kim — personal website & CV

Local review files using plain HTML and CSS, with no build step or package installation. A small script on the Profiles page redirects old single-page bookmarks; normal navigation also works without JavaScript.

## Structure

Top navigation: `Home | Playground`. The left sidebar contains a lightweight profile (photo above the name, role, GitHub, ORCID), followed by a small Contents navigation. On mobile it appears above the content with a compact, wrapping Contents bar.

Home Contents contains only two pages:

- `index.html` — Profiles: the opening sentence aligned beside a portrait, then Education, Experience, and all four publications. Education includes only the bachelor's and master's degrees. Experience contains SNUH research employment followed by an `Undergraduate` group: the LG webOS internship, LikeLion, and the Christ University summer program in India. All three undergraduate entries use smaller type and tighter spacing. Keep their institution headings one level below the group heading.
- `projects.html` — Projects: scUnify, spHOT, CovSF, and Air-Conditioner Analysis, with their roles and skills.

Home stays selected in the top bar on both pages. Contents marks the current page. The user removed all previous/next navigation and all copyright and last-updated footers; do not restore them.

`playground.html` is a separate space for tools and experiments from personal and lab work. Initial entries are QCAgent, Research Computing, and Pathology & GPU Workflows, moved from the earlier experience descriptions. Its Contents links to entries within that page. Future demos, hobbies, and fuller write-ups can be added when requested.

## Writing and design

This is a general portfolio and CV, not tailored to a particular employer or admissions committee. Preserve the white background, blue links, compact type, and restrained sidebar. Avoid marketing headlines, decorative cards, and unsupported claims about impact or mastery.

The identity is `AI Engineer & Researcher`. Do not restore the sidebar's hospital affiliation, location, or keyword list, or the KNU education sentence in the introduction. Biology and biomedical terms belong only where they describe actual projects, papers, or the official employment affiliation.

The introduction draft is: “I like understanding how things work and building things that are useful.” This is editable personal copy, not a quotation sourced from the user. The requested tone is a simple first-person philosophy, not a research abstract.

The user prefers discussing ideas before implementation. Brainstorming alone is not authorization to edit; wait for an explicit implementation request.

## Profile photos

The sidebar on all three pages has a portrait above Donghee Kim's name, enlarged to 180 × 225 px on desktop. Profiles has a framed portrait on the right of the introduction, with a 240 px-wide frame on desktop. The introduction and portrait align at the top and form one row; Education and then Experience follow below at full width. On mobile the sidebar photo is 128 × 160 px and the right portrait scales to the available width. Main section headings are 19 px on desktop and 18 px on mobile.

No portrait was present in the site assets, so all four image elements currently share the neutral `assets/profile-photo.svg` placeholder. To use a real photograph, add the chosen image under assets, replace the four `src="assets/profile-photo.svg"` references in index.html, projects.html, and playground.html, and change their placeholder alt text to `Donghee Kim`. Both placements use a 4:5 portrait ratio; sizes are controlled by `.profile-photo` and `.profile-portrait` in styles.css.

## Project content

Projects preserves scUnify, spHOT, CovSF, and Air-Conditioner Analysis. Each entry shows its short role above the descriptive title, followed by one sentence, a small `Required Skills` label, and two or three compact category rows. Do not repeat “skills” in category names or expand them into explanations.

Confirmed roles: scUnify — Project Lead; spHOT — Methodology Lead; CovSF — Methodology Lead; Air-Conditioner Analysis — Co-author. Keep sole/co-first authorship in Publications.

Use complete concept names such as Multiple Instance Learning and Recurrent Neural Networks; Knowledge Distillation is the requested broader teacher–student term. Publication links point directly to matching records on `index.html#publication-…` within Profiles. Only the air-conditioner project has `Collaboration: LG Electronics`.

Keep user-confirmed wording, including spHOT's Scanpy/Squidpy analysis, CovSF's Integrated Gradients, and the air-conditioner project's Spherical K-means and NMF. Read code, papers, or user-provided evidence before adding technical claims. Detailed provenance is in `.preview/project-sources.md`.

SNUH employment is in Profiles and contains the institution, dates, job title, and institute. Technical Research Personnel remains removed. The three tool/workflow descriptions now appear only in Playground. Do not duplicate the KNU graduate period as employment.

The LG entry reads `Internship · webOS App Development` with the brief description `Smart mirror application with React and OpenCV.` This is supported by the user's internship report in the undergraduate project archive; keep it focused on the work performed. The program was online, but the visible role label is simply Internship as requested. The three undergraduate entries use `.compact-entry`: 13 px institution names, 12 px descriptions, 11 px dates, and 12 px bottom spacing.

## Confirmed dates

Use `YYYY.MM – YYYY.MM`:

- Bachelor's, Kyungpook National University: 2017.03 – 2021.08.
- Master's, Kyungpook National University: 2021.08 – 2023.08.
- Seoul National University Hospital, Biomedical Research Institute: 2023.10 – 2026.10.

The master's thesis approval in June 2023 is separate from graduation in August 2023; Education uses graduation.

Activity dates were verified in the user's OneDrive undergraduate project archives:

- Christ University summer program: 2018.07 – 2018.08 (2018-07-03 to 2018-08-03 in the user's return report in `학부과정/1-2.zip`).
- LG webOS online internship: 2020.07 – 2020.08 (2020-07-27 to 2020-08-28 in the institution's evaluation and LG Soft India completion letter in `학부과정/3-1학기&여름방학.zip`). The subsequent hackathon ended on 2020-10-05; this is not the internship end date.
- LikeLion member, 7th cohort: 2019.01 – 2019.12 (2019-01-01 to 2019-12-31 in the named completion certificate in `학부과정/멋쟁이사자처럼.zip`).
- LikeLion organizer and instructor, 8th/9th cohorts: 2020.02 – 2021.08 (the user's submitted graduation CV and accompanying statement in `학부과정/4-1.zip`). Display the two roles with their own date ranges.

Detailed evidence and source discrepancies are recorded in `.preview/activity-date-sources.md`. Use the contemporaneous return report for the India program rather than the conflicting month range in the later CV. Do not infer attendance from file timestamps, degree dates, or generic program schedules. The separate Additional Activities list has been removed; its items now appear as individual entries in the relevant sections.

## Local preview and review

Open `index.html` directly in a browser. All ordinary page links work locally. Edit HTML and `styles.css` directly. Profile, header, and Contents markup are repeated across the three main pages; keep them consistent.

Run the existing local browser review from this directory:

```powershell
node .preview/review-projects.cjs
```

The helper starts a temporary server on 127.0.0.1:4173, runs `.preview/check-navigation.cjs`, and closes the server. It checks all three pages at 1440, 1024, 768, 390, and 320 pixels, internal links, publication navigation, legacy URLs, keyboard navigation, browser history, and navigation without JavaScript.

Current screenshots: `.preview/profiles-*.png`, `projects-*.png`, and `playground-*.png`. Report: `navigation-check.json`. Print previews: `profiles-print.pdf`, `projects-print.pdf`. Screenshots and print files named home, experience, education, or publications refer to the earlier page split.

The old `cv-style-*.png`, `academic-print.pdf`, `check-academic.cjs`, `build-pages.py`, and `check.cjs` describe earlier layouts. Do not use them to rebuild or validate this structure. `.preview/single-page-before-home.html` preserves the page immediately before this change.

Legacy routes:

- `about.html` → `index.html#profiles`.
- `experience.html` → Projects; existing project hashes are preserved, while its appointment hash points into Profiles.
- `education.html`, `publications.html` → corresponding Profiles sections; publication hashes are preserved.
- `work/scunify.html`, `work/sphot.html` → corresponding Projects entries.
- `work/qcagent.html` → `playground.html#qcagent`.
- `notes/model-interfaces.html` → `playground.html#research-computing`.
- Old section and publication hashes on `index.html` redirect to their new pages.

## Repository and local review files

Source repository: [DHKim327/DHKim3.github.io](https://github.com/DHKim327/DHKim3.github.io), with Private visibility. Source synchronization does not configure a website deployment. Existing noindex metadata and robots.txt remain in place. The ignored `.preview/` directory contains local artifacts, evidence documents, and source notes; it is excluded from Git and is not website content.
