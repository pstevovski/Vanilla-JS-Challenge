const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground")
const nav = document.querySelector(".top");

function showMenu(){
    console.log("ENTER")
    this.classList.add("trigger-enter");
    setTimeout(() => {
        if(this.classList.contains("trigger-enter")){
            this.classList.add("trigger-enter-active");
        }
    }, 150);

    background.classList.add("open");

    const dropdown = this.querySelector(".dropdown");
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.width = `${coords.width}px`;
    background.style.height = `${coords.height}px`;
    background.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

}
function hideMenu(){
    this.classList.remove("trigger-enter", "trigger-enter-active");
    background.classList.remove("open");
}

triggers.forEach(trigger => trigger.addEventListener("mouseenter", showMenu));
triggers.forEach(trigger => trigger.addEventListener("mouseleave", hideMenu));