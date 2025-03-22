function addTask() {
   let taskInput = document.getElementById("taskInput");
   let taskText = taskInput.value.trim();
   if (taskText === "") return;

   let li = document.createElement("li");
   li.textContent = taskText;
   
   let removeBtn = document.createElement("button");
   removeBtn.textContent = "Remove";
   removeBtn.classList.add("remove-btn");
   removeBtn.onclick = function() {
       li.remove();
   };
   
   li.appendChild(removeBtn);
   document.getElementById("taskList").appendChild(li);
   taskInput.value = "";
}