/**
 * function that appends task to task list
 */
var tasks = [];
function appendToList() {
    let input = document.getElementById("task-name-input");
    if(input.value != ""){
        let taskList = document.getElementById("task-list");
        let node = document.createElement("LI");
        let textNode = document.createTextNode(input.value + " ");
        node.appendChild(textNode);
        var taskObject = {desc: textNode, markup: node, priority: true};

        addButtonToTask(taskObject);
        taskList.appendChild(node);
    
        tasks.push(taskObject);
        input.value = " ";
        console.log(taskObject.desc.textContent + " " + taskObject.priority);
    }else{
        alert("Task name must not be empty!");
    }
    

}
function addButtonToTask(task){
    let buttonElement = document.createElement("BUTTON");
    buttonElement.innerHTML = "-";

    task.markup.appendChild(buttonElement);
    buttonElement.onclick = function() {
        task.markup.style.setProperty('text-decoration', 'line-through');
        task.priority = false;
        sortToBottom(task);
    }
}
function sortToBottom(task){
    console.log(task.desc.textContent + " " + task.priority);
}