let countries = document.querySelectorAll(".convcontainer select");
let firstCurrency = document.querySelector(".firstCurrency select");
let secondCurrency = document.querySelector(".secondCurrency select");
let firstAmt = document.getElementById("firstInp");
let secondAmt = document.getElementById("secondInp");
let swap = document.getElementById("swap");

for (let i = 0; i < countries.length; i++) {
    for (let currencies in country_list) {
        let selected = i == 0 ? currencies == "INR" ? "selected" : "" : currencies == "USD" ? "selected" : "";
        let optionTag = `<option value="${currencies}"${selected}>${currencies}&nbsp;&nbsp;(${country_list[currencies]})</option>`;
        countries[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

window.addEventListener("load", () => {
    getExchangeRate();
})

function getExchangeRate() {
    let first_Currency = firstCurrency.value;
    let second_Currency = secondCurrency.value;

    let url = `https://v6.exchangerate-api.com/v6/af91d6f101954c2637c3eadf/latest/${first_Currency}`;

    fetch(url).then(res => res.json()).then(data => {
        let exchangeRate = data.conversion_rates[second_Currency]; // getting user selected TO currency rate
        secondAmt.value = (firstAmt.value * exchangeRate).toFixed(4);
    })
}

firstCurrency.addEventListener("change", getExchangeRate);
firstAmt.addEventListener("input", getExchangeRate);
secondCurrency.addEventListener("change", getExchangeRate);
secondAmt.addEventListener("input", getExchangeRate);

swap.addEventListener('click', () => {
    const temp = firstCurrency.value;
    firstCurrency.value = secondCurrency.value;
    secondCurrency.value = temp;
    getExchangeRate();
});