import { addTask, appendProjectToSidebar, appendTask, showTasks, showProjects } from "./dom.js";
import { addDays, format, isEqual, isWithinInterval, toDate } from "date-fns";
import parseISO from "date-fns/parseISO";
import daysToWeeks from "date-fns/daysToWeeks/index";

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
            } else if (event.target.classList.contains('priorityhigh')) {
                event.target.innerText = 'Low';
                event.target.classList.add('prioritylow');
                event.target.classList.remove('priorityhigh');
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
                    };
                });
            } else if (event.target.classList.contains('check')) {
                event.target.classList.add('circle');
                event.target.classList.remove('check');
                event.target.src = 'icons/circle.svg'
                tasklist.forEach((task) => {
                    if (event.target.id === task.getTitle) {
                        task.isChecked = false;
                    };
                });
            };
        });
    };

    function inputNewProject() {
        const addprojectbutton = document.querySelector('.addprojbutton');
    
        addprojectbutton.addEventListener(('click'), () => {
            const projecttitleinput = document.querySelector('.projecttitleinput').value;
            const inputproject = Project(projecttitleinput);
            projectlist.push(inputproject);
            localStorage.setItem('projects', JSON.stringify(projectlist));
            appendProjectToSidebar();
        });
    };

    function displayProjects() {
        getProjectsFromStorage();
        projectlist.forEach((project) => {
            showProjects(project.getTitle);
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
        const maincontent = document.getElementById('maincontent');

        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('listedprojects')) {
                maincontent.innerHTML = '';
                addTask();
                getTasksFromStorage();
                displayTasksForChosenProject(event.target.id);
                inputNewTask(event.target.id);
            } else if (event.target.id === 'important') {
                maincontent.innerHTML = '';
                getTasksFromStorage();
                displayImportantTasks();
            } else if (event.target.id === 'alltasks') {
                maincontent.innerHTML = '';
                getTasksFromStorage();
                displayAllTasks();
            } else if (event.target.id === 'today') {
                maincontent.innerHTML = '';
                getTasksFromStorage();
                displayTasksForToday();
            } else if (event.target.id === 'thisweek') {
                maincontent.innerHTML = '';
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
    
        addtaskbutton.addEventListener(('click'), () => {
            const taskttitleinput = document.querySelector('.tasktitleinput').value;
            const taskdescriptioneinput = document.querySelector('.taskdescriptioninput').value;
            const taskresponsibleinput = document.querySelector('.taskresponsibleinput').value;
            const taskdatedueeinput = document.querySelector('.taskdatedueinput').value;
            const taskpriority = document.querySelector('.taskpriority').innerText;
            const inputtask = Task(taskttitleinput, taskdescriptioneinput, taskresponsibleinput, taskpriority, taskdatedueeinput, associatedprojectinput, false);
            tasklist.push(inputtask);
            appendTask();
            localStorage.setItem('tasks', JSON.stringify(tasklist));
        });
    };

    inputNewProject();
    priorityToggle();
    checkedToggle();
    displayProjects();
    viewChosenTasks();

};

export { logic };