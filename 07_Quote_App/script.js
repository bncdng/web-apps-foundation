const quote = document.getElementById("quote");
const author = document.getElementById("author");
const getQuoteButton = document.getElementById("getQuote");

// Function to fetch a random quote from the API
function fetchQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data.content;
      author.textContent = "- " + data.author;
    })
    .catch((err) => {
      throw err;
    });
}

// Event listener for "Get Quote" button
getQuoteButton.addEventListener("click", fetchQuote);

// Show error message when servers ar not available
// if (response.json() != true) {
//   window.onerror = () => {
//     const message = ["Servers are not available right now."];
//     return alert(message);
//   };
// }
