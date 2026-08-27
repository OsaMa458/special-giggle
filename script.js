document.querySelectorAll('#year').forEach((el) => { el.textContent = new Date().getFullYear(); });

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}

// Open a service when the URL contains a service hash, e.g. services.html#store-audit.
const hash = window.location.hash;
if (hash) {
  const target = document.querySelector(hash);
  if (target && target.tagName.toLowerCase() === 'details') {
    target.open = true;
    window.setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
  }
}

document.querySelectorAll('.service-accordion').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (item.open) document.querySelectorAll('.service-accordion').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
