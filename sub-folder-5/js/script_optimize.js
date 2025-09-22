// ------------------ Helpers ------------------

// Get formatted current date
function getFormattedDate() {
  const date = new Date();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${daysOfWeek[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}

// Get formatted current time
function getFormattedTime() {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());
}

// Update numeric counter
function updateCounter(selector, increment = 1) {
  const el = document.querySelector(selector);
  const newValue = parseInt(el.innerText) + increment;
  el.innerText = newValue;
}

// Add history log
function addHistoryLog(taskTitle) {
  const historySection = document.querySelector(".activity-log");
  const newHistory = document.createElement("small");
  newHistory.innerHTML = `You have completed the task <b>${taskTitle}</b> at ${getFormattedTime()}`;
  historySection.appendChild(newHistory);
}

// ------------------ Init ------------------

// Insert current date
document.querySelector("#task-date").innerText = getFormattedDate();

// Clear history
document.querySelector("#clearBtn").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".activity-log").innerHTML = "";
});

// Background color changer
document.querySelector("#bgColorBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const colors = ["red", "green", "pink", "yellow", "black", "gray", "skyblue", "purple", "violet", "tomato"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// ------------------ Task Handling ------------------

let completedCount = 0;
const tasks = document.querySelectorAll(".completed");
const totalTasks = document.querySelectorAll(".card-task").length;

tasks.forEach((taskBtn) => {
  taskBtn.addEventListener("click", (e) => {
    if (taskBtn.classList.contains("disabled")) return;

    alert("Board updated successfully!!");
    taskBtn.classList.add("disabled");
    taskBtn.style.backgroundColor = "gray";

    completedCount++;
    if (completedCount === totalTasks) {
      alert("Congrats!! You have completed all the current tasks 🎉");
    }

    updateCounter("#task-assign-count");
    updateCounter("#task-count");

    const taskCard = e.target.closest(".card-task");
    const taskTitle = taskCard.querySelector(".task-title").innerText;
    addHistoryLog(taskTitle);
  });
});
