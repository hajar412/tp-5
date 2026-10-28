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

<<<<<<< HEAD
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
        taskInput.hidden = true;
    }
});
=======
const taskText = taskInput.value.trim();
if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete-button">x</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";

}
});
taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }
});
>>>>>>> b9c993ccbe08c1e54548fada2a158a8f58b7af1b
