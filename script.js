let dataBase = [];
const outputSection = document.getElementsByClassName('output_section');
let taskId;

function viewDataOnPanel() {
  outputSection[0].innerHTML = ''
  dataBase.map((task, index) => {
    let taskElement = document.createElement('p');
    taskElement.setAttribute('id', `task${index}`)
    taskElement.innerHTML = task
    outputSection[0].appendChild(taskElement);
  })
}

function handleAddTask() {
  let enteredTask = document.getElementById('taskInput').value;
  if (enteredTask) {
    dataBase.push(enteredTask)
    viewDataOnPanel();
  }
}

function handleSort() {
  dataBase.sort()
  viewDataOnPanel();
}

function handleReset() {
  document.getElementById('taskInput').value = ''
}


function handleSelection(e) {
  if (e.target !== e.currentTarget) {
    taskId = e.target.getAttribute('id');
    e.target.style.textDecoration = "line-through";
  }
}

outputSection[0].addEventListener('click', handleSelection, false)

function handleCleanUp() {
  let deleteEle = document.getElementById(taskId);
  dataBase.splice(dataBase.indexOf(deleteEle.innerHTML),1);
  viewDataOnPanel()  
}