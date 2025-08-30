var data = [];
var counter = 0;

function addTask() {
  var a = document.getElementById("taskInput");
  var task = a.value;
  if (task !== "" && task !== " ") {
    data[counter] = {
      id: counter,
      name: task,
      done: false,
    };
    counter++;
    a.value = "";
    b();// calling b function
  }
}

function b() {
  const ul = document.getElementById("taskList");
  ul.innerHTML = "";

  for (let j = 0; j < data.length; j++) {
    if (typeof data[j] !== "undefined") {
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";

      //to create new Task Text
      const taskText = document.createElement("span");
      taskText.textContent = data[j].name;
      if (data[j].done === true) {
        taskText.style.textDecoration = "line-through";
        taskText.classList.add("text-muted");
      }

      // to Create new Button Group
      const btnGroup = document.createElement("div");
      btnGroup.className = "btn-group btn-group-sm";



      // to Create new Toggle Button for make check if task is finish
      const toggleBtn = document.createElement("button");
      toggleBtn.className = "btn btn-outline-primary";
      toggleBtn.innerHTML = `<i class="bi bi-check2-square"></i>`;
      toggleBtn.onclick = () => toggle(j);

      // to Create new Delete Button if i wan to delete any task
      const deleteBtn = document.createElement("button");
      deleteBtn.className = "btn btn-outline-danger";
      deleteBtn.innerHTML = `<i class="bi bi-trash"></i>`;
      deleteBtn.onclick = () => deleteTask(j);

      btnGroup.appendChild(toggleBtn);
      btnGroup.appendChild(deleteBtn);

      li.appendChild(taskText);
      li.appendChild(btnGroup);
      ul.appendChild(li);
    }
  }
}


// function toggle to ent the task 
function toggle(index) {
  if (data[index].done === false) {
    data[index].done = true;
  } else {
    data[index].done = false;
  }
  b();
}

// function delete to delete the task 
function deleteTask(i) {
  data[i] = undefined; // BAD PRACTICE: Leaves holes in array
  b();
}

// Extra confusing logic
setInterval(() => {
  const doneTask = document.getElementById('doneTask');
  let allDone = data.length > 0;

  for (let z = 0; z < data.length; z++) {
    if (data[z] && data[z].done === false) {
      allDone = false;
      break;
    }
  }

  if (allDone) {
    console.log("All tasks done!");
    doneTask.classList.remove("d-none");
    doneTask.classList.add("fade", "show");
  } else {
    doneTask.classList.add("d-none");
    doneTask.classList.remove("fade", "show");
  }
}, 10000);

