// Retrieve other required elements
let expenseName = document.getElementById("expense-name");
let expenseAmount = document.getElementById("expense-amount");
let expenseDate = document.getElementById("expense-date");
let expTab = document.getElementById("expense-table");
let btn = document.getElementById("addExp");
let clearBtn = document.getElementById("clear");

// Empty array to hold expenses
let expenses = [];

// getting expenses from local storage
const mylocalStorage = localStorage.getItem("expenses");
const expensesInLocalStorage =JSON.parse(mylocalStorage);
//checking if items are in local storage
if (expensesInLocalStorage) {
    expenses = expensesInLocalStorage
    populate(expenses);
}

// Function to handle button click
function handleButtonClick() {

    // Retrieve expense details
    let expense = expenseName.value;
    let amount = expenseAmount.value;
    let date = expenseDate.value;

    // Create new expense object
    let newExpense = { expense: expense, amount: amount, date: date };
    expenses.push(newExpense);

    // Clear input fields
    expenseName.value = "";
    expenseAmount.value = "";
    expenseDate.value = "";

     //convert expenses array to string JSON.stringify
     let expensesString = JSON.stringify(expenses);
     localStorage.setItem("expenses", expensesString);
     populate(expenses);
}

// Function to populate the expense table
function populate(update) {
    let table = "";

    for (let i = 0; i < update.length; i++) {
        let expense = update[i];

        table += `<tr>
        <td>${expense.expense}</td>
        <td>${expense.amount}</td>
        <td>${expense.date}</td>
        <td><i class="fas fa-trash-alt Ogee " onclick="del(${i})"></i></td>
        </tr>`;
    }
    expTab.innerHTML = table;
}

function clean() {
    localStorage.clear();
    expenses = [];
    populate(expenses);
}

function del(index){
    let confirmation = `Are you sure you want to Delete this?
                    You no fit change am ohhh Otilo..`
    const confamDelete = window.confirm(confirmation)
    if(confamDelete){
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    populate(expenses);}
}
// Add event listener to the button for click event
btn.addEventListener("click", handleButtonClick);
clearBtn.addEventListener("dblclick", clean)

