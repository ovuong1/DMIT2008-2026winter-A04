//Instruction On expense-tracker-code-explained.md
import theExpenses from "./expense-data.js";

//2. select the container elemnet thatour cards will be nested in 
const expenseContainer = document.getElementById("expense-container");

//3. redner out the data as a agrid of cards
function renderExpenses(expenses) {
    const expenseList = document.getElementById("expense-list");
    expenseContainer.innerHTML = "";

     expenses.forEach((expense) => {
    expenseContainer.innerHTML += `
      <div class="card" id="${expense.id}">
        <div class="header">
          <div>
            <div class="title">${expense.title}</div>
            <div class="meta category">${expense.category}</div>
          </div>
          <div class="amount">${expense.amount}</div>
        </div>
        <div class="meta date">${expense.date}</div>
        <div class="actions">
          <button class="edit-btn" id=${expense.id}>Edit</button>
          <button class="delete-btn" id=${expense.id}>Delete</button>
        </div>
      </div>`;
  });
}
// 4. render the results 
renderExpenses(theExpenses);