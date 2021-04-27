const tasks = [];


const render = () => {
  const divRow = document.querySelector('.row');
  divRow.innerHTML = '';
  // <div class="row"></div>

  tasks.map(task => {
    const divCol = document.createElement('div');
    divCol.classList.add('col');
    // <div class="col"></div>

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    // <div class="card"></div>

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    // <input type="checkbox"/>

    const spanTask = document.createElement('span');
    spanTask.classList.add('task');
    // <span class="taks"></span>

    const spanDelete = document.createElement('span');
    spanDelete.classList.add('delete');
    // <span class="delete"></span>



    spanTask.innerHTML = task.description;
    // <span class="taks"> TAREFA 1 </span>
    spanDelete.innerHTML = 'X';
    // <span class="delete">X</span>

    divCard.appendChild(input);
    // <div class="card">
    //   <input type="checkbox"/>
    // </div>
    divCard.appendChild(spanTask);
    // <div class="card">
    //   <input type="checkbox"/>
    //   <span class="taks"> TAREFA 1 </span>
    // </div>
    divCard.appendChild(spanDelete);
    // <div class="card">
    //   <input type="checkbox"/>
    //   <span class="taks"> TAREFA 1 </span>
    //   <span class="delete">X</span>
    // </div>

    divCol.appendChild(divCard);
    // <div class="col">
    // <div class="card">
    //   <input type="checkbox"/>
    //   <span class="taks"> TAREFA 1 </span>
    //   <span class="delete">X</span>
    // </div>
    // </div>

    divRow.appendChild(divCol);
    // <div class="row">
    //    <div class="col">
    // <div class="card">
    //   <input type="checkbox"/>
    //   <span class="taks"> TAREFA 1 </span>
    //   <span class="delete">X</span>
    // </div>
    // </div>

    // <div class="col">
    // <div class="card">
    //   <input type="checkbox"/>
    //   <span class="taks"> TAREFA 1 </span>
    //   <span class="delete">X</span>
    // </div>
    // </div>

    //    <div class="col">
    //        <div class="card">
    //          <input type="checkbox"/>
    //          <span class="taks"> TAREFA 1 </span>
    //          <span class="delete">X</span>
    //        </div>
    //    </div>
    // </div>
  });
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
    id: Date.now()
  });

  localStorage.setItem('tarefas', JSON.stringify(tasks));

  render();
}


const initialize = () => {
  const localTasks = localStorage.getItem('tarefas');
  if (!localTasks) {
    return;
  }
  const parsedTasks = JSON.parse(localTasks);
  parsedTasks.map(item => tasks.push(item));
  render();
}

initialize();


