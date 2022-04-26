//Query Selectors
let inputBox = document.querySelector('.input_box');
let incomeBtn = inputBox.querySelector('#income');
let outcomeBtn = inputBox.querySelector('#outcome');
let inputValue = inputBox.querySelector('#ffi1');
let submitBtn = inputBox.querySelector('.sub-btn');
let day = inputBox.querySelector('#d-day');
let month = inputBox.querySelector('#d-month');
let year = inputBox.querySelector('#d-year');
let detailInput = inputBox.querySelector('#detail_box');
let table = document.getElementById("table").querySelector('tbody');
let totalIn = document.querySelector('#totalIn');
let totalOut = document.querySelector('#totalOut');


//JS

let finData = []
let xValues , inValue, iochart;
// incomeBtn.addEventListener('click' , function(e) {
//     incomeBtn.setAttribute('checked', '');
//     outcomeBtn.removeAttribute('checked', '');
// })

// outcomeBtn.addEventListener('click' , function(e) {
//     outcomeBtn.setAttribute('checked','');
//     incomeBtn.removeAttribute('checked', '');
// })



submitBtn.addEventListener('click' , function(e) {
    let radioInput = inputBox.querySelector('input[type=radio][name=radio]:checked');
    let fin = {} //type,cost,date,detail
    let typeHandler = (e) => {
        // e.preventDefault();
        fin.type = radioInput.value;
    }
    let valueHandler = (e) => {
        // e.preventDefault();
        fin.value = parseInt(inputValue.value);
        inputValue.value = '';
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
    valueHandler();
    dateHandler();
    detailHandler();

    fin.key = Date.now();
    finDataHandler();
    

    new printData({
        element : table ,
        data : fin,
        template : (item) => {
            return `
                <tr id="${item.id}" class="list_row">
                    <td id="tnum">${finData.length}</td>
                    <td id="tvalue">${item.value} تومان</td>
                    <td id="tdate">${item.date.year}/${item.date.month}/${item.date.day}</td>
                    <td id="ttype" class="${item.type === "income" ? "green" : "red" }">${item.type === "income" ? "درآمد" : "هزینه"}</td>
                    <td>
                        <button class="btn general-btn">نمایش</button>
                        <button class="btn delete-btn">حذف</button>
                    </td>
                </tr>
            `
        }
    })

    totalIn.innerHTML = `${finData.filter(item => item.type === "income").map(item => item.value).reduce((total, num ) => total + num, 0)}`
    totalOut.innerHTML = `${finData.filter(item => item.type === "outcome").map(item => item.value).reduce((total, num ) => total + num, 0)}`

    // let xValues = finData.map(item => item.date.month)
    // let inValue = finData.filter(item=> item.type === "income").map(item => item.value);
    
    
    // iochart = new Chart("ioChart", {
    // type: "line",
    // data:{
    //         labels : xValues,
    //         datasets: [{
    //             borderColor : "green",
    //             fill : false,
    //             data: inValue
    //         }]
    //     } ,
    //     options: {}
    //   });
})