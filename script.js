document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('#year').forEach(x=>x.textContent=new Date().getFullYear());
 const btn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
 if(btn&&nav) btn.addEventListener('click',()=>{nav.classList.toggle('open');btn.setAttribute('aria-expanded',nav.classList.contains('open'))});
 // Use the exact user-provided asset base names; support common image extensions so the uploaded file can be .png/.jpg/.jpeg/.webp.
 const head=document.querySelector('[data-headshot]');
 const assetExts=['png','jpg','jpeg','webp'];
 function probeAsset(base,onSuccess){let i=0;const next=()=>{if(i>=assetExts.length)return;const u='assets/'+base+'.'+assetExts[i++];const probe=new Image();probe.onload=()=>onSuccess(u);probe.onerror=next;probe.src=u};next()}
 if(head){probeAsset('profile_photo_cropped',u=>{head.src=u;head.style.display='block';const fb=document.querySelector('.headshot-fallback');if(fb)fb.style.display='none'});}
 // Resolve the exact favicon base names from the assets folder without assuming the uploaded extension.
 function setIconLink(rel,base,sizes){const link=document.querySelector('link[data-icon-base="'+base+'"]'); if(!link)return; let i=0; const next=()=>{if(i>=assetExts.length)return; const u='assets/'+base+'.'+assetExts[i++]; const probe=new Image(); probe.onload=()=>{link.href=u;if(sizes)link.setAttribute('sizes',sizes)};probe.onerror=next;probe.src=u};next()}
 setIconLink('icon','favicon-32','32x32'); setIconLink('icon','favicon-16','16x16'); setIconLink('apple-touch-icon','apple-touch-icon','180x180'); setIconLink('icon','icon-512','512x512');
 // workbook demo modal
 const modal=document.querySelector('.demo-modal'); const title=modal?.querySelector('[data-modal-title]'); const body=modal?.querySelector('[data-modal-body]');
 const esc=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function openDemo(key){
   if(!modal||!window.DEMO_DATA?.[key]) return;
   title.textContent=key+' — On-site demo';
   const rows=window.DEMO_DATA[key];
   let note='This is a portfolio demonstration using sample/dummy data. Verify current marketplace rules, fees and supplier evidence before making live decisions.';
   let start=rows[0]||[]; let headerIndex=(rows.length>1?Math.min(4,rows.length-1):0); if(key==='Product Research') headerIndex=5; if(key==='Supplier Comparison') headerIndex=4;
   const headers=rows[headerIndex]||start; const data=rows.slice(headerIndex+1).filter(r=>r.some(Boolean)).slice(0,40);
   let html='<div class="sheet-note">'+note+'</div><div class="sheet-actions"><a class="btn secondary small" href="assets/portfolio-demos.xlsx" download>Download source workbook</a></div><div class="sheet-wrap"><table class="sheet-table"><thead><tr>'+headers.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+data.map(r=>'<tr>'+headers.map((_,i)=>'<td>'+esc(r[i]||'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
   body.innerHTML=html; modal.classList.add('open'); document.body.style.overflow='hidden';
 }
 document.querySelectorAll('[data-demo]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openDemo(a.dataset.demo)}));
 document.querySelectorAll('[data-modal-close]').forEach(x=>x.addEventListener('click',()=>{modal.classList.remove('open');document.body.style.overflow=''}));
 modal?.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('open');document.body.style.overflow=''}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal?.classList.contains('open')){modal.classList.remove('open');document.body.style.overflow=''}});
});
