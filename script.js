const header = document.querySelector('[data-header]');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const reveals = document.querySelectorAll('.reveal');
const staticRender = new URLSearchParams(window.location.search).has('static');

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

if (!staticRender && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  reveals.forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!current) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${current.target.id}`);
    });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.6] });

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = new Date().getFullYear();
});

