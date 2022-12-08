import "../styles/style.css";
import { music } from "../js/albums.js";
import { DOM } from "../js/DOMMY.js";

document.querySelector("#app").innerHTML = `
  <div>
  <img src="${DOM.cover}" alt="This is the music">
  <p>This is ${DOM.title} by ${DOM.artist}. It was released in the year ${DOM.year} and it is ${DOM.lengthM} minutes long and ${DOM.lengthS} seconds long. These are the album's genres: ${DOM.genre}.</p>
  </div>
`;

music
  .filter((album) => album.year > 1999)
  .forEach((album) => console.log(album.title));
