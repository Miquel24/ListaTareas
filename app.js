//Recojemos los elementos del UI

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter')

//Cargar todos los eventos

loadEventListeners();

function loadEventListeners(){
    //evento crear tareas
    form.addEventListener('submit',addTask);
    //Eliminar tareas
    taskList.addEventListener('click', removeTask);
    //limpiar todas las tareas
    clearBtn.addEventListener('click', clearTasks);
    //Filtrar tareas
    filter.addEventListener('keyup', filterTasks);
    
}

function addTask(e){

    if(taskInput.value === ''){
        alert("Añade una tarea");
    }else{
    //Crear elemento li
    const li = document.createElement('li');
    //añadimos clase a li
    li.className = 'collection-item';
    //crear nodo de texto
    const texto = document.createTextNode(taskInput.value);
    li.appendChild(texto);
    //Crear un elemento a y de las clases delet-item
    // y secondary content
    const a = document.createElement('a');
    a.className = 'delete-item secondary-content'
    //añadir el idono
    a.innerHTML = '<i class = "fa fa-remove"><i>'
    // append el a al li
    appendChild(a);
    //Añadir li a la lista ul
    taskList.appendChild(li);
    // limpiamos el input 
    taskInput.value = ''
    console.log(li);
}
e.preventDefault(); 
}



function removeTask(e){
    if(e.target.parentElement.classList.contains ('delete-item')){
        if(confirm ('estas seguro?')){
            e.target.parentElement.parentElement.remove();
        }
    }
    console.log("eliminar tarea");
}

function clearTasks(e){
    // taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

    console.log("LIMPIAR TAREAS");
}

function filterTasks(e){
    const lista = document.querySelectorAll(".collection-item");

    lista.forEach(function (task) {
        const item = task.firstChild.textContent;
        if(item.includes(filter.value.toLowerCase())){
            task.style.display = "block";
        }else{
            task.style.display = "none";
        }
    });
}