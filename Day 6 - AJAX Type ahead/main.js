const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// Fetch() returns promises (.then, .catch). Transform the promise to a json() and then push the "data" that you get into an array to get one long array with all the items.
fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities){
    return cities.filter(place =>{
        const regex = new RegExp(wordToMatch, "gi"); // gi -> global, insensitive(doesnt matter if its lower or uppercase);
        return place.city.match(regex) || place.state.match(regex);
    })
}
// wordToMatch parameter => this.value in the displayMatches().

// "Regular Expression" to put commas properly for bigger numbers.
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const listItems = matchArray.map(place =>{
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name"> ${cityName}, ${stateName}</span>
            <span class="state"> ${numberWithCommas(place.population)} </span>
            <span>${place.rank}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = listItems;
}

const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

input.addEventListener("keyup", displayMatches);