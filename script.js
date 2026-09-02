document.addEventListener('DOMContentLoaded',()=>{
 const y=document.querySelectorAll('#year'); y.forEach(x=>x.textContent=new Date().getFullYear());
 const btn=document.querySelector('.menu-btn'), nav=document.querySelector('.nav');
 if(btn&&nav) btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))});
 document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth'})}}));
});
