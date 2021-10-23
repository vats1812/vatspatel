let dark = true;
const mode = document.getElementById("theme");
let modeimg = document.getElementById("modeimg");
mode.addEventListener("click", () => {
    if (!dark) {
        dark = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        modeimg.innerHTML = '<img src="../img/dark.png" alt="dark">';
    } else {
        dark = false;
        document.documentElement.setAttribute('data-theme', 'light');
        modeimg.innerHTML = '<img src="../img/light.png" alt="light">';
    }

})