

function addProject() {
    const sidebar = document.getElementById('sidebar');
    const projectbox = document.createElement('projectbox');

    const projecttitle = document.createElement('input')
    projecttitle.classList.add('projecttitleinput');
    projecttitle.placeholder = 'Project Title';

    const addprojectbutton = document.createElement('button');
    addprojectbutton.innerText = 'Add Project';
    addprojectbutton.classList.add('addprojbutton');

    projectbox.appendChild(projecttitle);
    projectbox.appendChild(addprojectbutton);
    sidebar.appendChild(projectbox);
};

function appendProject() {
    const getprojecttitle = document.querySelector('.projecttitleinput').value;
    const divforprojectinput = document.createElement('div');
    divforprojectinput.classList.add('listedprojects');
    divforprojectinput.innerText = getprojecttitle;
    sidebar.appendChild(divforprojectinput);
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

function appendTask() {
    const maincontent = document.getElementById('maincontent');
    const listedtasks = document.createElement('div');
    listedtasks.classList.add('listedtasks');

    let taskchecked = document.createElement('img');
    taskchecked.classList.add('taskchecked');
    taskchecked.src = 'icons/circle.svg';
    taskchecked.classList.add('circle');

    const gettasktitle = document.querySelector('.tasktitleinput').value;
    const divfortasktitleinput = document.createElement('div');
    divfortasktitleinput.innerText = gettasktitle;

    const gettaskdescription = document.querySelector('.taskdescriptioninput').value;
    const divfortaskdescriptioninput = document.createElement('div');
    divfortaskdescriptioninput.innerText = gettaskdescription;

    const gettaskresponsible = document.querySelector('.taskresponsibleinput').value;
    const divfortaskresponsibleinput = document.createElement('div');
    divfortaskresponsibleinput.innerText = gettaskresponsible;

    const gettaskpriority = document.querySelector('.taskpriority');
    let btnfortaskpriority = document.createElement('button');
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

    listedtasks.appendChild(taskchecked);
    listedtasks.appendChild(divfortasktitleinput);
    listedtasks.appendChild(divfortaskdescriptioninput);
    listedtasks.appendChild(divfortaskresponsibleinput);
    listedtasks.appendChild(btnfortaskpriority);
    listedtasks.appendChild(divfortaskdatedueinput);

    maincontent.appendChild(listedtasks);
};

export { addProject, addTask, appendProject, appendTask };