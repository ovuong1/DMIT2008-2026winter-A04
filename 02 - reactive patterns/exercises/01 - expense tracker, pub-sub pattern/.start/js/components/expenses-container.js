// 0. this is a container component for all the expense cards
// notice how the card has no rendering logic just the structure styling and behavior of the container
// the rendering logic is handled in the renderExpenses method below
// this component will watch for changes to its "expenses" attribute and re-render the cards when it changes

// we can tell out conmponent in the index with attributes (e.g. "expenses") 

// the callbacks for when the component loads (connectCallback) and when specific attributes change (attributeChangedCallback)
// are used to trigger re-rendering of the expense cards
class ExpenseContainer extends HTMLElement {
  constructor() { // define the styling, divs, structure etc
    super();
    this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    this.container.classList.add('expense-container');
    this.shadowRoot.appendChild(this.container);
    const style = document.createElement("style");
    style.textContent = `
    .expense-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
  box-sizing: border-box;
    }`;

    this.shadowRoot.appendChild(style);
  }

  static get observedAttributes() { // youve seen the connected callback now this is the attribute changed callback
    // it reuturns an array of attributes we want to watch for changes on
    return ['expenses'];
  }

  connectedCallback() {
    this.renderExpenses();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // this callback fires anytime one of the observed attributes changes 
    if (name === 'expenses' && oldValue !== newValue) {
      this.renderExpenses();
    }
  }

  renderExpenses(){
    this.container.innerHTML='';
    const expensesAttr = this.getAttribute("expenses");
    let expenses = [];

    try {
      expenses = JSON.parse(expensesAttr);
    } catch (e) {
      console.warn("Invalid expenses attribute:", e);
    }

    if (Array.isArray(expenses)) { // if data pares to valid array render out a card
      expenses.forEach((exp) => {
           // notice how wer dont need to import a card into this file
        // we can just create an instance of it because its a custom element
        // because we defined it in expense-card.js
        const card = document.createElement("expense-card"); //
        // then create cards for eatch data item and set attributes
        card.setAttribute("title", exp.title);
        card.setAttribute("category", exp.category);
        card.setAttribute("date", exp.date);
        card.setAttribute("amount", exp.amount);
        card.setAttribute("id", exp.id);
        this.container.appendChild(card);
      });
    }
  }
}

customElements.define("expense-container", ExpenseContainer);
