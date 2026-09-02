document.getElementById('year').textContent = new Date().getFullYear();

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

const modalData = {
  research: {
    title: 'Product Research & Sourcing',
    label: 'DEMO · XLSX SAMPLE',
    body: `
      <p>This sample connects <strong>product research</strong> with <strong>product sourcing economics</strong>. It compares six candidate products across unit cost, shipping, landed cost, marketplace fees, net profit, margin, demand and recommended platform.</p>
      <div class="detail-grid">
        <div><b>Research</b><span>Demand · competition · margin · platform fit</span></div>
        <div><b>Sourcing</b><span>Supplier · unit cost · shipping · landed cost</span></div>
        <div><b>Decision</b><span>Walmart vs TikTok Shop recommendation</span></div>
      </div>
      <a class="btn primary" href="assets/product-research-sample.xlsx" download>Open the XLSX sample</a>
    `
  },
  audit: {
    title: 'Store Audit Demonstration',
    label: 'DEMO · AUDIT FRAMEWORK',
    body: `
      <p>The audit is structured around the areas a seller needs to inspect before spending more time or money: <strong>listing quality, pricing, SEO, compliance and presentation</strong>.</p>
      <div class="detail-list"><span>01 — Identify the gap</span><span>02 — Rate priority</span><span>03 — Explain the issue</span><span>04 — Give the corrective action</span><span>05 — Track completion</span></div>
      <p class="muted">Next portfolio upgrade: add an annotated demo audit report with screenshots and a final priority scorecard.</p>
    `
  },
  listing: {
    title: 'Product Listing — Before / After',
    label: 'DEMO · COMPARISON',
    body: `
      <div class="modal-image"><img src="https://usamaecom.site/assets/listing-optimization-sample.jpg" alt="Listing optimization before and after"></div>
      <div class="compare-modal-grid"><div><b>BEFORE</b><p>Generic title and weaker information hierarchy.</p></div><div><b>AFTER</b><p>Structured title, benefit-led bullets, attributes and search-ready organization.</p></div></div>
    `
  },
  tiktok: {
    title: 'TikTok Shop Product Page',
    label: 'DEMO · CONCEPT',
    body: `<div class="modal-image"><img src="https://usamaecom.site/assets/social-commerce-sample.jpg" alt="TikTok Shop product page demo"></div><p>Demonstration of product presentation for content-led shopping: lifestyle image, clear price, feature tags and a visible purchase path.</p>`
  },
  graphics: {
    title: 'Product Graphics',
    label: 'DEMO · CONCEPT',
    body: `<div class="modal-image"><img src="https://usamaecom.site/assets/pen-graphics-sample.jpg" alt="Product graphics demo"></div><p>Feature icons, use-case imagery and a benefit-first layout designed to make product value easy to scan.</p>`
  },
  tape: {
    title: 'Packing Tape Product Graphics',
    label: 'DEMO · CONCEPT',
    body: `<div class="modal-image"><img src="https://usamaecom.site/assets/tape-graphics-sample.jpg" alt="Packing tape graphics demo"></div><p>Commodity-product infographic concept using benefit callouts, use cases and trust-oriented visual structure. Demonstration only.</p>`
  }
};

function openModal(key) {
  const data = modalData[key];
  if (!data) return;
  modalContent.innerHTML = `<span class="modal-label">${data.label}</span><h2>${data.title}</h2>${data.body}`;
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}
document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => openModal(btn.dataset.modal)));
document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
