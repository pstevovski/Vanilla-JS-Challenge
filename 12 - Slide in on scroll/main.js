function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const slideImages = document.querySelectorAll(".slide-in");

function slideIn(){
   slideImages.forEach(slideImage => {
    // window.scrollY + window.innerHeight -> Bottom of the window that you are seeing.
    // slideImage.height / 2 -> Gives you the middle(50% or HALF of the images height) of the image.
    const slideImageAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    
    //    Bottom of the image -> the distance of the top of the parent element for the image + the image height.
    const bottomImage = slideImage.offsetTop + slideImage.height;

    // If user scrolled to the half of the image, and that position is bigger than the distance between the image and the top (0px) position of the parent element for that image.
    const isHalfImage = slideImageAt > slideImage.offsetTop;

    // If the user has not scrolled past the bottom of the image.
    const isNotScrolledPast = window.scrollY < bottomImage;

    // If the user scrolled to the MIDDLE of the IMAGE, AND has not scrolled past the IMAGE, add the class. Else remove it.
        if (isHalfImage && isNotScrolledPast){
           slideImage.classList.add("active");
        } else {
           slideImage.classList.remove("active");
        }
   })
}

window.addEventListener("scroll", debounce(slideIn));