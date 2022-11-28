let fromTxt = document.querySelector('.from');
let toTxt = document.querySelector('.to');
let valuesFrom = "RUB";
let valuesTo = "USD";
let base = valuesFrom;
let symbols = valuesTo;
const getDataFirst = () => fetch(`https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`)
.then(res => res.json());
const showStartingData1 = async () => {
    const data = await getDataFirst();
    let mul = data.rates[symbols];
    let messageFrom = document.querySelector('.curr-value-from');
    messageFrom.innerHTML = `1 ${base} = ${mul} ${symbols}`;
    fromTxt.value = 1;
    toTxt.value = +fromTxt.value*mul;
}
showStartingData1();
const getDataSecond = () => fetch(`https://api.exchangerate.host/latest?base=${symbols}&symbols=${base}`)
.then(res => res.json());
const showStartingData2 = async () => {
    const data = await getDataSecond();
    let mul = data.rates[base];
    let messageTo = document.querySelector('.curr-value-to');
    messageTo.innerHTML = `1 ${symbols} = ${mul} ${base}`;
}
showStartingData2();
function fromtoTo() {
    const showData = async () => {
        const data = await getDataFirst();
        let mul = data.rates[symbols];
        toTxt.value = +fromTxt.value*mul;
    }
    showData();
}
function mesFrom() {
    const showData = async () => {
        const data = await getDataFirst();
        let mul = data.rates[symbols];
        let messageFrom = document.querySelector('.curr-value-from');
        messageFrom.innerHTML = `1 ${base} = ${mul} ${symbols}`;
    }
    showData();
}
function totoFrom() {
    const showData = async () => {
        const data = await getDataSecond();
        let mul = data.rates[base];
        fromTxt.value = +toTxt.value*mul;
    }
    showData();
}
function mesTo() {
    const showData = async () => {
        const data = await getDataSecond();
        let mul = data.rates[base];
        let messageFrom = document.querySelector('.curr-value-to');
        messageFrom.innerHTML = `1 ${symbols} = ${mul} ${base}`;
    }
    showData();
}
function changeCurrencyFrom(event) {
    let selected = event.target.closest('.unselected');
    let alreadySelected = document.querySelector('.selected');
    if (alreadySelected.classList.contains('selected') && selected.classList.contains('unselected')) {
        alreadySelected.classList.replace('selected', 'unselected');
        selected.classList.replace('unselected', 'selected');
        base = selected.innerHTML;
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
        symbols = selected.innerHTML;
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