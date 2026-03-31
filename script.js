// TESTIMONIAL SLIDER
let slides = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},4000);

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".section, .card, .gallery-grid img, .process-step, .area-tag, .faq-item, .stat-item");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.1});

revealElements.forEach(el=>{
el.classList.add("reveal");
observer.observe(el);
});

// FAQ ACCORDION
function toggleFaq(btn){
  const item = btn.parentElement;
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach(el=>{
    el.classList.remove("open");
  });
  if(!isOpen) item.classList.add("open");
}