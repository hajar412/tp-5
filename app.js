
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

(() => {
  let seconds = 25 * 60;
  let interval = null;
  const display = document.getElementById("timer-display");

  function render() {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    display.textContent = `${m}:${s}`;
  }

  function stop() {
    clearInterval(interval);
    interval = null;
  }

  document.getElementById("timer-start").onclick = () => {
    if (interval) return;
    interval = setInterval(() => {
      seconds--;
      render();
      if (seconds <= 0) {
        stop();
        alert("Temps écoulé !");
      }
    }, 1000);
  };

  document.getElementById("timer-pause").onclick = stop;

  document.getElementById("timer-reset").onclick = () => {
    stop();
    seconds = 25 * 60;
    render();
  };
})();
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
