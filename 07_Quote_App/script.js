document.addEventListener("DOMContentLoaded", function () {
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
      });
  }

  // Display a default quote upon start
  fetchQuote();

  // Event listener for "Get Quote" button
  getQuoteButton.addEventListener("click", fetchQuote);
});
