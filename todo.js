function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;
  
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(taskContent);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";
}
