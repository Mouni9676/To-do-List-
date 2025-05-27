const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value;
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
 
  const li = document.createElement('li');
  li.textContent = taskText;
  
 
  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.onclick = function() {
    li.classList.toggle('completed');
  };
  
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    taskList.removeChild(li);
  };
  
 
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  
  taskList.appendChild(li);
  
 
  taskInput.value = '';
}