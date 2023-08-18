// Wait for the HTML document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the HTML element where you want to display the JSON contents
    const animeContainer = document.getElementById("animeContainer");

    // Fetch JSON data from the provided JSON file using the fetch() function
    fetch("Anime.json")
        .then(response => {
            // Check if the fetch request was successful
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(animeList => {
            // Loop through the animeList and create HTML elements to display the contents
            animeList.forEach(anime => {
                const animeCard = createAnimeCard(anime);
                animeContainer.appendChild(animeCard);
            });
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
});

// Function to create an anime card HTML structure
function createAnimeCard(anime) {
    const animeDiv = document.createElement("div");
    animeDiv.classList.add("anime");

    const animeImage = document.createElement("img");
    animeImage.src = anime.imageUrl;
    animeImage.alt = anime.name;
    animeDiv.appendChild(animeImage);

    const animeName = document.createElement("h2");
    animeName.textContent = anime.name;
    animeDiv.appendChild(animeName);

    const animeDescription = document.createElement("p");
    animeDescription.textContent = anime.description;
    animeDiv.appendChild(animeDescription);

    const animeRating = document.createElement("p");
    animeRating.textContent = `Rating: ${anime.rating} stars`;
    animeDiv.appendChild(animeRating);

    return animeDiv;
}
