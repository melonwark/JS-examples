const start = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
let time = 0;
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
let score = 0;
let intervalId;
const startBtn = document.querySelector('.startAgain')
// переходим к выбору времени
start.addEventListener("click", (event) => {
    event.preventDefault();
    screens[0].classList.add("up");
});
// получаем время и начинаем игру
timeList.addEventListener("click", (event) => {
    if (event.target.classList.contains("time-btn")) {
        time = +event.target.getAttribute("data-time");
        screens[1].classList.add("up");
        startGame();
    }
});
// убиваем кружочки
board.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        score++;
        event.target.remove();
        createCircle();
    }
});


// начинаем заново
startBtn.addEventListener('click', startAgain)




// иницилизируем игру
function startGame() {
    intervalId = setInterval(decrTimer, 1000);
    createCircle();
    timeEl.parentNode.classList.remove('hide');
    timeEl.innerHTML = `00:${time}`;

    score = 0;
}
// уменьшаем таймер
function decrTimer(value) {
    if (time !== 0) {
        time--;
        timeEl.innerHTML = `00:${time < 10 ? "0" + time : time}`;
    } else {
        clearInterval(intervalId);
        finishGame();
    }
}

// финальная табличка

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счёт:<span class ='primary'>${score}</span></h1>`;
    startBtn.classList.remove('hide');

}
// начинаем заново
function startAgain() {
    screens[1].classList.remove('up');
    startBtn.classList.add('hide');
    board.innerHTML = '';
}

// создаём круги
function createCircle() {
    const circle = document.createElement("div");
    const size = randomSize(10, 90);
    const { width, height } = board.getBoundingClientRect();
    const x = randomSize(0, width - size);
    const y = randomSize(0, height - size);
    const red = randomSize(0, 255);
    const green = randomSize(0, 255);
    const blue = randomSize(0, 255);

    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `linear-gradient(90deg, rgb(${red},${green},${blue}) 0%, rgb(${red},${green},${blue}) 47%, rgb(${red},${green},${blue}) 100%)`;
    board.append(circle);
}
// получаем рандом значения
function randomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}



