const cl = console.log
const table = document.getElementById('tableBody')
let host = 'http://localhost:3000'


function renderTasks(tasks) {
  tasks.forEach(task => {
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    let tdDesc = document.createElement('td')
    let tdDeadline = document.createElement('td')
    let tdIsDone = document.createElement('td')

    tdId.innerHTML = task.id
    tdDesc.innerHTML = task.desc
    tdDeadline.innerHTML = task.deadline
    if (task.isDone == true) {
      tdIsDone.innerHTML = 'Yes'
    } else {
      tdIsDone.innerHTML = 'No'
    }

    tr.appendChild(tdId)
    tr.appendChild(tdDesc)
    tr.appendChild(tdDeadline)
    tr.appendChild(tdIsDone)

    table.appendChild(tr)


  })


}

function getTasks() {
  let endpoint = 'tasks'

  fetch(`${host}/${endpoint}`)
    .then(res => res.json())
    .then(res => renderTasks(res))
}

getTasks()