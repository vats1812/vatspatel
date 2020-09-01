let date = document.getElementById("date");
date.innerHTML = new Date().getDate();


let d = new Date();



let day = document.getElementById("day");

let weekday = new Array(7);

weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thurs";
weekday[5] = "Fri";
weekday[6] = "Sat";

let dayname = weekday[d.getDay()];
day.innerHTML = dayname;


let month = document.getElementById("month");

let monthcount = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let monthname = month[d.getMonth()];
month.innerHTML = monthname;


setInterval(() => {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");

    hours.innerHTML = new Date().getHours();
    minutes.innerHTML = new Date().getMinutes();

    if (hours.innerHTML.toString().length == 1) {
        hours.innerHTML = "0" + hours.innerHTML;
    }
    if (minutes.innerHTML.toString().length == 1) {
        minutes.innerHTML = "0" + minutes.innerHTML;
    }
}, 1000);
setInterval(() => {
    let hours2 = document.getElementById("hours2");
    let minutes2 = document.getElementById("minutes2");

    hours2.innerHTML = new Date().getHours();
    minutes2.innerHTML = new Date().getMinutes();

    if (hours2.innerHTML.toString().length == 1) {
        hours2.innerHTML = "0" + hours2.innerHTML;
    }
    if (minutes2.innerHTML.toString().length == 1) {
        minutes2.innerHTML = "0" + minutes2.innerHTML;
    }
}, 1000);

let finger = document.getElementById("finger");
let taplock = document.getElementById("taplock")
let lockscreen = document.getElementById("lockscreen");
let homescreen = document.getElementById("homescreen");

// function print() {

//     if (finger.checked == true) {

//         lockscreen.style.visibility = "hidden";
//         homescreen.style.visibility = "visible";

//     } else if (taplock.checked == false) {

//         homescreen.style.visibility = "hidden";
//         lockscreen.style.visibility = "visible";
//     }

//     if (taplock.checked == true) {

//         homescreen.style.visibility = "hidden";
//         lockscreen.style.visibility = "visible";
//     } else if (finger.checked == false) {

//         homescreen.style.visibility = "hidden";
//         lockscreen.style.visibility = "visible";
//     }
//     if (taplock.checked == true && finger.checked == true) {
//         finger.checked == false;
//         taplock.checked == false
//     }
// }

// setInterval(print, 1000);

// finger.addEventListener('click', print);

finger.addEventListener("click", function disp() {

    lockscreen.style.visibility = "hidden";
    homescreen.style.visibility = "visible";

});

taplock.addEventListener("click", function disp2() {
    homescreen.style.visibility = "hidden";
    lockscreen.style.visibility = "visible";
});

setInterval(disp(), 3500);