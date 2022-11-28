let fromTxt = document.querySelector('.from');
let toTxt = document.querySelector('.to');
let valuesFrom = "RUB";
let valuesTo = "USD";
let base1 = valuesFrom;
let symbols1 = valuesTo;
fetch(`https://api.exchangerate.host/latest?base=${base1}&symbols=${symbols1}`)
.then(res => res.json())
.then(data => {
    let mul = data.rates[symbols1];
    let messageFrom = document.querySelector('.curr-value-from');
    messageFrom.innerHTML = `1 ${valuesFrom} = ${mul} ${valuesTo}`;
    fromTxt.value = 1;
    toTxt.value = +fromTxt.value*mul;
})
let base2 = valuesTo;
let symbols2 = valuesFrom;
    fetch(`https://api.exchangerate.host/latest?base=${base2}&symbols=${symbols2}`)
    .then(res => res.json())
    .then(data => {
        let mul = data.rates[symbols2];
        let messageTo = document.querySelector('.curr-value-to');
        messageTo.innerHTML = `1 ${valuesTo} = ${mul} ${valuesFrom}`;
    })
function fromtoTo() {
    let base = valuesFrom;
    let symbols = valuesTo;
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    .then(res => res.json())
    .then(data => {
        let mul = data.rates[symbols];
        toTxt.value = +fromTxt.value*mul;
    })
}
function mesFrom() {
    let base = valuesFrom;
    let symbols = valuesTo;
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    .then(res => res.json())
    .then(data => {
        let mul = data.rates[symbols];
        let messageFrom = document.querySelector('.curr-value-from');
        messageFrom.innerHTML = `1 ${valuesFrom} = ${mul} ${valuesTo}`;
    })
}
function totoFrom() {
    let base = valuesTo;
    let symbols = valuesFrom;
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    .then(res => res.json())
    .then(data => {
        let mul = data.rates[symbols];
        fromTxt.value = +toTxt.value*mul;
    })
}
function mesTo() {
    let base = valuesTo;
    let symbols = valuesFrom;
    fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
    .then(res => res.json())
    .then(data => {
        let mul = data.rates[symbols];
        let messageTo = document.querySelector('.curr-value-to');
        messageTo.innerHTML = `1 ${valuesTo} = ${mul} ${valuesFrom}`;
    })
}
function changeCurrencyFrom(event) {
    let selected = event.target.closest('.unselected');
    let alreadySelected = document.querySelector('.selected');
    if (alreadySelected.classList.contains('selected') && selected.classList.contains('unselected')) {
        alreadySelected.classList.replace('selected', 'unselected');
        selected.classList.replace('unselected', 'selected');
        valuesFrom = selected.innerHTML;
        totoFrom();
        mesFrom();
        mesTo();
    }
}
function changeCurrencyTo(event) {
    let selected = event.target.closest('.unselected2');
    let alreadySelected = document.querySelector('.selected2');
    if (alreadySelected.classList.contains('selected2') && selected.classList.contains('unselected2')) {
        alreadySelected.classList.replace('selected2', 'unselected2');
        selected.classList.replace('unselected2', 'selected2');
        valuesTo = selected.innerHTML;
        fromtoTo();
        mesFrom();
        mesTo();
    }
}
fromTxt.addEventListener('keyup', fromtoTo);
toTxt.addEventListener('keyup', totoFrom);
let buttonsFrom = document.querySelector('.buttons-from').children;
let buttonsTo = document.querySelector('.buttons-to').children;
for (let i=0; i<buttonsFrom.length; i++) {
    buttonsFrom[i].addEventListener('click', changeCurrencyFrom);
}
for (let i=0; i<buttonsFrom.length; i++) {
    buttonsTo[i].addEventListener('click', changeCurrencyTo);
}