// Save the API and select the DOM elements

const api = 'https://swapi.dev/api/people/';
const form = document.getElementById("search-form");
const query = document.querySelector(".search-input");
const button = document.querySelector(".search-button");
const containerCharacters = document.querySelector(".container-characters");

// We initialize our page by default at 1 and if the user is searching

let page = 1;
let isSearching = false;

// Function for the fetch of data 

async function fetchData(url){
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not okay");
        return await response.json(); 
    } catch(error) {
        return null;
    }
}

// Function to fetch and show results 

async function results(url) {
    const data = await fetchData(url);
    if (data && data.results) showResults(data.results);
}

// Function to create character-card HTML template 

function createCard(character) {
    const imagePath = `src/${character.name.toLowerCase()}.jpg`
    const cardHTML = 
    `
    <div class="character-card">
        <div class="box">
            <img src="${imagePath}" alt="${character.name}" class="character-image" loading="lazy">
            <h3>${character.name}</h3>
            <p><strong> Birth Year >> </strong>${character.birth_year}</p>
            <p><strong>Height >> </strong>${character.height} cm</p>
            <p><strong>Mass >> </strong>${character.mass} kg</p>
            <p><strong>Gender >> </strong>${character.gender}</p>
            <p><strong>Hair color >> </strong>${character.hair_color}</p>
            <p><strong>Eye color >> </strong>${character.eye_color}</p>
            <p><strong>Skin color >> </strong>${character.skin_color}</p>
        </div>
    </div>
    `;
    return cardHTML;
}
// Function to display results

function showResults(results) {
    containerCharacters.innerHTML = "";

    results.forEach(character => {
        const card = createCard(character);
        containerCharacters.insertAdjacentHTML("beforeend", card);
    });
}

// Function to handle form submission

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = query.value.trim();

    if (searchTerm) {
        isSearching = true;
        results(`https://swapi.dev/api/people/?search=${searchTerm}`);
    } else {
        isSearching = false;
        results(`${api}?page=${page}`);
    }

    query.value = "";

});

// Function to handle pagination

function handlePagination(direction) {
    if (direction === 'previous') page = (page === 1) ? 9 : page - 1;
    else if (direction === 'next') page = (page === 9) ? 1 : page + 1;

    if (isSearching) {
        results(`https://swapi.dev/api/people/?search=${query.value.trim()}`);
    } else results(`${api}?page=${page}`);
}

// Event listeners for pagination buttons

document.getElementById('previous-button').addEventListener('click', () => handlePagination('previous'));
document.getElementById('next-button').addEventListener('click', () => handlePagination('next'));

// Initial results on page load

results(`${api}?page=${page}`);
