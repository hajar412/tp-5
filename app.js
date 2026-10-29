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
