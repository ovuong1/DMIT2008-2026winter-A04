import './components/expense-card.js'
import './components/expenses-container.js'

import theExpenses from './expense-data.js';
import expenses from './expenses.js';

const expenseContainer=document.querySelector('expense-container');

expenses.subscribe("update", (expenses) => {
    expenseContainer.setAttribute('expenses', JSON.stringify(expenses));
});

expenses.clear();
expenses.addExpense(...theExpenses);

// pre-existing: live search via pub/sub event handler
document.getElementById("searchbox").addEventListener("input", (e) => {
    const input = e.target.value;
    if(input.length > 0) {
        expenses.filterExpense(input);
    } else {
        expenses.clear();
        expenses.addExpense(...theExpenses);
    }
});

// pre-existing: form submission via pub/sub event handler
document.getElementById("expense-form-add").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const date = document.getElementById("date").value;
    const amount = document.getElementById("amount").value;

    const submitButton = document.getElementById("submitter");
    // check button text to determine add vs. edit, just like before
    if (submitButton.innerText === "Add Expense") {
        if(title && category && date && amount) {
            expenses.addExpense({title, category, date, amount});
            e.target.reset();
        }
    } else { // allow editing to occur otherwise
        // if we're in this branch of logic, it means submit button DOESN'T say "add expense" 
        const id = Number(document.getElementById("expense-id").value)
        // personal nitpick: I'll leave ID as a separate term so there's consistency between removeExpense and editExpense inputs
        //   (see: expenses.js, expenses object)
        expenses.editExpense(id, { title, category, date, amount })
        // then, reset state of button after submit
        e.target.reset();
        submitButton.innerText = "Add Expense";
    }
});

// Step 3: add listener to our custom delete event
expenseContainer.addEventListener("expense-delete", (e) => {
    const id = Number(e.detail.id);
    console.log("Delete event received for ID:", id);
});
