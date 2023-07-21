( () => {const btn = document.querySelector("[data-form-btn]");

        const createTask = (evento) => {
            evento.preventDefault();
            const input = document.querySelector("[data-form-input]");
            const value = input.value;
            input.value = "";
            const list = document.querySelector("[data-list]");
            const task = document.createElement("li");
            task.classList.add("card");
            const taskContent = document.createElement("div");
            taskContent.appendChild(checkComplete());
            const tittleTask = document.createElement("span");
            tittleTask.classList.add("task");
            tittleTask.innerText = value;
            taskContent.appendChild(tittleTask);
            const content = `<i class="fas fa-trash-alt trashIcon icon"></i>`;
            task.appendChild(taskContent);
            list.appendChild(task);
            console.log(value);
        ;}

        console.log(btn);
        btn.addEventListener("click", createTask);

        const checkComplete = () => {
            const i = document.createElement("i");
            i.classList.add("far", "fa-check-square", "icon");
            i.addEventListener("click", completeTask);
            return i;
        }

        const completeTask = (event) => {
            const element = event.target;
            element.classList.toggle("fas");
            element.classList.toggle("completeIcon");
            element.classList.toggle("far");
        }
    })();