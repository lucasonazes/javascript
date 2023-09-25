// Selecting HTML elements
const addTask = document.querySelector('.add-task');
const btnAddTask = document.querySelector('.btn-add-task');
const tasks = document.querySelector('.tasks');
const hrDiv = document.querySelector('.hr-div');
let hr;


function createLi() {
    const li = document.createElement('li');
    return li;
}

addTask.addEventListener('keypress', function(e){
    if(e.keyCode === 13) {
        if(!addTask.value) return;
        createTask(addTask.value);
    }
})

function addHr() {
    if(!hr) {
        hr = document.createElement('hr');
        hrDiv.appendChild(hr);
        return hr;
    }
}
function clearInput() {
    addTask.value = '';
    addTask.focus();
}

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('X', '');
        taskList.push(taskText);
    }
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
}

function createTask(inputText) {
    const li = createLi();
    li.innerHTML = inputText;
    tasks.appendChild(li);
    clearInput();
    addHr();
    createDeleteBtn(li);
    saveTasks();
}

function createDeleteBtn(li) {
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.setAttribute('title', 'Apagar essa tarefa');
    li.appendChild(deleteBtn);
}

function addSavedtasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for(let task of taskList) {
        createTask(task);
    }
}
addSavedtasks();

// Tracking events
btnAddTask.addEventListener('click', function(e){
    if(!addTask.value) return;
    createTask(addTask.value);
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('delete-btn')) {
        el.parentElement.remove();
        saveTasks();
    }
})