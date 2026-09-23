# Donghee Kim — personal website & CV

Local review files using plain HTML and CSS, with no build step or package installation. A small script on the Profiles page redirects old single-page bookmarks; normal navigation also works without JavaScript.

## Structure

Top navigation remains `Home | Playground`. The four professional/profile pages have a profile sidebar followed by Contents in this order: `Profiles | CV | Publications | Projects`. Profiles links to Home (`index.html`). Home stays selected in the top navigation on those four pages; Playground is selected only on its own page. Contents marks the current professional/profile page. Playground has no sidebar, profile block, or Contents navigation.

- `index.html`: a large PHOTO placeholder filling the main content width, followed by an `About` heading with the standard underline and the existing introduction paragraph. Keep `Profiles` as the sidebar navigation label. Preserve the original introduction wording until the user supplies new copy. The user explicitly deferred word clouds and knowledge graphs; do not add them without a new request.
- `cv.html`: Education, Experience, and Awards, in that order. Awards contains three user-approved items in Korean, newest first, with years aligned to the right.
- `publications.html`: six records in one list ordered by newest year first, with Journal (3), Conference (1), and Preprint (2) labels above their titles. All three labels use the same dark gray text, with pale blue, green, and amber backgrounds respectively. Keep the background limited to each compact label. Keep publication categories out of separate section headings.
- `projects.html`: six cards in a single column under Current Projects followed by Completed Projects, newest first within each group, with descriptive project titles, keyword labels, a short description, and role. Status is conveyed by the group headings, without per-card Ongoing or Completed labels. A compact four-category color legend appears below the Projects heading. No introductory sentence or expandable methods/tools lists.
- `playground.html`: a full-width, sidebar-free area for personal projects. Four equal quadrants surround a central circle labeled `Personal Projects`. Keep the 2-by-2 arrangement on mobile, with a smaller center circle. The quadrants have neutral 01–04 markers and no topic names or project entries until the user supplies them. These empty areas are not interactive controls.

The user removed all previous/next navigation and all copyright and last-updated footers; do not restore them. Preserve the shared sidebar and mobile wrapping Contents navigation on the four professional/profile pages, and ordinary navigation without JavaScript throughout.

## Writing and design

This is a general portfolio and CV, not tailored to a particular employer or admissions committee. Preserve the white background, blue links, compact type, and restrained sidebar. Avoid marketing headlines and unsupported claims about impact or mastery. The user requested simple bordered project cards; keep the surrounding academic layout restrained.

The identity is `AI Engineer & Researcher`. Do not restore the sidebar's hospital affiliation, location, or keyword list, or the KNU education sentence in the introduction. Biology and biomedical terms belong only where they describe actual projects, papers, or the official employment affiliation.

The introduction draft is: “I like understanding how things work and building things that are useful.” This is editable personal copy, not a quotation sourced from the user. The requested tone is a simple first-person philosophy, not a research abstract.

The user prefers discussing ideas before implementation. Brainstorming alone is not authorization to edit; wait for an explicit implementation request.

## Profile photos

The sidebar on the four professional/profile pages has the original portrait placeholder above Donghee Kim's name, 180 × 225 px on desktop and 128 × 160 px on mobile. Home's main PHOTO area fills the content width at a 16:9 ratio, with About below it. Its background matches the placeholder, with no inset padding, and the illustration fits inside without cropping the PHOTO text. Both placements use `assets/profile-photo.svg`; no real portrait or graph has been supplied. Preserve the sidebar sizing. A future photo would require updating the five image elements across these pages. Playground has no profile photo.

## Project content

Projects contains official work only. Display the user's chronology newest first: Current Projects at the top with QCAgent, scUnify, spHOT, then Completed Projects with scDSTL, Air-Conditioner Analysis, CovSF. These names identify the underlying tools and research; card headings describe the project objective instead of using tool names. This user-specified sequence takes precedence over an inferred publication-date sort. Keep the cards in one column at every viewport width. Do not restore the removed introductory sentence or per-card status labels. Research Computing and Pathology/GPU Workflows are explicitly deferred: do not display them on either Projects or Playground. Their earlier descriptions remain in local backups.

Roles: scUnify, Project Lead; spHOT, Methodology Lead; CovSF, Methodology Lead; Air-Conditioner Analysis, Co-author; scDSTL, Co-author; QCAgent, Agent Development Lead. The first four roles and QCAgent's leadership role were directly confirmed; scDSTL credit follows the verified author list. Keep first/co-first author credit in Publications.

Use these descriptive titles, following the user's wording with English spelling and grammar corrected:

- scUnify: `Unified Framework for Single-Cell Foundation Models with Parameter-Efficient Fine-Tuning`.
- spHOT: `Biomarker Discovery in Spatial Transcriptomics Data Using Deep Learning`.
- scDSTL: `Knowledge Transfer from Multiple Single-Cell Foundation Models`.
- Air-Conditioner Analysis: `Large-Scale Analysis of Air-Conditioner Usage Patterns with Deep Learning`.

Cards have a top header with the title on the left and Publications, Code, and Documentation links on the right when available. In narrow cards, links wrap onto a right-aligned row immediately below the title. Keywords follow the header, then aligned `Role` and optional `Collaboration` rows, and a lightly shaded description at the very bottom. Inside each card, use horizontal dividers only below the keyword labels and above the description; do not add dividers between metadata rows. Show a bold `Description` label at the top left inside the description area, above the text. Use a semantic description list for the metadata. Keep each CovSF collaborator on its own line and retain both institutions. Allow natural wrapping on mobile; do not truncate descriptions or institution names.

Multiplexed Imaging remains in Publications only. The user clarified that their contribution was resolving GPU processing issues during revision, and requested its removal from Projects.

The user clarified that QCAgent automates quality validation for healthcare databases, including CDM and CDI. Its display title is `Agent Development for Healthcare Database Quality Control`. Describe data quality checks rather than data integration; do not infer additional validation capabilities. It has no publication link. Both scUnify and spHOT link to their corresponding preprints on Publications; completed projects link to their respective publication entries. Label these links `Publications` and preserve the existing anchors, code links, and documentation link.

Each card contains a descriptive project title, three keyword labels, role, a concise one-sentence summary, and relevant links. Aim for one or two description lines on desktop and allow natural wrapping on mobile. The user replaced package lists and expandable `Methods & tools` sections with keywords. Do not restore package inventories. CovSF lists `Collaboration: Kyungpook National University Chilgok Hospital (KNUCH), Korea National Institute of Health (KNIH)`, as requested by the user and supported by the author affiliations and data collection section of https://www.nature.com/articles/s41598-025-07793-x. The air-conditioner card retains `Collaboration: LG Electronics`. Publication links target `publications.html#publication-…`. Detailed provenance is in `.preview/project-sources.md`; its older presentation instructions are historical.

Keywords have dark gray text and pastel backgrounds matching the legend: Deep Learning (blue), Data Analysis (green), AI Engineering (purple), Software Engineering (orange). A keyword always uses the same category across projects. Category names are also available through the label's title and accessible name. These are static labels, not filter buttons.

| Project | Keywords and categories |
| --- | --- |
| QCAgent | LLM Agents (AI Engineering), Data Quality (Data Analysis), Workflow Automation (Software Engineering) |
| scUnify | DLOps (AI Engineering), Foundation Models (Deep Learning), Parameter-Efficient Fine-Tuning (Deep Learning) |
| spHOT | Multiple Instance Learning (Deep Learning), Spatial Transcriptomics (Data Analysis), Biomarker Discovery (Data Analysis) |
| scDSTL | Foundation Models, Knowledge Distillation, Representation Learning (all Deep Learning) |
| Air-Conditioner Analysis | Time-Series Modeling (Data Analysis), Deep Clustering (Deep Learning), Large-Scale Data Analysis (Data Analysis) |
| CovSF | Time-Series Modeling, Multimodal Data Analysis, Biomarker Discovery (all Data Analysis) |

The user explicitly chose scUnify's three keywords and identified MIL as spHOT's defining method. Do not restore Knowledge Distillation as a spHOT keyword. CovSF's multimodal label describes the overall clinical and single-cell analysis: its forecasting model takes clinical time series, while patient-matched single-cell profiles support downstream validation and interpretation. Do not imply a joint multimodal model input. QCAgent's keywords describe its ongoing development scope, not completed deployment.

## CV content

Awards uses the competition names verified from the certificates: `우수상, 2020학년도 2학기 언택트 SW창업 해커톤` (2020), `2019 학생 창업유망팀 300, 최종 선정` (2019), and `장려상, 2018 PRIME 창업리그 창업아이디어 공모전` (2018). The user requested actual competition names rather than the earlier generic `교내` descriptions or invented English names. The dates were confirmed from the 2020 club report certificate and the two certificates the user added to OneDrive. Keep these as a simple list without English award translations, badges, or certificate links. The 2019 item is selection among 300 teams; a top-30 result and the LikeLion national hackathon ranking remain unverified and must not be added. Certificates and private research notes stay outside the public website.

Display the user-provided GPA directly below each degree: M.S., `GPA: 4.25 / 4.5`; B.S., `GPA: 4.06 / 4.5`. Keep the original 4.5 scale.

Experience uses a bold institution with a smaller, regular-weight gray role on the next line, without a `|` separator. Dates align to the right on wider screens and wrap below on narrow screens. SNUH reads `Biomedical Research Institute, Seoul National University Hospital`, followed by `Bioinformatics AI Researcher & Engineer`. The user identified COBI Lab as their master's lab; it appears as `Computational Biology & BioInformatics (COBI) Lab, Kyungpook National University`, followed by `Graduate Researcher`, using the master's period. Technical Research Personnel remains removed. QCAgent appears in Projects; Research Computing and Pathology/GPU are deferred.

LG Electronics uses `webOS Developer Internship`, with no description or location; the program was online. `Christ University, India` uses `International Internship`. LikeLion reads `LIKELION (멋쟁이사자처럼)`, followed by `Member (7th), Organizer (8th)` on the next line, with each cohort's date range shown separately using the short labels `7th` and `8th`. Omit `cohort` from the displayed text. The `activities` anchor remains available for older bookmarks, without a visible subgroup heading. Education research areas are Biomedical Informatics, Time Series Modeling, Deep Learning, and Large Scale Data Analysis.

## Publication and conference sources

The Journal entries are CovSF (Scientific Reports), Air-Conditioner Analysis (IEEE Access), and the multiplexed imaging study of abdominal aortic aneurysm (Translational Research, 282, 14–30, 2025; DOI: https://doi.org/10.1016/j.trsl.2025.05.008). The latter lists Donghee Kim as the 11th of 15 authors; the shortened author line preserves that ordering with ellipses. Bibliographic record: https://pubmed.ncbi.nlm.nih.gov/40609738/.

The Conference entry is scDSTL, RECOMB 2025, explicitly labeled as a poster presentation. Use the final poster title, `scDSTL: Leveraging Foundation Model Representations for Task-Specific Single-Cell Analysis`, and author order Kyeonghun Jeong, Donghee Kim, Kwangsoo Kim. The poster was verified from the user's `전문연구요원/Proceeding/scDSTL/RECOMB_poster/20250427_scDSTL.pdf`. RECOMB's accepted poster spreadsheet lists the same authors under poster #493 with the earlier title `scDSTL: Distilling Foundation Models into Task-Specific Model for Single-Cell Transcriptomics`: https://recomb.org/recomb2025/docs/Posters_RECOMB2025.xlsx. The final title is also listed at https://khreat0205.github.io/publications/.

The user confirmed that their current Biomedical Research Institute affiliation and the Department of Transdisciplinary Medicine affiliation on these records refer to their institutional and working affiliations respectively. Keep the requested Experience institution wording.

The scDSTL entry uses a `Conference` label with dark gray text on a pale green background and a plain bold title. Its author line reads Kyeonghun Jeong, Donghee Kim, and Kwangsoo Kim, with only Donghee Kim bold and underlined, consistent with every publication. Do not add keyword rows to Publications; keywords belong in Projects when requested. Show the full conference name beginning with `In The 29th Annual International Conference`, followed by 2025. Display `Poster` as plain text without any links in this entry, including on the title or to the PDF.

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
- LikeLion organizer, 8th cohort: 2020.01 – 2020.12, explicitly corrected by the user on September 22, 2026. The earlier 2021.08 end date included partial participation in the 9th cohort, which the user left to enter the master's program. Display only the 7th and 8th cohorts, with their date ranges separately.

Detailed evidence and source discrepancies are recorded in `.preview/activity-date-sources.md`. Use the contemporaneous return report for the India program rather than the conflicting month range in the later CV. Do not infer attendance from file timestamps, degree dates, or generic program schedules. The separate Additional Activities list has been removed; its items now appear as individual entries in the relevant sections.

## Local preview and review

Open `index.html` directly in a browser; no build step or server is needed. Edit HTML and `styles.css` directly. The top navigation is repeated across all five pages; the profile sidebar is shared only by the four professional/profile pages. Keep their respective markup consistent. `legacy-routes.js` preserves old index and Playground hash links.

Run `node .preview/check-layout.cjs` for browser checks of the five pages, responsive layouts, navigation, internal anchors, publication preservation, approved Awards, deferred projects, and legacy routes. Screenshots and report are written to `.preview/`. Historical build/review scripts such as `restructure-site.py`, `check-navigation.cjs`, `review-projects.cjs`, `build-pages.py`, and `check-academic.cjs` describe earlier layouts and must not be used to regenerate or validate this structure.

Legacy routes:

- `about.html` still opens the Home introduction.
- `education.html` points to CV, including the existing activities anchor.
- `experience.html` preserves project links; its appointment anchor points to CV.
- `publications.html` is now a real page with all six publication anchors.
- Old CV and publication hashes on `index.html` redirect to their new pages.
- Old QCAgent links under `index.html`, `playground.html`, or `work/qcagent.html` point to Projects.
- Old Research Computing / Pathology-GPU hashes and `notes/model-interfaces.html` point to the Projects overview while those entries are deferred.
- `work/scunify.html` and `work/sphot.html` retain their project redirects.

## Repository and local review files

Source repository: [DHKim327/DHKim327.github.io](https://github.com/DHKim327/DHKim327.github.io), with Private visibility. The local project directory is `DHKim327.github.io`. Source synchronization does not configure a website deployment. Existing noindex metadata and robots.txt remain in place. The ignored `.preview/` directory contains local artifacts, evidence documents, and source notes; it is excluded from Git and is not website content.
