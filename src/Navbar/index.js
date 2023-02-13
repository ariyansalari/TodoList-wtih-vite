import "./index.css"

const Navbar=()=>{
    const taskElement=document.createElement("div");
    taskElement.classList="taskElement";
    const task=document.createElement("input");
    task.type="text";
    task.placeholder="ENTER YOUR NAME"
    task.classList="Task";
    const Taskbutton=document.createElement("button");
    Taskbutton.className="Task-button"
    Taskbutton.innerText="Add task";




    taskElement.appendChild(task);
taskElement.appendChild(Taskbutton);

const Arrayform=[];

const ReadLc=()=>{
    const hasTodo=localStorage.getItem()
    const pars=JSON.parse()
}



Taskbutton.addEventListener("click",(e)=>{
    e.preventDefault();
    const form={
        id:Date.now(),
        username:task.value

    };


})

     return taskElement
}

export default Navbar;