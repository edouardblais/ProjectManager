

function addProjectBox() {
    const projects = document.getElementById('projectbox');
    const projectbox = document.createElement('div');
    projectbox.classList.add('projectbox');

    const projecttitle = document.createElement('input');
    projecttitle.placeholder = 'Give me a fresh and unique name!';
    projecttitle.id = 'projecttitleinput';

    const addprojectbutton = document.createElement('button');
    addprojectbutton.innerText = 'Add Project';
    addprojectbutton.classList.add('addprojbutton');

    projectbox.appendChild(projecttitle);
    projectbox.appendChild(addprojectbutton);
    projects.appendChild(projectbox);
};

function addTaskBox() {
    const maincontent = document.getElementById('maincontent');
    const addtaskbox = document.createElement('div');
    addtaskbox.classList.add('taskbox');

    const taskTitleResponsiblePriorityDatebox = document.createElement('div');
    taskTitleResponsiblePriorityDatebox.classList.add('tasktitleresponsibleprioritydatebox');
    
    const tasktitle = document.createElement('div');
    tasktitle.innerText = 'Task Title'
    tasktitle.classList.add('taskboxinfo');
    let tasktitleinput = document.createElement('input');
    tasktitleinput.classList.add('tasktitleinput');
    tasktitleinput.placeholder = 'Give me a fresh and unique name!'

    const taskresponsible = document.createElement('div');
    taskresponsible.innerText = 'Assigned Person';
    taskresponsible.classList.add('taskboxinfo');
    let taskresponsibleinput = document.createElement('input');
    taskresponsibleinput.classList.add('taskresponsibleinput');
    taskresponsibleinput.placeholder = "Whooo's going to do it?";

    const taskpriority = document.createElement('div');
    taskpriority.innerText = 'Priority';
    taskpriority.classList.add('taskboxinfo');
    let taskpriorityinput = document.createElement('button');
    taskpriorityinput.classList.add('taskpriority');
    taskpriorityinput.innerText = 'Low';
    taskpriorityinput.classList.add('prioritylow');

    const taskdatedue = document.createElement('div');
    taskdatedue.innerText = 'Task due on';
    taskdatedue.classList.add('taskboxinfo');
    let taskdatedueinput = document.createElement('input');
    taskdatedueinput.setAttribute('type', 'date');
    taskdatedueinput.classList.add('taskdatedueinput');

    const taskdescriptionbox = document.createElement('div');
    taskdescriptionbox.classList.add('taskdescriptionbox');
    const taskdescription = document.createElement('div');
    taskdescription.innerText = 'Details';
    taskdescription.classList.add('taskboxinfo');
    let taskdescriptioninput = document.createElement('input');
    taskdescriptioninput.classList.add('taskdescriptioninput');
    taskdescriptioninput.placeholder = "Gimme the deets!"

    const addtaskbuttonbox = document.createElement('div');
    addtaskbuttonbox.classList.add('addtaskbuttonbox');
    const addtaskbutton = document.createElement('button');
    addtaskbutton.classList.add('addtaskbutton');
    addtaskbutton.innerText = 'Add Task';

    
    taskTitleResponsiblePriorityDatebox.appendChild(tasktitle);
    taskTitleResponsiblePriorityDatebox.appendChild(tasktitleinput);
    taskTitleResponsiblePriorityDatebox.appendChild(taskresponsible);
    taskTitleResponsiblePriorityDatebox.appendChild(taskresponsibleinput);
    taskTitleResponsiblePriorityDatebox.appendChild(taskpriority);
    taskTitleResponsiblePriorityDatebox.appendChild(taskpriorityinput);
    taskTitleResponsiblePriorityDatebox.appendChild(taskdatedue);
    taskTitleResponsiblePriorityDatebox.appendChild(taskdatedueinput);
    taskdescriptionbox.appendChild(taskdescription);
    taskdescriptionbox.appendChild(taskdescriptioninput);
    addtaskbox.appendChild(taskTitleResponsiblePriorityDatebox);
    addtaskbox.appendChild(taskdescriptionbox);
    addtaskbuttonbox.appendChild(addtaskbutton);
    addtaskbox.appendChild(addtaskbuttonbox);

    maincontent.appendChild(addtaskbox);
};

function appendTaskToShownTasks() {
    const maincontent = document.getElementById('maincontent');
    const listedtasks = document.createElement('div');
    listedtasks.classList.add('listedtasks');

    let taskchecked = document.createElement('img');
    taskchecked.src = 'icons/circle.svg';
    taskchecked.classList.add('circle');;

    const tasktitleanddescriptionbox = document.createElement('div');
    tasktitleanddescriptionbox.classList.add('tasktitleanddescriptionbox');
    
    const gettasktitle = document.querySelector('.tasktitleinput').value;
    const divfortasktitleinput = document.createElement('div');
    divfortasktitleinput.innerText = gettasktitle;

    taskchecked.id = gettasktitle;

    const gettaskdescription = document.querySelector('.taskdescriptioninput').value;
    const divfortaskdescriptioninput = document.createElement('div');
    divfortaskdescriptioninput.innerText = gettaskdescription;
    divfortaskdescriptioninput.classList.add('descriptiontext');

    const gettaskresponsible = document.querySelector('.taskresponsibleinput').value;
    const divfortaskresponsibleinput = document.createElement('div');
    divfortaskresponsibleinput.innerText = gettaskresponsible;
    divfortaskresponsibleinput.classList.add('taskresponsible');

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
    divfortaskdatedueinput.classList.add('datedue');

    const deletebutton = document.createElement('img');
    deletebutton.classList.add('deletebutton');
    deletebutton.src = 'icons/delete.svg';
    deletebutton.id = gettasktitle;

    listedtasks.appendChild(taskchecked);
    tasktitleanddescriptionbox.appendChild(divfortasktitleinput);
    tasktitleanddescriptionbox.appendChild(divfortaskdescriptioninput);
    listedtasks.appendChild(tasktitleanddescriptionbox)
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

    const tasktitleanddescriptionbox = document.createElement('div');
    tasktitleanddescriptionbox.classList.add('tasktitleanddescriptionbox');

    const divfortasktitleinput = document.createElement('div');
    divfortasktitleinput.innerText = title;

    const divfortaskdescriptioninput = document.createElement('div');
    divfortaskdescriptioninput.innerText = description;
    divfortaskdescriptioninput.classList.add('descriptiontext');

    const divfortaskresponsibleinput = document.createElement('div');
    divfortaskresponsibleinput.innerText = responsible;
    divfortaskresponsibleinput.classList.add('taskresponsible');

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
    divfortaskdatedueinput.classList.add('datedue');

    const deletebutton = document.createElement('img');
    deletebutton.classList.add('deletebutton');
    deletebutton.src = 'icons/delete.svg';
    deletebutton.id = title;

    listedtasks.appendChild(taskchecked);
    tasktitleanddescriptionbox.appendChild(divfortasktitleinput);
    tasktitleanddescriptionbox.appendChild(divfortaskdescriptioninput);
    listedtasks.appendChild(tasktitleanddescriptionbox);
    listedtasks.appendChild(divfortaskresponsibleinput);
    listedtasks.appendChild(btnfortaskpriority);
    listedtasks.appendChild(divfortaskdatedueinput);
    listedtasks.appendChild(deletebutton);

    maincontent.appendChild(listedtasks);
}

function showProjects(title) {
    const allprojects = document.getElementById('listedprojects');

    const listedproject = document.createElement('div');
    listedproject.id = title;
    listedproject.classList.add('listedproject');
    const arrow = document.createElement('img');
    arrow.src = 'icons/arrow.svg';
    arrow.classList.add('icons');
    const listedprojecttitle = document.createElement('div');
    listedprojecttitle.classList.add('listedprojecttitle');
    listedprojecttitle.innerText = title;

    listedproject.appendChild(arrow);
    listedproject.appendChild(listedprojecttitle);
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

export { addProjectBox, addTaskBox, addDeleteProjectOption, appendTaskToShownTasks, showTasks, showProjects, clearMainContent };