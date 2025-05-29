console.log("This script manipulates the DOM (Document Object Model)");

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redPara = document.createElement("p");
redPara.style.color = "red";
redPara.textContent = "Hey I'm red!";
container.appendChild(redPara);

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

const box = document.createElement("div");
box.style.border = "5px solid";
box.style.backgroundColor = "pink";

const boxHeader = document.createElement("h1");
boxHeader.textContent = "I'm in a div";
box.appendChild(boxHeader);

const boxPara = document.createElement("p");
boxPara.textContent = "ME TOO!"
box.appendChild(boxPara);

container.appendChild(box);

function alertUser() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");
btn.onclick = alertUser;

const eventBtn = document.querySelector("#eventBtn");
eventBtn.addEventListener("click", alertUser);

eventBtn.addEventListener("click", (event) => console.log(event));
eventBtn.addEventListener("click", (event) => console.log(event.target));
eventBtn.addEventListener("click", (event) => event.target.style.background = "blue");

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", () => alert(btn.id)));
