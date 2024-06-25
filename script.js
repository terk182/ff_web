let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    currentSlide += n;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    const newTransform = `translateX(-${currentSlide * 100}%)`;
    document.querySelector('.slider').style.transform = newTransform;
}

// Optional: Add auto-slide functionality
let autoSlide = setInterval(() => moveSlide(1), 10000);

const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
sliderContainer.addEventListener('mouseleave', () => autoSlide = setInterval(() => moveSlide(1), 3000));
// Get the modal
var modal = document.getElementById("bookingModal");

// Get the button that opens the modal
var btn = document.querySelector(".status-button.available");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}