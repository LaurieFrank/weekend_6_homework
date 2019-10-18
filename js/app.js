document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-artist-form");
  form.addEventListener("submit", handleFormSubmit);
})

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultFormSubmit = document.querySelector("#artist-list");

    const newSubmission = document.createElement("ul");
    resultFormSubmit.appendChild(newSubmission);

    const new
  }
