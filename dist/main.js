(()=>{"use strict";let t=[],e=[],n=2,d=!1;!function(){const t=document.getElementById("sidebar"),e=document.createElement("input");e.classList.add("projecttitleinput"),e.placeholder="Project Title";const n=document.createElement("button");n.innerText="Add Project",n.classList.add("addprojbutton"),t.appendChild(e),t.appendChild(n)}(),document.querySelector(".addprojbutton").addEventListener("click",(()=>{const s={getTitle:document.querySelector(".projecttitleinput").value};t.push(s),function(){const t=document.getElementById("maincontent"),e=document.createElement("div"),s=document.createElement("div");s.innerText="Task Title:";const i=document.createElement("input");i.classList.add("tasktitleinput");const c=document.createElement("div");c.innerText="Description:";const o=document.createElement("input");o.classList.add("taskdescriptioninput");const a=document.createElement("div");a.innerText="Assigned Person:";const u=document.createElement("input");u.classList.add("taskresponsibleinput");const r=document.createElement("div");r.innerText="Priority:";const l=document.createElement("button");l.id="taskprioritybutton",l.innerText="Low",l.classList.add("taskprioritybuttonoff");const p=document.createElement("div");p.innerText="Task given on:";const m=document.createElement("input");m.setAttribute("type","date"),m.classList.add("taskdategiveninput");const k=document.createElement("div");k.innerText="Task due on:";const b=document.createElement("input");b.setAttribute("type","date"),k.classList.add("taskdatedueinput");const h=document.createElement("button");h.classList.add("taskcheckedbuttonoff");const L=document.createElement("button");L.classList.add("addtaskbutton"),L.innerText="Add New Task",e.appendChild(s),e.appendChild(i),e.appendChild(c),e.appendChild(o),e.appendChild(a),e.appendChild(u),e.appendChild(r),e.appendChild(l),e.appendChild(p),e.appendChild(m),e.appendChild(k),e.appendChild(b),e.appendChild(h),e.appendChild(L),t.appendChild(e),function(){const t=document.getElementById("taskprioritybutton");t.addEventListener("click",(()=>{"taskprioritybuttonoff"==t.classList?(t.innerText="High",t.classList.add("taskprioritybuttonon"),t.classList.remove("taskprioritybuttonoff"),n=1):"taskprioritybuttonon"==t.classList&&(t.innerText="Low",t.classList.add("taskprioritybuttonoff"),t.classList.remove("taskprioritybuttonon"),n=2)}))}(),function(){const t=document.querySelector(".taskcheckedbuttonoff");t.addEventListener("click",(()=>{"taskcheckedbuttonoff"===t.classList?(t.classList.add("taskcheckedbuttonon"),t.classList.remove("taskcheckedbuttonoff"),d=!0):"taskcheckedbuttonon"===t.classList&&(t.classList.add("taskcheckedbuttonoff"),t.classList.remove("taskcheckedbuttonon"),d=!1)}))}()}(),document.querySelector(".addtaskbutton").addEventListener("click",(()=>{const t=document.querySelector(".tasktitleinput").value,s=document.querySelector(".taskdescriptioninput").value,i=document.querySelector(".taskresponsibleinput").value,c=document.querySelector(".taskdatedueinput").value,o=document.querySelector(".taskdategiveninput").value,a=((t,e,n,d,s,i,c)=>({getTitle:t,getDescription:e,getResponsible:n,getPriority:d,getDategiven:s,getDuedate:i,isChecked:c}))(t,s,i,n,o,c,d);e.push(a)}))}))})();