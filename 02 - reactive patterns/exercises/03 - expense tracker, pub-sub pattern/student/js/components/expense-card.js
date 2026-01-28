// 0. this is a componet of one of the expense cards
// weremaking a custom HTML element using the web components API
// notice how this component has no behavior just structure and styling
// it just has structure and styling its basicly a template for each expense card


class ExpenseCard extends HTMLElement {
  constructor() { // things we want to happen when creating an instance of this elemnent
    super(); // first call  the contructor from the parent class
    this.attachShadow({ mode: "open" }); // then create a show DOM root 
    //"open" means we can access the shadow DOM from outside the component
    //"closed" means we cant access the shadow DOM from outside the component

    // if we want we can apply the cusom styling to our component here
    // 
    const style = document.createElement("style");
    style.textContent = `
    .card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex:1 1 300px;
}
.header {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: bold;
  font-size: 1.1rem;
}
.amount {
  color: green;
  font-weight: bold;
}
.meta {
  font-size: 0.9rem;
  color: #666;
}
.actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 10px;
}
.actions button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
}
.edit-btn {
  background-color: #3b82f6;
  color: white;
}
.delete-btn {
  background-color: #ef4444;
  color: white;
}`;

    // notice how there are no values in line here just identifiable classes/ ids 
    this.shadowRoot.innerHTML = `
      <div class="card" id="">
        <div class="header">
          <div>
            <div class="title"></div>
            <div class="meta category"></div>
          </div>
          <div class="amount"></div>
        </div>
        <div class="meta date"></div>
        <div class="actions">
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </div>
      </div>
    `;
        this.shadowRoot.appendChild(style);
  }
  connectedCallback() { // this is a callbakc that fires first
    // then the connectedcallback fires anytime an instance of this componect is attached to the DOM
    // even reording a list or removing and reading the instance triggers this callback
    this.shadowRoot.querySelector(".title").textContent =
    // kind of like a ternary operator
      this.getAttribute("title") || "No title";
    this.shadowRoot.querySelector(".category").textContent =
      "Category: " + (this.getAttribute("category") || "");
    this.shadowRoot.querySelector(".date").textContent =
      this.getAttribute("date") || "";
    this.shadowRoot.querySelector(".amount").textContent =
      "$" + parseFloat(this.getAttribute("amount") || 0).toFixed(2);
    this.shadowRoot.querySelector(".card").setAttribute("id", Number(this.getAttribute("id")) || new Date().getTime());
  }
}
// finally export the custom elemnet so it can be accessed natively
customElements.define("expense-card", ExpenseCard);
