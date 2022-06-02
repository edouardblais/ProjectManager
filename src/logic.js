import { addTask, appendProject, appendTask } from "./dom.js";

const logic = () => {
    let projectlist = [];
    let tasklist = [];
    let priority = 'low';
    let checked = false;

    const Project = (title) => {
    
        const getTitle = title;
    
        return { getTitle };
    };
    
    const Task = (title, description, responsible, priority, duedate, checked) => {
    
        const getTitle = title;
        const getDescription = description;
        const getResponsible = responsible;
        const getPriority = priority;
        const getDuedate = duedate;
        const isChecked = checked;
    
        return { getTitle, getDescription, getResponsible, getPriority, getDuedate, isChecked };
    
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
            appendProject();
            addTask();
            inputNewTask();
        });
    };
    
    function inputNewTask() {
        const addtaskbutton = document.querySelector('.addtaskbutton');
    
        addtaskbutton.addEventListener(('click'), () => {
            const taskttitleinput = document.querySelector('.tasktitleinput').value;
            const taskdescriptioneinput = document.querySelector('.taskdescriptioninput').value;
            const taskresponsibleinput = document.querySelector('.taskresponsibleinput').value;
            const taskdatedueeinput = document.querySelector('.taskdatedueinput').value;
            const inputtask = Task(taskttitleinput, taskdescriptioneinput, taskresponsibleinput, priority, taskdatedueeinput, checked);
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