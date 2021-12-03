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
        appendToHTML(taskObject, "todo");
    } else {
        alert("Task name must not be empty!");
    }
}
function addButtonToTask(task) {
    let doneButton = document.createElement("INPUT");
    var checked = false;
    doneButton.setAttribute("type", "checkbox");
    doneButton.innerHTML = "✓";
    task.markup.appendChild(doneButton);
    doneButton.onclick = function () {
        checked = !checked;
        if (checked) {
            task.markup.style.setProperty('text-decoration', 'line-through');
            removeFromHTML(task,"todo");

        } else {
            task.markup.style.setProperty('text-decoration', 'none');
            removeFromHTML(task,"done");
        }

    }
}
function appendToHTML(task, destination) {

    let taskListHTML = document.getElementById("task-list");
    let doneListHTML = document.getElementById("accomplished-tasks-list");
    task.markup = document.createElement("LI");
    let textNode = document.createTextNode(task.desc);
    addButtonToTask(task);
    task.markup.appendChild(textNode);
    if (destination == "todo") {
        taskListHTML.appendChild(task.markup);
    }
    if (destination == "done") {
        doneListHTML.appendChild(task.markup);
    }
}
function removeFromHTML(task, destination) {
    let taskListHTML = document.getElementById("task-list");
    let doneListHTML = document.getElementById("accomplished-tasks-list");

    if (destination == "todo") {
        taskListHTML.removeChild(task.markup);
        appendToHTML(task, "done");
    }
    if (destination == "done") {
        doneListHTML.remove(task.markup);
appendToHTML(task, "todo");    }
}