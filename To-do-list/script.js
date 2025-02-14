document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    renderTask(task);
  });

  addTaskButton.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText === "") return alert("ENTER SOME VALUE");
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = ""; //clearing the input
    // console.log(tasks);
  });

  function renderTask(task) {
    // console.log(task);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `<span>${task.text}</span>
    <button>Delete</button>`;
    li.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") {
        console.log("delete");
        return;
      }
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });
    li.querySelector("button").addEventListener("click", function (e) {
      e.stopPropagation(); // prevent from toggle from firing
      tasks = tasks.filter((t) => {
        t.id !== tasks.id;
      });
      li.remove();
      saveTask();
    });
    todoList.appendChild(li);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
