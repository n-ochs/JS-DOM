/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/
let button = document.getElementById('add-button');
let todoList = document.getElementById('todo-list');
let input = document.getElementById('description');
let listItems = document.querySelectorAll('li');

button.addEventListener('click', function () {
    let newItem = input.value;
    let newListItem = document.createElement('li'); //creates the list item element
    newListItem.innerText = newItem;
    newListItem.addEventListener('click', function() { //adds the ability to click on the item and put a line through it
        this.style.textDecoration = 'line-through'
    })
    todoList.appendChild(newListItem); //adds item to the list
    input.value = ""; //resets the input
})