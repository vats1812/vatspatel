function clock() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");

    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();
    seconds.innerHTML = new Date().getSeconds();

    if (hours.innerHTML.length == 1) {
        hours.innerHTML = "0" + hours.innerHTML;
    }

    if (minutes.innerHTML.length == 1) {
        minutes.innerHTML = "0" + minutes.innerHTML;
    }
    if (seconds.innerHTML.length == 1) {
        seconds.innerHTML = "0" + seconds.innerHTML;
    }
}
let interval = setInterval(clock, 1000);


let picker = document.getElementById("picker");
picker.addEventListener('input', function colours() {
    let rang = picker.value;

    document.getElementById("hours").style.color = rang;
    document.getElementById("minutes").style.color = rang;
    document.getElementById("seconds").style.color = rang;
});

let backpicker = document.getElementById("backpicker");
backpicker.addEventListener('input', function backcolours() {
    let rang = backpicker.value;

    document.getElementById("hours").style.background = rang;
    document.getElementById("minutes").style.background = rang;
    document.getElementById("seconds").style.background = rang;
});