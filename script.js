const BTN_ADD_TASK = document.querySelector('.js-btn-add-task');
const TASK_LIST = document.querySelector('.tasks-list');

var todoTasks = [];

function addTask(enteredTask){
    let groupTask = document.createElement('div');
    groupTask.setAttribute('class', 'task');
    
    let form = document.querySelector('.tasks-list');

    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', enteredTask);

    let label = document.createElement('label');
    label.setAttribute('for', enteredTask);
    label.setAttribute('id', 'lbl-' + enteredTask);
    label.innerText = enteredTask;
    
    groupTask.appendChild(checkBox);
    groupTask.appendChild(label);

    todoTasks.push(enteredTask);
    form.appendChild(groupTask);
}

function removeTask(task){

    todoTasks = todoTasks.filter(function removeTask(currTask) {
        if(currTask !== task){ return task; }
    });

    console.log(todoTasks);


    console.log(task);
    var removedTask = document.getElementById('lbl-' + task);


    console.log(removedTask);

    var removeCheckbox = document.querySelector('.' + task);

    removeCheckbox.cl

    removedTask.innerHTML = "<del>" + removedTask.innerText + "</del>";
}


BTN_ADD_TASK.addEventListener('click', function buttonClicked () {
    let enteredTask = document.querySelector('.task');
    addTask(enteredTask.value);
});

TASK_LIST.addEventListener('click', function taskCompleted(event) {
    console.log(event.target);
    if(event.target.tagName === 'INPUT'){
        removeTask(event.target.className);
    } else if (event.target.tagName === 'LABEL') {
    }
});