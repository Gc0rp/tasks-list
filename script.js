const BTN_ADD_TASK = document.querySelector('.js-btn-add-task');


function addTask(enteredTask){

    let groupTask = document.createElement('div');
    let form = document.querySelector('.tasks-list');
    
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', enteredTask);


    let label = document.createElement('label');

    label.setAttribute('for', enteredTask);
    label.innerText = enteredTask;
    
    groupTask.appendChild(checkBox);
    groupTask.appendChild(label);

    console.log(groupTask);
    form.appendChild(groupTask);

}



BTN_ADD_TASK.addEventListener('click', function buttonClicked(){
    let enteredTask = document.querySelector('.task');
    addTask(enteredTask.value);
});
