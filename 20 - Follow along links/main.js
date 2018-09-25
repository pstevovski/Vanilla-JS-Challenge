const links = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.append(highlight);

function moveHighlight(){
    const linkCoords = this.getBoundingClientRect();
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    console.log(coords);
    highlight.style.opacity = "1";
    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(a => a.addEventListener("mouseenter", moveHighlight));