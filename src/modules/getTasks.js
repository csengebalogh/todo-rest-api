let host = 'http://localhost:3000'

import renderTasks from "./renderTasks.js"



function getTasks() {
  let endpoint = 'tasks'

  fetch(`${host}/${endpoint}`)
    .then(res => res.json())
    .then(res => renderTasks(res))
}

export default getTasks