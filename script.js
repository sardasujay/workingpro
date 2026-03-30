// TESTIMONIAL SLIDER
let slides = document.querySelectorAll(".testimonial");
let index = 0;

setInterval(()=>{
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
},4000);

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".section, .card, .gallery-grid img");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("active");
}
});
},{threshold:0.15});

revealElements.forEach(el=>{
el.classList.add("reveal");
observer.observe(el);
});