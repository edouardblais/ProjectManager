import { addTask, showTasks, showProjects, appendTaskToShownTasks, addDeleteProjectOption, clearMainContent } from "./dom.js";
import { addDays, format, isWithinInterval } from "date-fns";
import parseISO from "date-fns/parseISO";

const logic = () => {
    let projectlist = [];
    let tasklist = [];

    const Project = (title) => {
    
        const getTitle = title;
    
        return { getTitle };
    };
    
    const Task = (title, description, responsible, priority, duedate, associatedproject, notchecked) => {
    
        const getTitle = title;
        const getDescription = description;
        const getResponsible = responsible;
        const getPriority = priority;
        const getDuedate = duedate;
        const getAssociatedproject = associatedproject;
        let isChecked = notchecked;
    
        return { getTitle, getDescription, getResponsible, getPriority, getDuedate, getAssociatedproject, isChecked };
    
    };

    function priorityToggle() {
        document.addEventListener(('click'), (event) => {
            if (event.target.classList.contains('prioritylow')) {
                event.target.innerText = 'High';
                event.target.classList.add('priorityhigh');
                event.target.classList.remove('prioritylow');
                tasklist.forEach((task) => {
                    if (event.target.id === task.getTitle) {
                        task.getPriority = 'High';
                        localStorage.setItem('tasks', JSON.stringify(tasklist));
                    };
                });
            } else if (event.target.classList.contains('priorityhigh')) {
                event.target.innerText = 'Low';
                event.target.classList.add('prioritylow');
                event.target.classList.remove('priorityhigh');
                tasklist.forEach((task) => {
                    if (event.target.id === task.getTitle) {
                        task.getPriority = 'Low';
                        localStorage.setItem('tasks', JSON.stringify(tasklist));
                    };
                });
            };
        });
    };
    
    function checkedToggle() {
        document.addEventListener(('click'), (event) => {
            if (event.target.classList.contains('circle')) {
                event.target.src = 'icons/check.svg'
                event.target.classList.add('check');
                event.target.classList.remove('circle');
                tasklist.forEach((task) => {
                    if (event.target.id === task.getTitle) {
                        task.isChecked = true;
                        localStorage.setItem('tasks', JSON.stringify(tasklist));
                    };
                });
            } else if (event.target.classList.contains('check')) {
                event.target.classList.add('circle');
                event.target.classList.remove('check');
                event.target.src = 'icons/circle.svg'
                tasklist.forEach((task) => {
                    if (event.target.id === task.getTitle) {
                        task.isChecked = false;
                        localStorage.setItem('tasks', JSON.stringify(tasklist));
                    };
                });
            };
        });
    };

    function inputNewProject() {
        const addprojectbutton = document.querySelector('.addprojbutton');
    
        addprojectbutton.addEventListener(('click'), () => {
            let projecttitleinput = document.getElementById('projecttitleinput');
            const inputproject = Project(projecttitleinput.value);
            projectlist.push(inputproject);
            localStorage.setItem('projects', JSON.stringify(projectlist));
            projecttitleinput.value = '';
            displayProjects();
        });
    };

    function displayProjects() {
        const listedprojects = document.getElementById('listedprojects');
        listedprojects.innerHTML='';
        getProjectsFromStorage();
        projectlist.forEach((project) => {
            showProjects(project.getTitle);
            addDeleteProjectOption(project.getTitle);
        });
    }

    function getProjectsFromStorage() {
        if (localStorage.getItem('projects') === null) {
            projectlist = [];
        } else {
            let storedprojects = JSON.parse(localStorage.getItem('projects'));
            projectlist = storedprojects;
        };
    };

    function viewChosenTasks() {
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('listedprojects')) {
                clearMainContent();
                addTask();
                getTasksFromStorage();
                displayTasksForChosenProject(event.target.id);
                inputNewTask(event.target.id);
            } else if (event.target.id === 'important') {
                clearMainContent();
                getTasksFromStorage();
                displayImportantTasks();
            } else if (event.target.id === 'alltasks') {
                clearMainContent();
                getTasksFromStorage();
                displayAllTasks();
            } else if (event.target.id === 'today') {
                clearMainContent();
                getTasksFromStorage();
                displayTasksForToday();
            } else if (event.target.id === 'thisweek') {
                clearMainContent();
                getTasksFromStorage();
                displayTasksForThisWeek();
            };
        });
    }

    function getTasksFromStorage() {
        if (localStorage.getItem('tasks') === null) {
            tasklist = [];
        } else {
            let storedtasks = JSON.parse(localStorage.getItem('tasks'));
            tasklist = storedtasks;
        };
    };

    function displayTasksForChosenProject(id) {
        tasklist.forEach((task) => {
            if (task.getAssociatedproject == id) {
                showTasks(task.getTitle, task.getDescription, task.getResponsible, task.getPriority, task.getDuedate, task.isChecked);
            };
        });
    };

    function displayImportantTasks() {
        tasklist.forEach((task) => {
            if (task.getPriority == 'High') {
                showTasks(task.getTitle, task.getDescription, task.getResponsible, task.getPriority, task.getDuedate, task.isChecked);
            };
        });
    };

    function displayAllTasks() {
        tasklist.forEach((task) => {
            showTasks(task.getTitle, task.getDescription, task.getResponsible, task.getPriority, task.getDuedate, task.isChecked);
        });
    };

    function displayTasksForToday() {
        let today =  Date.parse(format(new Date(), "yyyy-MM-dd")); 
        tasklist.forEach((task) => {
            if (today == Date.parse(task.getDuedate)) {
                showTasks(task.getTitle, task.getDescription, task.getResponsible, task.getPriority, task.getDuedate, task.isChecked);
            };
        });
    };

    function displayTasksForThisWeek() {
        tasklist.forEach((task) => {
            let date = parseISO(task.getDuedate);
            if (checkIfNextweek(date)) {
                showTasks(task.getTitle, task.getDescription, task.getResponsible, task.getPriority, task.getDuedate, task.isChecked);
            };
        });
    };

    function checkIfNextweek(taskdate) {
        let nextweek = addDays(new Date(), 8);
        let today = new Date();
        return isWithinInterval(taskdate, { start: today, end: nextweek });
    };

    function inputNewTask(id) {
        const addtaskbutton = document.querySelector('.addtaskbutton');
        const associatedprojectinput = id;
    
        addtaskbutton.addEventListener('click', () => {
            let taskttitleinput = document.querySelector('.tasktitleinput');
            let taskdescriptioneinput = document.querySelector('.taskdescriptioninput');
            let taskresponsibleinput = document.querySelector('.taskresponsibleinput');
            let taskdatedueeinput = document.querySelector('.taskdatedueinput');
            let taskpriority = document.querySelector('.taskpriority');
            const inputtask = Task(taskttitleinput.value, taskdescriptioneinput.value, taskresponsibleinput.value, taskpriority.innerText, taskdatedueeinput.value, associatedprojectinput, false);
            tasklist.push(inputtask);
            appendTaskToShownTasks();
            localStorage.setItem('tasks', JSON.stringify(tasklist));
            taskttitleinput.value = '';
            taskdescriptioneinput.value = '';
            taskresponsibleinput.value = '';
            taskdatedueeinput.value = '';
            taskpriority.innerText = 'Low';
        });
    };

    function deleteTask() {
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('deletebutton')) {
                tasklist.forEach((task) => {
                    if (event.target.id === task.getTitle) {
                        const index = tasklist.indexOf(task);
                        tasklist.splice(index, 1);
                        localStorage.setItem('tasks', JSON.stringify(tasklist));
                        event.target.parentNode.style.display = 'none';
                    };
                });
            };
        });
    };

    function deleteproject() {
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteproject')) {
                projectlist.forEach((project) => {
                    if (event.target.id === project.getTitle) {
                        const index = projectlist.indexOf(project);
                        projectlist.splice(index, 1);
                        localStorage.setItem('projects', JSON.stringify(projectlist));
                        event.target.parentNode.style.display = 'none';
                    };
                });
                clearMainContent(); 
                tasklist.forEach((task) => {
                    if (event.target.id === task.getAssociatedproject) {
                        const indextask = tasklist.indexOf(task);
                        tasklist.splice(indextask, 1);
                        localStorage.setItem('tasks', JSON.stringify(tasklist)); 
                    };
                });    
            };
        });
    };

    inputNewProject();
    priorityToggle();
    checkedToggle();
    displayProjects();
    viewChosenTasks();
    deleteTask();
    deleteproject();

};

export { logic };