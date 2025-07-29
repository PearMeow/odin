console.log("hello");

const btn = document.querySelector("button");
const content = document.querySelector(".content");
btn.addEventListener("click", () => toggleVisible(content));

function toggleVisible(content) {
    if (content.style.display == "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
