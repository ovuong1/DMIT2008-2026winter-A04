/*
Enter JS here

HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

let topicList = document.querySelector('.topics-list');
let newTopicForm = document.querySelector('.new-topic-form')

// 5. function to add topic to page
const addTopicToPage = (topicName, topicListElement) => {
    // 6. create new list item element
    let newTopicElement = `<li class="list-group-item">
    ${topicName}
    </li>`
    topicListElement.innerHTML += newTopicElement
    
}

// 2. add event listener
newTopicForm.addEventListener(
    "submit", 
    (event) => { 
        event.preventDefault()
        // 3. get the value from the form input
        let topicInput = event.target.elements["new-topic"]
        let newTopic = topicInput.value
        console.log(newTopic)
        //4. validation - make sure its not empty
        if (newTopic === "") {
            topicInput.classList.add("is-invalid")
        }
        else {
            topicInput.classList.remove("is-invalid")
            
     }
    addTopicToPage(newTopic, topicList)
})

