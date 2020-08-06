// let mode = document.getElementById('mode'),
//     main = document.getElementById('main'),
//     icons = document.getElementsByClassName('icons');

// mode.addEventListener('click', function click() {
//     if (main.style.backgroundColor != "black") {
//         mode.value = "Dark Mode"
//         main.style.backgroundColor = "black";
//         for (var i = 0; i < icons.length; i++) {
//             icons[i].style.backgroundColor = "rgb(58, 58, 58)";
//             icons[i].style.color = "rgb(173, 173, 173)";
//         }
//         let wifi = document.getElementsByClassName('wifi'),
//             wifi1 = document.getElementById('wifi');
//         if (wifi1.checked = false) {
//             alert("wifi");
//             for (var j = 0; j < wifi.length; j++) {
//                 wifi[j].style.backgroundColor = "white";
//                 wifi[j].style.color = "white";

//             }
//         }
//         if (wifi1.checked = true) {
//             for (var j = 0; j < wifi.length; j++) {
//                 wifi[j].style.backgroundColor = "red";
//                 wifi[j].style.color = "white";

//             }
//         }
//     } else {
//         main.style.backgroundColor = "white";
//         mode.value = "Light Mode"
//         for (var i = 0; i < icons.length; i++) {
//             icons[i].style.backgroundColor = "rgb(173, 173, 173)";
//             icons[i].style.color = "rgb(44, 44, 44)";
//         }
//     }
// });
const mode = document.querySelector('.mode');
let dark = false;
mode.addEventListener('click', () => {
    if (dark) {
        dark = false;
        document.documentElement.setAttribute('data-theme', 'dark');
        mode.textContent = 'light';

    } else {
        dark = true;
        document.documentElement.setAttribute('data-theme', 'light');
        mode.textContent = 'dark';
    }
})