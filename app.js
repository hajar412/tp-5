
const taskBtn = document.getElementById("add-task-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

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
        const li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox">
            <span></span>
            <button class="delete-button">x</button>
        `;

        li.querySelector("span").textContent = taskText;

        taskList.appendChild(li);
        taskInput.value = "";
        taskInput.hidden = true;

        updateCount();
    }
});

taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
        updateCount();
    }
});

// Mettre à jour le nombre de tâches
function updateCount() {
    const count = taskList.children.length;

    taskCount.textContent =
        count + (count > 1 ? " tasks" : " task");
}
