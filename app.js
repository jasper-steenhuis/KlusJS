/**
 * function that appends task to task list
 */
function appendToList() {
    let input = document.getElementById("task-name-input");
    if(input.value != ""){
        let taskList = document.getElementById("task-list");
        let node = document.createElement("LI");
        let textNode = document.createTextNode(input.value + " ");
        node.appendChild(textNode);
    
        addButtonToTask(node);
        taskList.appendChild(node);
    
        input.value = " ";
    }else{
        alert("Task name must not be empty!");
    }
    

}
function addButtonToTask(task){
    let buttonElement = document.createElement("BUTTON");
    buttonElement.innerHTML = "-";

    task.appendChild(buttonElement);
    buttonElement.onclick = function() {
        task.style.setProperty('text-decoration', 'line-through');
    }
}