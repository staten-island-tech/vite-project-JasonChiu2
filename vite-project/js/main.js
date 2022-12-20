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
  <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
  </div>
`;
  album.genre.forEach((genre) => {
    let newEl = `<p class="genres">${genre}</p>`;
    return (html += newEl);
  });
  DOM.app.insertAdjacentHTML("beforeend", html);
});

document.querySelector(".everything").addEventListener("click", function () {
  DOM.app.innerHTML = "";
  music.forEach((album) => {
    let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
      </div>
    `;
    album.genre.forEach((genre) => {
      let newEl = `<p class="genres">${genre}</p>`;
      return (html += newEl);
    });
    DOM.app.insertAdjacentHTML("beforeend", html);
  });
});

document.querySelector(".ten").addEventListener("click", function () {
  DOM.app.innerHTML = "";
  music
    .filter((album) => album.ten === true)
    .forEach((album) => {
      let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
      </div>
    `;
      album.genre.forEach((genre) => {
        let newEl = `<p class="genres">${genre}</p>`;
        return (html += newEl);
      });
      DOM.app.insertAdjacentHTML("beforeend", html);
    });
});

document.querySelector(".recent").addEventListener("click", function () {
  DOM.app.innerHTML = "";
  music
    .filter((album) => album.year >= 2000)
    .forEach((album) => {
      let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
      </div>
    `;
      album.genre.forEach((genre) => {
        let newEl = `<p class="genres">${genre}</p>`;
        return (html += newEl);
      });
      DOM.app.insertAdjacentHTML("beforeend", html);
    });
});

document.querySelector(".hour").addEventListener("click", function () {
  DOM.app.innerHTML = "";
  music
    .filter((album) => album.runtime > 60)
    .forEach((album) => {
      let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
      </div>
    `;
      album.genre.forEach((genre) => {
        let newEl = `<p class="genres">${genre}</p>`;
        return (html += newEl);
      });
      DOM.app.insertAdjacentHTML("beforeend", html);
    });
});

document.querySelector(".lo-fi").addEventListener("click", function () {
  DOM.app.innerHTML = "";
  music
    .filter((album) => album.genre.includes("lo-fi"))
    .forEach((album) => {
      let html = `
      <div class="card">
      <img class="album-cover" src="${album.cover}" alt="This is the music">
      <h2 class="description">This is ${album.title} by ${album.artist}. It was released in the year ${album.year} and it is ${album.runtime} minutes long.</h2>
      </div>
    `;
      album.genre.forEach((genre) => {
        let newEl = `<p class="genres">${genre}</p>`;
        return (html += newEl);
      });
      DOM.app.insertAdjacentHTML("beforeend", html);
    });
});
