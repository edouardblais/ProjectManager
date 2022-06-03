import { addTask, appendProjectToSidebar, appendTask } from "./dom.js";

const logic = () => {
    let projectlist = [];
    let tasklist = [];
    let priority = 'low';
    let checked = false;

    const Project = (title) => {
    
        const getTitle = title;
    
        return { getTitle };
    };
    
    const Task = (title, description, responsible, priority, duedate, checked, associatedproject) => {
    
        const getTitle = title;
        const getDescription = description;
        const getResponsible = responsible;
        const getPriority = priority;
        const getDuedate = duedate;
        const isChecked = checked;
        const getAssociatedproject = associatedproject;
    
        return { getTitle, getDescription, getResponsible, getPriority, getDuedate, isChecked, getAssociatedproject };
    
    };

    function priorityToggle() {
        document.addEventListener(('click'), (event) => {
            if (event.target.classList.contains('prioritylow')) {
                event.target.innerText = 'High';
                event.target.classList.add('priorityhigh');
                event.target.classList.remove('prioritylow');
                priority = 'high';
            } else if (event.target.classList.contains('priorityhigh')) {
                event.target.innerText = 'Low';
                event.target.classList.add('prioritylow');
                event.target.classList.remove('priorityhigh');
                priority = 'low';
            };
        });
    };
    
    function checkedToggle() {
        document.addEventListener(('click'), (event) => {
            if (event.target.classList.contains('circle')) {
                event.target.src = 'icons/check.svg'
                event.target.classList.add('check');
                event.target.classList.remove('circle');
                checked = true;
            } else if (event.target.classList.contains('check')) {
                event.target.classList.add('circle');
                event.target.classList.remove('check');
                event.target.src = 'icons/circle.svg'
                checked = false;
            };
        });
    };

    function inputNewProject() {
        const addprojectbutton = document.querySelector('.addprojbutton');
    
        addprojectbutton.addEventListener(('click'), () => {
            const projecttitleinput = document.querySelector('.projecttitleinput').value;
            const inputproject = Project(projecttitleinput);
            projectlist.push(inputproject);
            appendProjectToSidebar();
            addTaskToProject();
        });
    };

    function addTaskToProject() {
        const maincontent = document.getElementById('maincontent');

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('listedprojects')) {
            maincontent.innerHTML = '';
            addTask();
            getTasksFromStorage();
            displayTasksFromStorage(event.target.id);
            inputNewTask();
            }
        })
    }

    function getTasksFromStorage() {
        if (localStorage.getItem('tasks') === null) {
            tasklist = [];
        } else {
            let storedtasks = JSON.parse(localStorage.getItem('tasks'));
            tasklist = storedtasks;
        };
    }

    function displayTasksFromStorage(id) {
        for (let i=0; i<tasklist.length; i++) {
            if (tasklist[i].getAssociatedproject == id) {
                const maincontent = document.getElementById('maincontent');
                const listedtasks = document.createElement('div');
                listedtasks.classList.add('listedtasks');
            
                let taskchecked = document.createElement('img');
                taskchecked.classList.add('taskchecked');
                taskchecked.src = 'icons/circle.svg';
                taskchecked.classList.add('circle');
            
                const divfortasktitleinput = document.createElement('div');
                divfortasktitleinput.innerText = tasklist[i].getTitle;
            
                const divfortaskdescriptioninput = document.createElement('div');
                divfortaskdescriptioninput.innerText = tasklist[i].getDescription;
            
                const divfortaskresponsibleinput = document.createElement('div');
                divfortaskresponsibleinput.innerText = tasklist[i].getResponsible;
            
                let btnfortaskpriority = document.createElement('button');
                if (tasklist[i].getPriority == 'low') {
                    btnfortaskpriority.classList.add('taskpriority');
                    btnfortaskpriority.innerText = 'Low';
                    btnfortaskpriority.classList.add('prioritylow');
                } else if (tasklist[i].getPriority == 'high') {
                    btnfortaskpriority.classList.add('taskpriority');
                    btnfortaskpriority.innerText = 'High';
                    btnfortaskpriority.classList.add('priorityhigh'); 
                };
            
                const divfortaskdatedueinput = document.createElement('div');
                divfortaskdatedueinput.innerText = tasklist[i].getDuedate;
            
                listedtasks.appendChild(taskchecked);
                listedtasks.appendChild(divfortasktitleinput);
                listedtasks.appendChild(divfortaskdescriptioninput);
                listedtasks.appendChild(divfortaskresponsibleinput);
                listedtasks.appendChild(btnfortaskpriority);
                listedtasks.appendChild(divfortaskdatedueinput);
            
                maincontent.appendChild(listedtasks);
            };
        };
    };

    function inputNewTask() {
        const addtaskbutton = document.querySelector('.addtaskbutton');
    
        addtaskbutton.addEventListener(('click'), () => {
            const taskttitleinput = document.querySelector('.tasktitleinput').value;
            const taskdescriptioneinput = document.querySelector('.taskdescriptioninput').value;
            const taskresponsibleinput = document.querySelector('.taskresponsibleinput').value;
            const taskdatedueeinput = document.querySelector('.taskdatedueinput').value;
            const associatedprojectinput = document.querySelector('.projecttitleinput').value;
            const inputtask = Task(taskttitleinput, taskdescriptioneinput, taskresponsibleinput, priority, taskdatedueeinput, checked, associatedprojectinput);
            tasklist.push(inputtask);
            appendTask();
            localStorage.setItem('tasks', JSON.stringify(tasklist));
        });
    };

    inputNewProject();
    priorityToggle();
    checkedToggle();

};

export { logic };