let h2 = document.querySelector("h2");
let body = document.querySelector("body");
let btns = document.querySelectorAll(".btn");
let colors = ["yellow", "red", "green", "blue"];
let gameseq = [];
let userseq = [];
let level = 0;
let start = false;
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
}
body.addEventListener("click", function (event) {
    event.stopPropagation();
    if (start == false) {
        console.log("game started");
        start = true;
        levelup();
    }
})
function levelup() {
    userseq = [];
    let randidx = Math.floor(Math.random() * colors.length);
    let randcolor = colors[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    flash(randbtn);
    level++;
    h2.innerText = `Level ${level}`;
}
function checkans(len) {
    if (gameseq[len] == userseq[len]) {
        if(userseq.length == gameseq.length)
        setTimeout(levelup, 1000);
    }
    else {
        h2.innerText = `Game Over!Your Score was ${level}.Press any key to start`;
        reset();
    }
}
function btnpress(event) {
    event.stopPropagation();

    let btn = this;
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 250);
    let btnid = btn.getAttribute("id");
    userseq.push(btnid);
    checkans(userseq.length - 1);
}
for (btn of btns) {
    btn.addEventListener("click", btnpress);
}
function reset() {
    userseq = [];
    gameseq = [];
    level = 0;
    start = false;
}
