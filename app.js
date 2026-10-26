const taskBtn = document.getElementById("add-task-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        taskBtn.click();
    }
});

taskBtn.addEventListener("click", function() {
    if (taskInput.hidden) {
        taskInput.hidden = false;
        taskInput.focus();
        return;
    }

    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskInput.hidden = true;
    }
});
