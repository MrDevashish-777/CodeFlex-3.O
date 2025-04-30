// header
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const icon = e.target.getAttribute("class")
    if(icon == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark")

    }else{
        e.target.setAttribute("class","fa-solid fa-bars")
    }
    nav.classList.toggle("showNav")
}


// carousel
const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

let currentIndex = 0;
let timer;

const slideCarousel = (index) => {
    for (let x = 0; x < allEachCarousel.length; x++) {
        if (x === index) {
            allEachCarousel[x].classList.add("eachCarouselBorder");
            allIndicator[x].classList.add("activeIndicator");
        } else {
            allEachCarousel[x].classList.remove("eachCarouselBorder");
            allIndicator[x].classList.remove("activeIndicator");
        }
    }
    carouselContainer.scrollLeft = index * (eachCarousel + 10);
};

const nextSlide = () => {
    currentIndex++;
    if (currentIndex >= allEachCarousel.length) {
        currentIndex = 0;
    }
    slideCarousel(currentIndex);
};

const startCarousel = () => {
    timer = setInterval(nextSlide, 3000); // Change slides every 5 seconds (5000 milliseconds)
};

const stopCarousel = () => {
    clearInterval(timer);
};

// Start carousel automatically when the page loads
startCarousel();

// Stop carousel when the user interacts with it
carouselContainer.addEventListener("mouseenter", stopCarousel);
carouselContainer.addEventListener("mouseleave", startCarousel);
