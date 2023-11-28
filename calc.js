
let incomeAmount = 0;
let expenseAmount = 0;
let balance = 0;

function addIncome() {
    const type = document.getElementById('type');
    const budget = document.getElementById('budget');

    const income = {
        type: type.value,
        income: parseFloat(budget.value)
    };

    if (type.value === '' || isNaN(income.income) || income.income <= 0) {
        alert('Please enter valid values for income');
    } else {
        incomeAmount+= income.income;
        balance+= income.income;
        localStorage.setItem('BALANCE', JSON.stringify(balance));
        localStorage.setItem('BUDGET', JSON.stringify(incomeAmount));
        localStorage.setItem('EXPENSE', JSON.stringify(expenseAmount));

//     let display1 = document.getElementById('b1');
//     let display2 = document.getElementById('b2');
//     let display3 = document.getElementById('b3');
//     balance = JSON.parse(localStorage.getItem('BALANCE'));
//     incomeAmount =JSON.parse(localStorage.getItem('BUDGET'));
//     expenseAmount =JSON.parse(localStorage.getItem('EXPENSE'));
   

//     display1.innerHTML = `<h3>₹${Number(incomeAmount).toFixed(2)}</h3>`;
//     display2.innerHTML = `<h3>₹${Number(expenseAmount).toFixed(2)}</h3>`;
//    display3.innerHTML = `<h3>₹${Number(balance).toFixed(2)}</h3>`;
        alert('Income Added Successfully');
    }
}

function addExpense() {
    const type1 = document.getElementById('type1');
    const budget1 = document.getElementById('budget1');

    const expense = {
        type: type1.value,
        expense: parseFloat(budget1.value)
    };

    if (type1.value === '' || isNaN(expense.expense)) {
        alert('Please enter valid values for expense');
    } else {
        let balance1 = JSON.parse(localStorage.getItem('BALANCE'));

        if (expense.expense <= balance1) {
            let expenseAmount = JSON.parse(localStorage.getItem('EXPENSE'));
            expenseAmount += expense.expense;
            balance1 -= expense.expense;

            localStorage.setItem('BALANCE', JSON.stringify(balance1));
            localStorage.setItem('EXPENSE', JSON.stringify(expenseAmount));

            alert('Expense Added Successfully');

            // Update the display elements
           
        } else {
            alert('Insufficient balance');
        }
    }
}

// Function to update display elements
function updateDisplayElements() {
    const updatedIncome = JSON.parse(localStorage.getItem('BUDGET'));
    const updatedExpense = JSON.parse(localStorage.getItem('EXPENSE'));
    const updatedBalance = JSON.parse(localStorage.getItem('BALANCE'));

    // Update the HTML elements with the updated values
    document.getElementById('b1').innerHTML = `<h3>₹${Number(updatedIncome).toFixed(2)}</h3>`;
    document.getElementById('b2').innerHTML = `<h3>₹${Number(updatedExpense).toFixed(2)}</h3>`;
    document.getElementById('b3').innerHTML = `<h3>₹${Number(updatedBalance).toFixed(2)}</h3>`;
}


   




function clearAll() {
    localStorage.clear();
}

function logOut() {
   
    window.location ='./index.html';
}
