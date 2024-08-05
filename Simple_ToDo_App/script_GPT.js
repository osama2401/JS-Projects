const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');
const addTaskBtn = document.querySelector('.add-task__btn');

const createTaskElement = (taskText) => {
    const li = document.createElement("li");
    li.textContent = taskText;
    li.setAttribute('tabindex', '0');
    
    const span = document.createElement('span');
    span.textContent = "\u00d7";
    span.setAttribute('tabindex', '0');

    li.appendChild(span);

    addTaskEventListeners(li, span);
    return li;
};

const addTaskEventListeners = (li, span) => {
    li.addEventListener('click', () => {
        li.classList.toggle("checked");
        saveData();
    });

    li.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            li.classList.toggle("checked");
            saveData();
        }
    });

    span.addEventListener('click', (event) => {
        event.stopPropagation();
        li.remove();
        saveData();
    });

    span.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.stopPropagation();
            li.remove();
            saveData();
        }
    });
};

const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const taskElement = createTaskElement(inputBox.value);
        listContainer.appendChild(taskElement);
        inputBox.value = '';
        saveData();
    }
};

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data") || "";
    const liElements = document.querySelectorAll('.list-container li');
    liElements.forEach(li => {
        const span = li.querySelector('span');
        addTaskEventListeners(li, span);
    });
};

addTaskBtn.addEventListener('click', addTask);
showTask();
