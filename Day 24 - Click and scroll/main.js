const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

function startingPosition(e){
    // Turn the flag to true and add a class.
    isDown = true;
    slider.classList.add("active");
    // Get the starting position where the user clicked.
    startX = e.pageX - slider.offsetLeft;
    // Append the value to the variable.
    scrollLeft = slider.scrollLeft;
}
// If the mouse click is not being held down, remove the class and turn the flag to false.
function mouseIsUp(){
    isDown = false;
    slider.classList.remove("active");
}
// If the mouse left the area, remove the class and turn the flag to false.
function mouseLeft(){
    isDown = false;
    slider.classList.remove("active");
}

function mouseMoved(e){
    // If the isDown flag variable is false, then end the function.
    if(!isDown) return;

    // Prevent default mouse actions (like selection).
    e.preventDefault();
    // Re-calculate the X position after the user has moved the mouse (different than the startX value).
    const x = e.pageX - slider.offsetLeft;

    // Calculate the difference between the starting position (startX) and the new, re-calculated position, when the user moved the mouse (x).
    const walk = x - startX;

    // Scroll the element for the value the mouse was moved(walked). Scroll left initial value is 0, so its 0 +/- the walk.
    slider.scrollLeft = scrollLeft - walk;
}

// Event listeners.
slider.addEventListener("mousedown", startingPosition);
slider.addEventListener("mouseup", mouseIsUp)
slider.addEventListener("mouseleave", mouseLeft);
slider.addEventListener("mousemove", mouseMoved)