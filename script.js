console.log("JS Loaded");

const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

button.addEventListener("click", function(){

    debugger; // 🔴 stops here when button is clicked

    const task = input.value;
    console.log("Task value:", task);

    if (task.trim() == "") {
        console.log("Empty task prevented");
        return;
    }

    const li = document.createElement("li");
    console.log("Created li");

    const div = document.createElement("div");
    div.classList.add("task-box");
    console.log("Created div");

    const span = document.createElement("span");
    span.innerText = task;
    console.log("Created span with text:", task);

    span.addEventListener("click", function(){
        console.log("Span clicked"); // ✅ check if click works

        debugger; // 🔴 stops when clicking task

        span.classList.toggle("completed");
        console.log("Toggled completed class");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";

    deleteBtn.addEventListener("click", function(){
        console.log("Delete clicked");

        debugger; // 🔴 stops before deleting

        li.remove();
    });

    div.appendChild(span);
    div.appendChild(deleteBtn);

    li.appendChild(div);
    list.appendChild(li);

    console.log("Task added to list");

    input.value = "";
});