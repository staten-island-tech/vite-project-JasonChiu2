import "../styles/style.css";
import { music } from "../js/albums.js";
import { DOM } from "../js/DOMMY.js";

document.querySelector(`.change`).addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

document
  .querySelector(".options-button")
  .addEventListener("click", function () {
    insert();
  });

function insert() {
  let title = DOM.title.value;
  let artist = DOM.artist.value;
  let year = DOM.year.value;
  let runtime = DOM.runtime.value;
  let cover = DOM.cover.value;
  let genre = DOM.genre.value;
  DOM.app.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card">
    <img class="album-cover" src="${cover}" alt="This is the music">
    <p class="description">This is ${title} by ${artist}. It was released in the year ${year} and it is ${runtime} minutes long. These are the album's genres: ${genre}.</p>
    </div>
  `
  );
}

music.forEach((album) => console.log(album.title, album.runtime));
