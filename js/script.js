//Query Selectors
let inputBox = document.querySelector('.input_box');
let radioInput = inputBox.querySelector('input[type=radio][name=radio]');
let inputCost = inputBox.querySelector('#ffi1');
let submitBtn = inputBox.querySelector('.sub-btn');
let day = inputBox.querySelector('#d-day');
let month = inputBox.querySelector('#d-month');
let year = inputBox.querySelector('#d-year');

//JS
let fin = {} //type,cost,date,detail

submitBtn.addEventListener('click' , function(e) {
    e.preventDefault();
    typeHandler();
    costHandler();
    dateHandler();
})


let typeHandler = () => {
    fin.type = radioInput;
}
let costHandler = () => {
    fin.cost = parseInt(inputCost.value);
    inputCost.value = '';
}
let dateHandler = () => {
    fin.date = {
        year : year.value,
        month : month.value,
        day : day.value
    }
    year.value = month.value = day.value = ''
    console.log(fin)
    
}