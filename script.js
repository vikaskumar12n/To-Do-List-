document.getElementById("addTask").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();
  
    if (taskValue === "") {
      alert("Please enter a task!");
      return;
    }
  
    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      ${taskValue}
      <button class="delete">X</button>
    `;
  
    taskList.appendChild(newTask);
    taskInput.value = "";
  
    newTask.querySelector(".delete").addEventListener("click", function () {
      taskList.removeChild(newTask);
    });
  });
  