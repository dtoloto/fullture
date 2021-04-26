const tasks = [];


const render = () => {
  tasks.map(task => (
    console.log(task)
  ));
}


const createTask = (event) => {

  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task');
  const newTask = newTaskInput.value;

  if (!newTask) {
    return;
  }

  tasks.push({
    description: newTask,
    status: false,
  })

  render();
}


