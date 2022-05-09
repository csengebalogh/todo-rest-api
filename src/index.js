const cl = console.log

import { getTasks } from "./modules/index.js"

if (document.URL.includes('tasks.html')) {
  getTasks()
}

