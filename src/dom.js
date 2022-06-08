

function addProjectBox() {
    const projects = document.getElementById('projectbox');
    const projectbox = document.createElement('div');

    const projecttitle = document.createElement('input');
    projecttitle.placeholder = 'Project Title';
    projecttitle.id = 'projecttitleinput';

    const addprojectbutton = document.createElement('button');
    addprojectbutton.innerText = 'Add Project';
    addprojectbutton.classList.add('addprojbutton');

    projectbox.appendChild(projecttitle);
    projectbox.appendChild(addprojectbutton);
    projects.appendChild(projectbox);
};

function addTask() {
    const maincontent = document.getElementById('maincontent');
    const addtaskbox = document.createElement('div');
    addtaskbox.classList.add('taskbox');

    const tasktitle = document.createElement('div');
    tasktitle.innerText = 'Task Title:'
    let tasktitleinput = document.createElement('input');
    tasktitleinput.classList.add('tasktitleinput');

    const taskdescription = document.createElement('div');
    taskdescription.innerText = 'Description:';
    let taskdescriptioninput = document.createElement('input');
    taskdescriptioninput.classList.add('taskdescriptioninput');

    const taskresponsible = document.createElement('div');
    taskresponsible.innerText = 'Assigned Person:';
    let taskresponsibleinput = document.createElement('input');
    taskresponsibleinput.classList.add('taskresponsibleinput');

    const taskpriority = document.createElement('div');
    taskpriority.innerText = 'Priority:';
    let taskpriorityinput = document.createElement('button');
    taskpriorityinput.classList.add('taskpriority');
    taskpriorityinput.innerText = 'Low';
    taskpriorityinput.classList.add('prioritylow');

    const taskdatedue = document.createElement('div');
    taskdatedue.innerText = 'Task due on:';
    let taskdatedueinput = document.createElement('input');
    taskdatedueinput.setAttribute('type', 'date');
    taskdatedueinput.classList.add('taskdatedueinput');

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
    addtaskbox.appendChild(taskdatedue);
    addtaskbox.appendChild(taskdatedueinput);
    addtaskbox.appendChild(addtaskbutton);

    maincontent.appendChild(addtaskbox);
};

function appendTaskToShownTasks() {
    const maincontent = document.getElementById('maincontent');
    const listedtasks = document.createElement('div');
    listedtasks.classList.add('listedtasks');

    const gettasktitle = document.querySelector('.tasktitleinput').value;
    const divfortasktitleinput = document.createElement('div');
    divfortasktitleinput.innerText = gettasktitle;

    let taskchecked = document.createElement('img');
    taskchecked.src = 'icons/circle.svg';
    taskchecked.classList.add('circle');
    taskchecked.id = gettasktitle;

    const gettaskdescription = document.querySelector('.taskdescriptioninput').value;
    const divfortaskdescriptioninput = document.createElement('div');
    divfortaskdescriptioninput.innerText = gettaskdescription;

    const gettaskresponsible = document.querySelector('.taskresponsibleinput').value;
    const divfortaskresponsibleinput = document.createElement('div');
    divfortaskresponsibleinput.innerText = gettaskresponsible;

    const gettaskpriority = document.querySelector('.taskpriority');
    let btnfortaskpriority = document.createElement('button');
    btnfortaskpriority.id = gettasktitle;
    if (gettaskpriority.classList.contains('prioritylow')) {
        btnfortaskpriority.classList.add('taskpriority');
        btnfortaskpriority.innerText = 'Low';
        btnfortaskpriority.classList.add('prioritylow');
    } else if (gettaskpriority.classList.contains('priorityhigh')) {
        btnfortaskpriority.classList.add('taskpriority');
        btnfortaskpriority.innerText = 'High';
        btnfortaskpriority.classList.add('priorityhigh'); 
    };

    const gettaskdatedue = document.querySelector('.taskdatedueinput').value;
    const divfortaskdatedueinput = document.createElement('div');
    divfortaskdatedueinput.innerText = gettaskdatedue;

    const deletebutton = document.createElement('img');
    deletebutton.classList.add('deletebutton');
    deletebutton.src = 'icons/delete.svg';
    deletebutton.id = gettasktitle;

    listedtasks.appendChild(taskchecked);
    listedtasks.appendChild(divfortasktitleinput);
    listedtasks.appendChild(divfortaskdescriptioninput);
    listedtasks.appendChild(divfortaskresponsibleinput);
    listedtasks.appendChild(btnfortaskpriority);
    listedtasks.appendChild(divfortaskdatedueinput);
    listedtasks.appendChild(deletebutton);

    maincontent.appendChild(listedtasks);
};

function showTasks(title, description, responsible, priority, duedate, checked) {
    const maincontent = document.getElementById('maincontent');
    const listedtasks = document.createElement('div');
    listedtasks.classList.add('listedtasks');

    let taskchecked = document.createElement('img');
    if (checked === false) {
        taskchecked.src = 'icons/circle.svg';
        taskchecked.classList.add('circle');
        taskchecked.id = title;
    } else if (checked === true) {
        taskchecked.src = 'icons/check.svg';
        taskchecked.classList.add('check');
        taskchecked.id = title;
    };

    const divfortasktitleinput = document.createElement('div');
    divfortasktitleinput.innerText = title;

    const divfortaskdescriptioninput = document.createElement('div');
    divfortaskdescriptioninput.innerText = description;

    const divfortaskresponsibleinput = document.createElement('div');
    divfortaskresponsibleinput.innerText = responsible;

    let btnfortaskpriority = document.createElement('button');
    btnfortaskpriority.id = title;
    if (priority == 'Low') {
        btnfortaskpriority.classList.add('taskpriority');
        btnfortaskpriority.innerText = 'Low';
        btnfortaskpriority.classList.add('prioritylow');
    } else if (priority == 'High') {
        btnfortaskpriority.classList.add('taskpriority');
        btnfortaskpriority.innerText = 'High';
        btnfortaskpriority.classList.add('priorityhigh'); 
    };

    const divfortaskdatedueinput = document.createElement('div');
    divfortaskdatedueinput.innerText = duedate;

    const deletebutton = document.createElement('img');
    deletebutton.classList.add('deletebutton');
    deletebutton.src = 'icons/delete.svg';
    deletebutton.id = title;

    listedtasks.appendChild(taskchecked);
    listedtasks.appendChild(divfortasktitleinput);
    listedtasks.appendChild(divfortaskdescriptioninput);
    listedtasks.appendChild(divfortaskresponsibleinput);
    listedtasks.appendChild(btnfortaskpriority);
    listedtasks.appendChild(divfortaskdatedueinput);
    listedtasks.appendChild(deletebutton);

    maincontent.appendChild(listedtasks);
}

function showProjects(title) {
    const allprojects = document.getElementById('listedprojects');

    const listedproject = document.createElement('div');
    listedproject.classList.add('listedprojects');
    listedproject.id = title;
    listedproject.innerText = title;

    allprojects.appendChild(listedproject);
};

function addDeleteProjectOption(title) {
    const chosenproject = document.getElementById(title);
    if (!chosenproject.classList.contains('deleteoptionactivated')) {
        const deleteproject = document.createElement('img');
        deleteproject.src = 'icons/delete.svg';
        deleteproject.id = title;
        deleteproject.classList.add('deleteproject');
        chosenproject.appendChild(deleteproject);
        chosenproject.classList.add('deleteoptionactivated');
    };
};

function clearMainContent() {
    const maincontent = document.getElementById('maincontent');
    maincontent.innerHTML = '';
}

export { addProjectBox, addTask, addDeleteProjectOption, appendTaskToShownTasks, showTasks, showProjects, clearMainContent };