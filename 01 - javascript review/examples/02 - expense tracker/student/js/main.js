//Instruction On expense-tracker-code-explained.md
import theExpenses from "./expense-data.js";

//2. select the container element that our cards will be nested in 
const expenseContainer = document.getElementById("expense-container");

//3. render out the data as a grid of cards
function renderExpenses(expenses) {
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
    
//5. implement add/edit behavior
document
  .getElementById("expense-form-add")
  .addEventListener(
    "submit", // the form event im looking for
    function (event) {
      event.preventDefault(); // prevent the default behavior of the form
      const title = document.getElementById("title").value;
      const amount = parseFloat(document.getElementById("amount").value);
        const date = document.getElementById("date").value;
        const category = document.getElementById("category").value;
        // we're going to write this behavior to be reusable for edit later
        // because we can use the inline text on the button to determine whether it's an add or edit
        if(document.getElementById("submiter").innerText == "Add Expense")
        {
            if(title && category && date && !isNaN(amount))
            {
                //create a new expense object we'll be adding to the grid of cards
                const newExpense = {
                    id: theExpenses.length + 1,
                    title,
                   amount,
                    date,
                    category,
                };
                theExpenses.push(newExpense);
                renderExpenses(theExpenses);
                event.target.reset();
            } else {
                alert("Please fill in all fields correctly.");
            }
        } else {
            // non obvious if the text isnt "Add Expense" then it must be "Edit Expense"
            const expenseId = parseInt(document.getElementById("expense-id").value);
            const expenseToEdit = theExpenses.find(
                (expense) => expense.id === expenseId);
           if(expenseToEdit) // simple null check 
            {
                expenseToEdit.title = title;
                expenseToEdit.amount = amount;
                expenseToEdit.date = date;
                expenseToEdit.category = category;
                this.reset();
                renderExpenses(theExpenses); // re render data into cards 
            }
        }
    });

    // 6. implemnet live search/filtering
    document    
        .getElementById("searchbox")
        .addEventListener(
            "input",
            function(event) {
                const searchTerm = event.target.value.toLowerCase();
                const filteredExpenses = theExpenses.filter(
                    // apply a conditional expresstion to every element and return the ones that match
                    (expense) => expense.title.toLowerCase().includes(searchTerm)
                );
                renderExpenses(filteredExpenses);
            } 
        );