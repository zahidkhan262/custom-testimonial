import { testimonial } from '/js/data.js'

let initialIndex = 0;
// let testi = testimonial[initialIndex];
let testimonialLength = testimonial.length;
// let showTestiData;
// console.log(testimonialLength, "length")

let testimonialBody = document.getElementById('testimonialBody');
let testContainer = document.getElementById('testContainer');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
// let showTestimonial;

nextBtn.addEventListener("click", function () {
    initialIndex = (testimonialLength + initialIndex + 1) % testimonialLength;
    // console.log(initialIndex)
    testimonialBody.style.background = testimonial[initialIndex].bg;
    showTestimonial()
});


prevBtn.addEventListener("click", function () {
    initialIndex = (testimonialLength + initialIndex - 1) % testimonialLength;
    testimonialBody.style.background = testimonial[initialIndex].bg;
    // console.log(initialIndex)
    showTestimonial()
})



let showTestimonial = () => {
    testimonialBody.innerHTML = `
    
        <div class="testi-img mb-10">
        <img src=${testimonial[initialIndex].profile} alt="img">
            </div>
            <div class="test-info">
            <div class="testi-name mb-10"><h3>${testimonial[initialIndex].name}</h3></div>
            <div class="testi-title mb-10"><h5>${testimonial[initialIndex].title}</h5></div>
            <div class="testi-about"><p>${testimonial[initialIndex].about}</p></div>
            </div>`;
}

window.onload = showTestimonial;




