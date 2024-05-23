// Function to fetch JSON data from mynotes.json
async function fetchJSON() {
  const response = await fetch("mynotes.json");
  const data = await response.json();
  return data;
}

// Function to split the search input into individual keywords
function getKeywords() {
  const input = document.getElementById("search").value;
  return input
    .toLowerCase()
    .split(",")
    .map((keyword) => keyword.trim());
}

// Function to check if a description contains all the keywords
function descriptionContainsKeywords(description, keywords) {
  return keywords.every((keyword) => description.includes(keyword));
}

// Function to search the cheat sheet and display results as cards
async function searchCheatSheet() {
  const keywords = getKeywords();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  // Fetch JSON data
  const mynotes = await fetchJSON();

  // Sort the data by description
  mynotes.sort((a, b) => a.description.localeCompare(b.description));

  for (const item of mynotes) {
    const header = item.header;
    const notes = item.notes;
    const description = item.description.toLowerCase();

    if (descriptionContainsKeywords(description, keywords)) {
      // Create a result card for each matching item
      const resultCard = document.createElement("div");
      resultCard.classList.add("result-card");

      const headerElement = document.createElement("h2");
      headerElement.innerText = header;

      const notesElement = document.createElement("p");
      // Use innerHTML to render HTML content in notes
      notesElement.innerHTML = notes;

      const desElement = document.createElement("h3");
      desElement.innerText = description;

      // Append elements to the result card
      resultCard.appendChild(headerElement);
      resultCard.appendChild(notesElement);
      resultCard.appendChild(desElement);

      // Append the result card to the results container
      resultsContainer.appendChild(resultCard);
    }
  }

  // Display a message if no results were found
  if (resultsContainer.children.length === 0) {
    resultsContainer.innerText = "No results found.";
  }
}

// Initial population of the result cards
searchCheatSheet();

// Add an event listener to the search input for auto-search
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchCheatSheet);
