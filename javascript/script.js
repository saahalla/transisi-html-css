let projects = [
  "Green House",
  "Cyber Punk",
  "E Commerce",
  "Easy Crypto",
  "Travel Apps",
  "Company Profile",
  "Landing Page",
  "Food Apps"
]

let task = [
  {
    check: false,
    content: "Create initial layout for homepage",
    status: 1
  },
  {
    check: true,
    content: "Fixing icons with transparen background",
    status: 2
  },
  {
    check: true,
    content: "Discussions regarding workflow improvement",
    status: 3
  },
  {
    check: true,
    content: "Create quotation for app redesign project",
    status: 4
  },
  {
    check: false,
    content: "Fixing icons with transparen background",
    status: 2
  },
]

/* Project List */
const projectList = document.getElementById('project-list');
const titleProject = document.getElementById('title-project');

/* Show Title Project */
titleProject.innerHTML = `Project (${projects.length})`

let list = '';
for(let i=0; i<projects.length; i++){
  arr = projects[i].split(" ")
  // console.log('arr', arr)
  title = arr[0].substr(0, 1) + arr[1].substr(0, 1) 
  // console.log("title",title)

  if(i === 5){
    list += `
      <div class="flex-item">
        <div class="project show-more">
          ${projects.length - 5}+
        </div>
        Show More
      </div>
    `
    break
  }
  list += `
    <div class="flex-item">
      <div class="project">
        ${title}
      </div>
      ${projects[i]}
    </div>
  `
}
/* inner html project list */
projectList.innerHTML = list
// console.log(list)

/* Task List */
const taskToday = document.getElementById('task-today');

function showTask(){
  let resultToday = '';
  for(let j=0; j<task.length; j++){
    if(task[j].status === 1){
      status = "Waiting"
      btn_class = "btn-waiting"
    }else if(task[j].status === 2){
      status = "In Progress"
      btn_class = "btn-inprogress"
    }else if(task[j].status === 3){
      status = "In Review"
      btn_class = "btn-inreview"
    }else if(task[j].status === 4){
      status = "Done"
      btn_class = "btn-done"
    }
  
    if(task[j].check === true){
      icon = "fa-check-circle"
    }else{
      icon = "fa-circle-thin"
    }
  
    resultToday += `
      <div class="col-12 col-s-12">
        <div class="col-2 col-s-2"><button class="btn-none"><i class="fa ${icon} fa-2x" style="color: green"></i></button></div>
        <div class="col-6 col-s-6"><label for="task">${task[j].content}</label></div>
        <div class="col-4 col-s-4"><button id="${j}" class="${btn_class} status-button">${status}</button></div>
      </div>
    `
  }
  
  taskToday.innerHTML = resultToday
  // console.log({taskToday})
}

showTask()

/* Add Task  */
const addButton = document.getElementById('add-button');
addButton.addEventListener("click", addTask);

function addTask(){
  task.push({
    check: true,
    content: "New task at " + new Date(),
    status: 1
  })
  showTask()
  // console.log("task:",task)
}
