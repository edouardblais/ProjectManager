let projectlist = [];
let tasklist = [];
let priority = 2;
let checked = false;

const Project = (title) => {
    
    const getTitle = title;

    return { getTitle };
};

const Task = (title, description, responsible, priority, dategiven, duedate, checked) => {

    const getTitle = title;
    const getDescription = description;
    const getResponsible = responsible;
    const getPriority = priority;
    const getDategiven = dategiven;
    const getDuedate = duedate;
    const isChecked = checked;

    return { getTitle, getDescription, getResponsible, getPriority, getDategiven, getDuedate, isChecked };

};

function priorityToggle() {
    const prioritybutton = document.querySelector('.taskprioritybuttonoff');
    prioritybutton.addEventListener('click', () => {
        if (prioritybutton.classList === 'taskprioritybuttonoff') {
            prioritybutton.classList.add('taskprioritybuttonon');
            prioritybutton.classList.remove('taskprioritybuttonoff');
            priority = 1;
        } else if (prioritybutton.classList === 'taskprioritybuttonon') {
            prioritybutton.classList.add('taskprioritybuttonoff');
            prioritybutton.classList.remove('taskprioritybuttonon');
            priority = 2;
        };
    return priority;
    });
};

function checkedToggle() {
    const checkedbutton = document.querySelector('.taskcheckedbuttonoff');
    checkedbutton.addEventListener('click', () => {
        if (checkedbutton.classList === 'taskcheckedbuttonoff') {
            checkedbutton.classList.add('taskcheckedbuttonon');
            checkedbutton.classList.remove('taskcheckedbuttonoff');
            checked = true;
        } else if (checkedbutton.classList === 'taskcheckedbuttonon') {
            checkedbutton.classList.add('taskcheckedbuttonoff');
            checkedbutton.classList.remove('taskcheckedbuttonon');
            checked = false;
        };
    return checked;
    });

};

function inputNewProject() {
    const addprojectbutton = document.querySelector('.addprojbutton');
    const projecttitleinput = document.querySelector('.projecttitleinput').value;

    addprojectbutton.addEventListener('click', () => {
        const inputproject = Project(projecttitleinput);
        projectlist.push(inputproject);
    });
};

function inputNewTask() {
    const addtaskbutton = document.querySelector('.addtaskbutton');
    const taskttitleinput = document.querySelector('.tasktitleinput').value;
    const taskdescriptioneinput = document.querySelector('.taskdescriptioninput').value;
    const taskresponsibleinput = document.querySelector('.taskresponsibleinput').value;
    const taskdatedueeinput = document.querySelector('.taskdatedueinput').value;
    const taskdategiveninput = document.querySelector('.taskdategiveninput').value;

    addtaskbutton.addEventListener('click', () => {
        const inputtask = Task(taskttitleinput, taskdescriptioneinput, taskresponsibleinput, priority, taskdategiveninput, taskdatedueeinput, checked);
        tasklist.push(inputtask);
    });
};

export { Project, Task, priorityToggle, checkedToggle, inputNewProject, inputNewTask, projectlist, tasklist, checked, priority };