const storeCodes = [];
const theCode = "pecko";

window.addEventListener("keyup", (e)=>{
    storeCodes.push(e.key);
    // -theCode.length - 1 -> starts the splice from the END of the array
    storeCodes.splice(-theCode.length - 1, storeCodes.length - theCode.length );
    if(storeCodes.join('').includes(theCode)){
        window.open("https://www.konami.com", "KONAMI CODE", "width=600, height=600");
    }
})