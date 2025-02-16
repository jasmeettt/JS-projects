document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskBtn.addEventListener("click", function () {
    const taskText = todoInput.value.trim();
    if (taskText === "") return alert("Please select a task");

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    saveTask();
    renderTasks(newTask);
    todoInput.value = "";
    // console.log(tasks);
  });

  function renderTasks(task) {
    // console.log(task.text);
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;

    li.addEventListener("click", function (e) {
      // console.log("hello");
      // console.log(e.target.tagName);
      if (e.target.tagName == "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector("button").addEventListener("click", function (e) {
      e.stopPropagation();
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTask();
    });

    todoList.appendChild(li);
  }
  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
