let tasks = [];

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        document.getElementById('clearButton').style.display = 'none';
    } else {
        document.getElementById('clearButton').style.display = 'block';
    }

    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add(task.completed ? 'completed' : '');

        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button onclick="toggleTaskCompletion(${index})">Concluir</button>
            <button onclick="removeTask(${index})">Excluir</button>
        `;
        
        taskList.appendChild(taskItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const newTask = {
        text: taskText,
        completed: false,
    };

    tasks.push(newTask);
    taskInput.value = '';
    renderTasks();
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function clearAllTasks() {
    tasks = [];
    renderTasks();
}

// Inicializa o jogo
renderTasks();
