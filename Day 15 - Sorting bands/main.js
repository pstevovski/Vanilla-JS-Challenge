const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Replace the "a, the, an" letters using a RegEx, with empty space (dont count / read them).
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sort the bands array by alphabetical order, between band A and band B, while in the same time giving the strip function to each of the bands(strip(a)) & (strip(b)), so it orders the array in the order without reading / taking in consideration the "a, the, an".
const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1 );

// Return an array from the sortedBands array into the innerHTML of the un-ordered list (#bands) with creating a list item with the band name for EACH of the array elements and then joining them as they are returend as strings, so joining them as a whole.
document.querySelector("#bands").innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.log(sortedBands);