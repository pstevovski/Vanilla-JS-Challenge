const inputs = document.querySelectorAll(".controls input");

inputs.forEach(input => input.addEventListener("change", transform));
inputs.forEach(input => input.addEventListener("mousemove", transform));

function transform(){
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    const info = document.querySelectorAll(".info");
    info.forEach(info => {
        if(this.name === info.id){
        info.innerHTML = this.value + suffix;
        }
    });
}