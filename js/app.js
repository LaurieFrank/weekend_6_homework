document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-artist-form");
  form.addEventListener("submit", handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
})

  const handleFormSubmit = function (event) {
    event.preventDefault();
    const resultFormSubmit = document.querySelector("#artist-list");

    const newSubmission = document.createElement("p");
    resultFormSubmit.appendChild(newSubmission);

    const newArtist = document.createElement("h2");
    newArtist.textContent = event.target.artist.value;
    newSubmission.appendChild(newArtist);

    const newGenre = document.createElement("p");
    newGenre.textContent = event.target.genre.value;
    newSubmission.appendChild(newGenre);

    const newBestAlbum = document.createElement("h2");
    newBestAlbum.textContent = event.target.best_album.value;
    newSubmission.appendChild(newBestAlbum);

    event.target.reset()

    return resultFormSubmit;


  }

  const handleDeleteAllClick = function(event){
    const resultFormSubmit = document.querySelector('#artist-list');
    resultFormSubmit.innerHTML = '';
  }
