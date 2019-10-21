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

    const newGenre = document.createElement("h3");
    newGenre.textContent = event.target.genre.value;
    newSubmission.appendChild(newGenre);

    const newAlbum = document.createElement("h3");
    newAlbum.textContent = event.target.album.value;
    newSubmission.appendChild(newAlbum);

    if (radio1 === true) {
      const newRating = document.createElement("h3");
      newRating.textContent = event.target.radio1.value;
      newSubmission.appendChild(newRating);
    } else if (radio2 === true) {
      const newRating = document.createElement("h3");
      newRating.textContent = event.target.radio2.value;
      newSubmission.appendChild(newRating);
    } else {
      const newRating = document.createElement("h3");
      newRating.textContent = event.target.radio3.value;
      newSubmission.appendChild(newRating);
}
    event.target.reset()

    return resultFormSubmit;


  }

  const handleDeleteAllClick = function(event){
    const resultFormSubmit = document.querySelector('#artist-list');
    resultFormSubmit.innerHTML = '';
  }
