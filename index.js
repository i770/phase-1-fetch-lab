function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Convert the response to JSON
    .then((json) => renderBooks(json)); // Call renderBooks with the JSON data
}

function renderBooks(books) {
  // Get the container element where the book titles will be displayed
  const main = document.getElementById('main');

  // Check if the main element exists
  if (main) {
    // Iterate through the books array and create an HTML element for each book
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.textContent = book.name; // Set the text content to the book's name
      main.appendChild(h2); // Append the element to the container
    });
  } else {
    console.error("The element with id 'main' does not exist.");
  }
}

// Call the fetchBooks function when the page loads
document.addEventListener('DOMContentLoaded', fetchBooks);
