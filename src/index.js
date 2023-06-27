
document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  const taskLists = document.getElementById('tasks')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    taskDescription = (e.target["new-task-description"].value)
    if (taskDescription) {
      createToDoList(taskDescription)
      form.reset()
    }
  });
  function createToDoList(description) {
    const listItem = document.createElement('li');
    listItem.textContent = description;
    taskLists.appendChild(listItem);
  }  
})