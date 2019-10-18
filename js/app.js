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

    const newArtist = document.createElement("li");
    newArtist.textContent = event.target.artist.value;
    newSubmission.appendChild(newArtist);

    const newGenre = document.createElement("li");
    newGenre.textContent = event.target.genre.value;
    newSubmission.appendChild(newGenre);

    const newBestAlbum = document.createElement("li");
    newBestAlbum.textContent = event.target.best_album.value;
    newSubmission.appendChild(newBestAlbum);

    event.target.reset()
  }
