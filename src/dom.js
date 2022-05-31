import { priorityToggle, checkedToggle } from './logic.js';

function sidebar() {
    const sidebar = document.getElementById('sidebar');

    const addNewProjectButton = document.createElement('button')
    addNewProjectButton.innerText = 'Add New Project';
    addNewProjectButton.classList.add('addnewproject');

    sidebar.appendChild(addNewProjectButton);

    addNewProjectButton.addEventListener('click', addProject());
};

function addProject() {
    const sidebar = document.getElementById('sidebar');

    const projecttitle = document.createElement('input')
    projecttitle.classList.add('projecttitleinput');

    const addprojectbutton = document.createElement('button');
    addprojectbutton.innerText = 'Add Project';
    addprojectbutton.classList.add('addprojbutton');

    sidebar.appendChild(projecttitle);
    sidebar.appendChild(addprojectbutton);

    addTask();

}

function addTask() {
    const maincontent = document.getElementById('maincontent');
    const addtaskbox = document.createElement('div');

    const tasktitle = document.createElement('input');
    tasktitle.classList.add('tasktitleinput');

    const taskdescription = document.createElement('input');
    taskdescription.classList.add('taskdescriptioninput');

    const taskresponsible = document.createElement('input');
    taskresponsible.classList.add('taskresponsibleinput');

    const taskpriority = document.createElement('button');
    taskpriority.classList.add('taskprioritybuttonoff');
    taskpriority.innerText = 'Urgent';
    priorityToggle();

    const taskdategiven = document.createElement('input');
    taskdategiven.type = 'date';
    taskdategiven.classList.add('taskdategiveninput');

    const taskdatedue = document.createElement('input');
    taskdatedue.type = 'date';
    taskdatedue.classList.add('taskdatedueinput');

    const taskchecked = document.createElement('button');
    taskchecked.classList.add('taskcheckedbuttonoff');
    //taskchecked.innerHTML = link check image here
    checkedToggle();

    const addtasktbutton = document.createElement('button');
    addtaskbutton.classList.add('addtaskbutton');
    addtasktbutton.innerText = 'Add New Task';

    addtaskbox.appendChild(tasktitle);
    addtaskbox.appendChild(taskdescription);
    addtaskbox.appendChild(taskresponsible);
    addtaskbox.appendChild(taskpriority);
    addtaskbox.appendChild(taskdategiven);
    addtaskbox.appendChild(taskdatedue);
    addtaskbox.appendChild(taskchecked);
    addtaskbox.appendChild(addtasktbutton);

    maincontent.appendChild(addtaskbox);
};

export { sidebar, addProject, addTask };