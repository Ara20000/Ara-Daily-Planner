let formSubmit = document.getElementById("section-form")
let targetInput = document.getElementById("input-form")
let listItem = document.getElementById("section-ul")

function onDelete(eventObject) {
    let buttonClicked = eventObject.target;
    let child = buttonClicked.parentNode.parentNode.parentNode
    child.remove();
}

function selectButtons(){
    let collectButtons = document.querySelectorAll(".delete-btn")
    let lastButton = collectButtons[collectButtons.length - 1]
    
    lastButton.addEventListener("click", onDelete)

    let editButtons = document.querySelectorAll(".edit-btn")
    let anyButton = editButtons[editButtons.length - 1]
    
    anyButton.addEventListener("click", onEdit)
    }
   
    function onEdit(event){
        let editBtn = event.target
        let li = editBtn.parentNode.parentNode.parentNode
        let liItem = li.childNodes[0].childNodes[3].innerHTML;
        targetInput.value = liItem
        let newBtn = document.createElement("button")
        newBtn.innerHTML = `<button><i class="fa fa-check" aria-hidden="true"></i></buttton>`
        newBtn.classList.add("newEdit-btn")
        li.appendChild(newBtn)
        editBtn.disabled = true
        newBtn.addEventListener("click", reactThis)
        function reactThis(){
        let span = li.childNodes[0].childNodes[3]
        span.innerHTML = targetInput.value
        console.log(span.innerHTML);
        targetInput.value = ""
        editBtn.disabled = false
        newBtn.remove()
        }
    }

function onFormSubmit(todo) {
    let li = document.createElement('li')
    li.classList.add("todo-li")
    li.innerHTML = `<div class= "div-main-wrapper">
    <input type="checkbox" title="checkbox" class="input-checkbox" id="checkbox-input">
    <span id = "todo-span" class="span-todo"> ${todo} </span>
    <div class="div-wrapper">
        <button id="edit-btn" class="todo-btn edit-btn">edit</button>
        <button id="delete-btn" class="todo-btn delete-btn">delete</button>
    </div>
</div>`

listItem.appendChild(li)
selectButtons();

}

function onFormSubmitHandler(e) {
    e.preventDefault();

    let inputField = targetInput.value
    onFormSubmit(inputField)

    targetInput.value = " "
}

formSubmit.addEventListener("submit", onFormSubmitHandler)

let clearBtn = document.getElementById("clear-button")

function onClearBtn(e) {
    e.preventDefault();

    let inputField = targetInput.value
   targetInput.value = " "
}

clearBtn.addEventListener("click", onClearBtn)