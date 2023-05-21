let taskInput = document.querySelector('.todoinput');
let taskList = document.querySelector('.list');
let savedTasks = localStorage.getItem('tasks');
console.log(savedTasks)

if (savedTasks) {
    taskList.innerHTML = savedTasks;

    let checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkbox.parentNode.remove();
        }
        checkbox.addEventListener('click', function() {
            if (this.checked) {
                this.parentNode.remove();
                localStorage.setItem('tasks', taskList.innerHTML);
            }
        });
    });
}

taskInput.addEventListener("keypress", function(e) {
    if (e.keyCode === 13 && taskInput.value != "") {
        const taskValue = taskInput.value;
        const li = document.createElement("li");
        let newCheck = document.createElement("input")
        newCheck.type = "checkbox";
        let newTask = document.createElement('span')
        newTask.appendChild(document.createTextNode(taskValue));
        li.appendChild(newCheck)
        li.appendChild(newTask)

        taskList.appendChild(li)
        taskInput.value = ""


        localStorage.setItem('tasks', taskList.innerHTML);


        newCheck.addEventListener('click', function() {
            if (this.checked) {
                this.parentNode.remove();
                localStorage.setItem('tasks', taskList.innerHTML);
            }
        });
    }
});