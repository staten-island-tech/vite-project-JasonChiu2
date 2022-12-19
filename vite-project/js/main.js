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

music.forEach((album) => {
  let html = `
  <div class="card">
  <img class="album-cover" src="${album.cover}" alt="This is the music">
  <p class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</p>
  </div>
`;
  album.genre.forEach((genre) => {
    let newEl = `<p>${genre}</p>`;
    return (html += newEl);
  });
  DOM.app.insertAdjacentHTML("afterbegin", html);
});

music
  .filter((album) => album.runtime > 60)
  .forEach((album) => console.log(album.title, album.runtime));
