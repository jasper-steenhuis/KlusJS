/**
 * function that appends task to task list
 */
var tasks = [];
function createObjectAndAppendHTML() {
    let input = document.getElementById("task-name-input");
    if (input.value != "") {
        var taskObject = { desc: input.value, markup: " ", priority: false };
        tasks.push(taskObject);
        input.value = " ";
        appendToHTML(taskObject);
        addButtonToTask(taskObject);
    } else {
        alert("Task name must not be empty!");
    }
}
function addButtonToTask(task) {
    let buttonElement = document.createElement("BUTTON");
    buttonElement.innerHTML = "-";
    task.markup.appendChild(buttonElement);
    buttonElement.onclick = function () {
        task.markup.style.setProperty('text-decoration', 'line-through');
        removeFromList(task);
    }
}
function removeFromList(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
    }
    console.log(tasks);
}
function appendToHTML(task) {
    let taskListHTML = document.getElementById("task-list");
    task.markup = document.createElement("LI");
    let textNode = document.createTextNode(task.desc);
    task.markup.appendChild(textNode);
    taskListHTML.appendChild(task.markup);
}