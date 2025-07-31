const img = document.querySelector("img");
const body = document.querySelector("body");
const btn = document.createElement("button");
const input = document.createElement("input");

btn.addEventListener("click", () => {
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=&s=" + input.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function () {
      console.log("error lmao you suck");
    });
});

btn.textContent = "Get new gif";

body.appendChild(btn);
body.appendChild(input);
