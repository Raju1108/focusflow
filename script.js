let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

function renderTasks(){

taskList.innerHTML = "";

tasks.forEach((task,index)=>{

let li = document.createElement("li");

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<span onclick="toggleTask(${index})">${task.text}</span>
<button class="delete-btn" onclick="deleteTask(${index})">X</button>
`;

taskList.appendChild(li);

});

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function addTask(){

const taskInput = document.getElementById("taskInput");

if(taskInput.value === ""){
alert("Please enter a task");
return;
}

tasks.push({
text:taskInput.value,
completed:false
});

taskInput.value="";

renderTasks();

}

function toggleTask(index){

tasks[index].completed = !tasks[index].completed;

renderTasks();

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

renderTasks();