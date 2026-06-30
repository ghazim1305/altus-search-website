
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const menuBtn=$('.mobile-toggle'), nav=$('.nav');
if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});}
$$('.nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
$$('.nav a[data-page]').forEach(a=>{if(a.dataset.page===current)a.classList.add('active')});
$$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const cookie=$('.cookie-banner');
if(cookie && !localStorage.getItem('altus-cookie-choice')) setTimeout(()=>cookie.classList.add('show'),600);
$$('[data-cookie]').forEach(btn=>btn.addEventListener('click',()=>{localStorage.setItem('altus-cookie-choice',btn.dataset.cookie);cookie?.classList.remove('show')}));
function toast(msg){const el=$('.toast'); if(!el)return; el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),4500)}
$$('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();if(!form.checkValidity()){form.reportValidity();return;}toast('Thank you. This website demo is ready for a secure form endpoint before launch.');form.reset();}));
const counters=$$('[data-count]');
if(counters.length){const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target, end=Number(el.dataset.count), suffix=el.dataset.suffix||'';let start=0;const tick=()=>{start+=Math.max(1,Math.ceil(end/55));el.textContent=(start>=end?end:start)+suffix;if(start<end)requestAnimationFrame(tick)};tick();io.unobserve(el)}),{threshold:.5});counters.forEach(el=>io.observe(el));}
