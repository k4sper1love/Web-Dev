const container = document.getElementById('list');

function createTask() {
    let newTask = document.createElement('div');
    newTask.innerHTML = `
    <div class="right-part">
        <input type="checkbox" class="checkbox">
        <div class="task">${getValue()}</div>
    </div>
    <div class="delete"">
        <img class = "delete-img" src="img/delete.png">
    </div>
    `;
    newTask.classList.add('elem');
    if(container.hasChildNodes){
        container.insertBefore(newTask, container.firstChild);
    } else {
        container.appendChild(newTask);
    }
    addDeleteListener(newTask.querySelector('.delete-img'));
    addCheckListener(newTask.querySelector('.checkbox'));
    clearInput();
}

function getValue(){
    let value = document.getElementById("text-input").value;
    if(value == '') return 'New Task';
    return value;
}

function clearInput(){
    document.getElementById('text-input').value = '';
}

function addDeleteListener(btn){
    btn.addEventListener('click', 
    event => event.target.parentElement.parentElement.remove());
}

function addCheckListener(checkbox){
    checkbox.addEventListener('change', function(event){
        let taskText = checkbox.nextElementSibling;
        if(event.target.checked){
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    })
}