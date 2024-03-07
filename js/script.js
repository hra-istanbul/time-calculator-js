let userTime = prompt("Please enter seconds");
let seconds = parseInt(userTime);
let timerElement = document.getElementById('timerDisplay');

console.log(seconds);

let min = Math.floor(seconds / 60)
console.log(min)
seconds = seconds % 60;
console.log(seconds);


let timer = setInterval(function () {
    timerElement.innerHTML = "Timer:" + min + "min" + seconds + "sec";


    if (seconds > 0) {
        seconds--;
    }
    else if (min >= 0) {
        min--;
        seconds=59;
    }

    else {
        clearInterval(timer);
        alert("Vaxt bitdi hihi")
    }
}, 1000)