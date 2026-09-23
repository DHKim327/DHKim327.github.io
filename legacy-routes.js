(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  const anchor = location.hash.slice(1);
  if (!anchor) return;
  const work = new Set(['scunify', 'sphot', 'covsf', 'ac-patterns', 'qcagent', 'research-computing', 'pathology-gpu']);
  const cv = new Set(['education', 'appointment', 'activities', 'awards', 'snuh', 'cobi-lab', 'lg-webos', 'likelion', 'christ-university']);
  const papers = new Set(['publication-scunify', 'publication-sphot', 'publication-covsf', 'publication-ac-patterns', 'publication-aaa-imaging', 'publication-scdstl']);
  let destination;
  if (page === 'index.html') {
    if (cv.has(anchor)) destination = 'cv.html#' + anchor;
    else if (anchor === 'experience') destination = 'cv.html#appointment';
    else if (papers.has(anchor) || anchor === 'publications') destination = 'publications.html#' + anchor;
    else if (work.has(anchor) || anchor === 'projects') destination = 'projects.html#' + (['research-computing', 'pathology-gpu'].includes(anchor) ? 'projects' : anchor);
    else if (['about', 'introduction'].includes(anchor)) destination = 'index.html#profiles';
  } else if (page === 'playground.html' && work.has(anchor)) {
    destination = 'projects.html#' + (['research-computing', 'pathology-gpu'].includes(anchor) ? 'projects' : anchor);
  }
  if (destination) location.replace(destination);
})();
