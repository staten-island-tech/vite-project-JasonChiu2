import "../styles/style.css";
import { music } from "../js/albums.js";
import { DOM } from "../js/DOMMY.js";

DOM.theme.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

const musicTen = music
  .filter((album) => album.ten === true)
  .map((album) => album);

const musicRecent = music
  .filter((album) => album.year >= 2000)
  .map((album) => album);

const musicHour = music
  .filter((album) => album.runtime > 60)
  .map((album) => album);

const musicLoFi = music
  .filter((album) => album.genre.includes("Lo-Fi"))
  .map((album) => album);

music.forEach((album) => {
  let html = `
  <div class="card">
  <img class="album-cover" src="${album.cover}" alt="This is the music">
  <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
`;
  album.genre.forEach((genre) => {
    let newEl = `<p class="genres">${genre}</p>`;
    return (html += newEl);
  });
  html += `</div>`;
  DOM.app.insertAdjacentHTML("beforeend", html);
});

DOM.everything.addEventListener("click", function () {
  DOM.app.innerHTML = "";
  music.forEach((album) => {
    let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
    `;
    album.genre.forEach((genre) => {
      let newEl = `<p class="genres">${genre}</p>`;
      return (html += newEl);
    });
    html += `</div>`;
    DOM.app.insertAdjacentHTML("beforeend", html);
  });
});

DOM.ten.addEventListener("click", function () {
  DOM.app.innerHTML = "";
  musicTen.forEach((album) => {
    let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
    `;
    album.genre.forEach((genre) => {
      let newEl = `<p class="genres">${genre}</p>`;
      return (html += newEl);
    });
    html += `</div>`;
    DOM.app.insertAdjacentHTML("beforeend", html);
  });
});

DOM.recent.addEventListener("click", function () {
  DOM.app.innerHTML = "";
  musicRecent.forEach((album) => {
    let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
    `;
    album.genre.forEach((genre) => {
      let newEl = `<p class="genres">${genre}</p>`;
      return (html += newEl);
    });
    html += `</div>`;
    DOM.app.insertAdjacentHTML("beforeend", html);
  });
});

DOM.hour.addEventListener("click", function () {
  DOM.app.innerHTML = "";
  musicHour.forEach((album) => {
    let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
    `;
    album.genre.forEach((genre) => {
      let newEl = `<p class="genres">${genre}</p>`;
      return (html += newEl);
    });
    html += `</div>`;
    DOM.app.insertAdjacentHTML("beforeend", html);
  });
});

DOM.lofi.addEventListener("click", function () {
  DOM.app.innerHTML = "";
  musicLoFi.forEach((album) => {
    let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
    `;
    album.genre.forEach((genre) => {
      let newEl = `<p class="genres">${genre}</p>`;
      return (html += newEl);
    });
    html += `</div>`;
    DOM.app.insertAdjacentHTML("beforeend", html);
  });
});
