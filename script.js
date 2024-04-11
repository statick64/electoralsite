let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("carousel-slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    

  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById("prevBtn").addEventListener("click", () => {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = document.getElementsByClassName("carousel-slide").length - 1;
  }
  showSlides();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  showSlides();
});
