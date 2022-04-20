//Query Selectors
let inputBox = document.querySelector('.input_box');
let radioInput = inputBox.querySelector('input[type=radio][name=radio]');
let inputCost = inputBox.querySelector('#ffi1');
let submitBtn = inputBox.querySelector('.sub-btn');
let day = inputBox.querySelector('#d-day');
let month = inputBox.querySelector('#d-month');
let year = inputBox.querySelector('#d-year');
let detailInput = inputBox.querySelector('#detail_box');
let dataShow = document.querySelector('#list_row');
let tnum = dataShow.querySelector('#tnum');
let tcost = dataShow.querySelector('#tcost');
let tdate = dataShow.querySelector('#tdate');
let ttype = dataShow.querySelector('#ttype');

//JS
let fin = {} //type,cost,date,detail
let finData = []

submitBtn.addEventListener('click' , function(e) {
    e.preventDefault();
    typeHandler();
    costHandler();
    dateHandler();
    detailHandler();
    fin.key = Date.now();
    finDataHandler();
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
    
}

let detailHandler = () => {
    fin.detail = detailInput.value;
    detailInput.value = '';
}

let finDataHandler = () => {
    finData.push(fin);
    console.log(finData)
}