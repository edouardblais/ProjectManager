import { priorityToggle, checkedToggle } from './logic.js';

function addProject() {
    const sidebar = document.getElementById('sidebar');

    const projecttitle = document.createElement('input')
    projecttitle.classList.add('projecttitleinput');
    projecttitle.placeholder = 'Project Title';

    const addprojectbutton = document.createElement('button');
    addprojectbutton.innerText = 'Add Project';
    addprojectbutton.classList.add('addprojbutton');

    sidebar.appendChild(projecttitle);
    sidebar.appendChild(addprojectbutton);
};

function addTask() {
    const maincontent = document.getElementById('maincontent');
    const addtaskbox = document.createElement('div');

    const tasktitle = document.createElement('div');
    tasktitle.innerText = 'Task Title:'
    const tasktitleinput = document.createElement('input');
    tasktitleinput.classList.add('tasktitleinput');

    const taskdescription = document.createElement('div');
    taskdescription.innerText = 'Description:';
    const taskdescriptioninput = document.createElement('input');
    taskdescriptioninput.classList.add('taskdescriptioninput');

    const taskresponsible = document.createElement('div');
    taskresponsible.innerText = 'Assigned Person:';
    const taskresponsibleinput = document.createElement('input');
    taskresponsibleinput.classList.add('taskresponsibleinput');

    const taskpriority = document.createElement('div');
    taskpriority.innerText = 'Priority:';
    const taskpriorityinput = document.createElement('button');
    taskpriorityinput.id = 'taskprioritybutton'
    taskpriorityinput.innerText = 'Low';
    taskpriorityinput.classList.add('taskprioritybuttonoff');

    const taskdategiven = document.createElement('div');
    taskdategiven.innerText = 'Task given on:';
    const taskdategiveninput = document.createElement('input');
    taskdategiveninput.setAttribute('type', 'date');
    taskdategiveninput.classList.add('taskdategiveninput');

    const taskdatedue = document.createElement('div');
    taskdatedue.innerText = 'Task due on:';
    const taskdatedueinput = document.createElement('input');
    taskdatedueinput.setAttribute('type', 'date');
    taskdatedue.classList.add('taskdatedueinput');

    const taskchecked = document.createElement('button');
    taskchecked.classList.add('taskcheckedbuttonoff');
    //taskchecked.innerHTML = link check image here

    const addtaskbutton = document.createElement('button');
    addtaskbutton.classList.add('addtaskbutton');
    addtaskbutton.innerText = 'Add New Task';

    addtaskbox.appendChild(tasktitle);
    addtaskbox.appendChild(tasktitleinput);
    addtaskbox.appendChild(taskdescription);
    addtaskbox.appendChild(taskdescriptioninput);
    addtaskbox.appendChild(taskresponsible);
    addtaskbox.appendChild(taskresponsibleinput);
    addtaskbox.appendChild(taskpriority);
    addtaskbox.appendChild(taskpriorityinput);
    addtaskbox.appendChild(taskdategiven);
    addtaskbox.appendChild(taskdategiveninput);
    addtaskbox.appendChild(taskdatedue);
    addtaskbox.appendChild(taskdatedueinput);
    addtaskbox.appendChild(taskchecked);
    addtaskbox.appendChild(addtaskbutton);

    maincontent.appendChild(addtaskbox);

    priorityToggle();
    checkedToggle();
};

export { addProject, addTask };