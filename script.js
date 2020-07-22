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
    label.innerText = enteredTask;
    
    groupTask.appendChild(checkBox);
    groupTask.appendChild(label);

    form.appendChild(groupTask);
}



BTN_ADD_TASK.addEventListener('click', function buttonClicked () {
    let enteredTask = document.querySelector('.task');
    addTask(enteredTask.value);
});

TASK_LIST.addEventListener('click', function taskCompleted(event) {
    if(event.target.tagName === 'INPUT'){
    } else if (event.target.tagName === 'LABEL') {
    }
});



