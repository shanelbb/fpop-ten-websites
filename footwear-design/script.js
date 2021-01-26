const slides = document.querySelectorAll('.slide');
const carousel = document.getElementById('carousel')
const left = document.getElementById('left')
const right = document.getElementById('right')
const h1 = document.getElementsByTagName('h1')
const headerEls = document.querySelectorAll("#headerEls")
const logoP = document.getElementById('logoP')

const SLIDES_COUNT = slides.length
const H1S_COUNT = h1.length

let current_slide = 0;
let current_h1 = 0

left.addEventListener('click', () => {
    current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0
    } 
    current_h1++;
    if (current_h1 > H1S_COUNT - 1) {
        current_h1 = 0
    } 
    updateCarousel();
})

right.addEventListener('click', () => {
 current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }
    current_h1--;
    if (current_h1 < 0) {
        current_h1 = H1S_COUNT - 1;
    }
    
    updateCarousel();
})

function updateCarousel() {
    carousel.style.transform = `translateX(${-current_slide * slides[0].offsetWidth
        }px)`;
    
    document.body.style.background = slides[current_slide].getAttribute("data-bg");

    h1[current_h1].style.color = h1[current_h1].getAttribute("data-color");
    
    function colorChange(els, p) {
        for (let i = 0; i < headerEls.length; i++) {
            headerEls[i].style.color = els
        };
        logoP.style.color = p
    }
    
    el = h1[current_h1]
    
    switch (el) {
        case h1[0]:
            colorChange('#fff', '#000')
            break;
        case h1[1]:
             colorChange('#000', '#bf2b29')
            break;
        case h1[2]:
            colorChange('#000', '#bf2b29')
            break;
        case h1[3]:
            colorChange('#fff', '#bf2b29')
            break;
        default:
           console.log(el);
    }
}
