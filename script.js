// Sample JSON data for the cheat sheet with header, notes, and description
const mynotes = [
    {
        "header": "ftp Penetration Testing",
        "notes": "<h3>Banner Grabbing</h3>",
        "description": "telnet, remote"
    },
    {
        "header": "Firewalls",
        "notes": "Firewalls are network security devices that filter incoming and outgoing traffic to protect a network from unauthorized access and threats.",
        "description": "Firewall, Network Security, Packet Filtering"
    }
];


// Function to split the search input into individual keywords
function getKeywords() {
    const input = document.getElementById("search").value;
    return input.toLowerCase().split(",").map(keyword => keyword.trim());
}

// Function to check if a description contains all the keywords
function descriptionContainsKeywords(description, keywords) {
    return keywords.every(keyword => description.includes(keyword));
}

// Function to search the cheat sheet and display results as cards
function searchCheatSheet() {
    const keywords = getKeywords();
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

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
            notesElement.innerText = notes;

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
