//Query Selectors
let inputBox = document.querySelector('.input_box');
let radioInput = inputBox.querySelector('input[type=radio][name=radio]:checked');
let inputCost = inputBox.querySelector('#ffi1');
let submitBtn = inputBox.querySelector('.sub-btn');
let day = inputBox.querySelector('#d-day');
let month = inputBox.querySelector('#d-month');
let year = inputBox.querySelector('#d-year');
let detailInput = inputBox.querySelector('#detail_box');
let table = document.getElementById("table");

//JS

let finData = []





submitBtn.addEventListener('click' , function(e) {
    let fin = {} //type,cost,date,detail
    let typeHandler = (e) => {
        // e.preventDefault();
        fin.type = radioInput;
    }
    let costHandler = (e) => {
        // e.preventDefault();
        fin.cost = parseInt(inputCost.value);
        inputCost.value = '';
    }
    let dateHandler = (e) => {
        // e.preventDefault();
        fin.date = {
            year : year.value,
            month : month.value,
            day : day.value
        }
        year.value = month.value = day.value = ''
        
    }
    
    let detailHandler = (e) => {
        // e.preventDefault();
        fin.detail = detailInput.value;
        detailInput.value = '';
    }
    
    let finDataHandler = (e) => {
        // e.preventDefault();
        finData.push(fin);
    }
    e.preventDefault();
    typeHandler();
    costHandler();
    dateHandler();
    detailHandler();
    fin.key = Date.now();
    finDataHandler();
    

new printData({
    element : table ,
    data : fin,
    template : (item) => {
        return `
            <tr class="list_row">
                <td id="tnum">1</td>
                <td id="tcost">${item.cost} تومان</td>
                <td id="tdate">${item.date.year}/${item.date.month}/${item.date.day}</td>
                <td id="ttype" class="green red"></td>
                <td>
                    <button class="btn general-btn">نمایش</button>
                    <button class="btn delete-btn">حذف</button>
                </td>
            </tr>
        `
    }
})

})
