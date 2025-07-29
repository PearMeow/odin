console.log("ello");

const pics = document.querySelector(".pics");
const rBtn = document.querySelector(".right");
const lBtn = document.querySelector(".left");
const where = document.querySelector(".where");

const picArr = {
    thePics: [],
    currInd: -1,
    push(path) {
        const img = document.createElement("img");
        img.src = path;
        img.style.display = "none";
        this.thePics.push(img);
        pics.appendChild(img);
    },
    displayNext(offset = 1) {
        if (this.thePics.length === 0) {
            return;
        }
        if (this.currInd !== -1) {
            this.thePics[this.currInd].style.display = "none";
        }
        this.currInd =
            (this.currInd + offset + this.thePics.length) % this.thePics.length;
        console.log(this.currInd);
        this.thePics[this.currInd].style.display = "block";
        this.changeWhere();
    },
    changeWhere() {
        let text = "";
        where.replaceChildren();
        const btns = document.createElement("div");
        const btnArr = [];
        for (let i = 0; i < this.thePics.length; ++i) {
            if (i === this.currInd) {
                text = "O";
            } else {
                text = ".";
            }
            const progressBtn = document.createElement("button");
            btnArr.push(progressBtn);
            progressBtn.textContent = text;
            progressBtn.addEventListener("click", () => {
                if (this.currInd !== -1) {
                    this.thePics[this.currInd].style.display = "none";
                    btnArr[this.currInd].textContent = ".";
                }
                this.thePics[i].style.display = "block";
                this.currInd = i;
                progressBtn.textContent = "O";
            });
            btns.appendChild(progressBtn);
        }
        where.appendChild(btns);
    },
};

for (let i = 0; i < 5; ++i) {
    picArr.push("./place" + i + ".png");
}

function recurse() {
    setTimeout(() => {
        picArr.displayNext();
        recurse();
    }, 5000);
}

picArr.displayNext();
recurse();
rBtn.addEventListener("click", () => picArr.displayNext());
lBtn.addEventListener("click", () => picArr.displayNext(-1));
