const taskBtn = document.getElementById("add-task-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");

// ---------- Tâches ----------
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    taskBtn.click();
  }
});

taskBtn.addEventListener("click", function () {
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

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    event.target.parentElement.remove();
    updateCount();
  }
});

function updateCount() {
  const count = taskList.children.length;
  taskCount.textContent = count + (count > 1 ? " tasks" : " task");
}

// ---------- Minuteur Pomodoro ----------
const WORK_TIME = 25 * 60;
let timeLeft = WORK_TIME;
let timerId = null;

const timerDisplay = document.getElementById("timer-display");
const startBtn = document.getElementById("start-timer-button");
const resetBtn = document.getElementById("reset-timer-button");

function updateDisplay() {
  const m = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  timerDisplay.textContent = m + ":" + s;
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

updateDisplay();

startBtn.addEventListener("click", function () {
  // Si le minuteur tourne : pause
  if (timerId) {
    stopTimer();
    startBtn.textContent = timeLeft === WORK_TIME ? "Start" : "Resume";
    startBtn.classList.remove("running");
    return;
  }

  // Sinon : démarrer / reprendre
  startBtn.textContent = "Pause";
  startBtn.classList.add("running");
  timerId = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      stopTimer();
      startBtn.textContent = "Start";
      startBtn.classList.remove("running");
      timeLeft = WORK_TIME;
      updateDisplay();
    }
  }, 1000);
});

resetBtn.addEventListener("click", function () {
  stopTimer();
  timeLeft = WORK_TIME;
  updateDisplay();
  startBtn.textContent = "Start";
  startBtn.classList.remove("running");
});