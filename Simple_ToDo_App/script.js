const inputBox = document.querySelector('.input-box');
const listContainer = document.querySelector('.list-container');
const addTaskBtn = document.querySelector('.add-task__btn');

const addTask = function () {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        li.setAttribute('tabindex', '0');
        
        listContainer.appendChild(li);

        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        
        span.setAttribute('tabindex', '0');

        li.appendChild(span);

        li.addEventListener('click', () => {
            li.classList.toggle("checked");
        });

        li.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                li.classList.toggle("checked");
            }
        });

        span.addEventListener('click', () => {
            span.parentElement.remove();
        });

        span.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                span.parentElement.remove();
            }
        });

        inputBox.value = '';
    }
};

addTaskBtn.addEventListener('click', addTask);
