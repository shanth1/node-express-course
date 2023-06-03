const timerElement = document.getElementById("timer");

let timer = 0;
setInterval(() => {
    timer++;
    timerElement.innerText = timer;
}, 1000);
