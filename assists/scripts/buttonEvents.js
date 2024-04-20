form.addEventListener("submit", e => {
    e.preventDefault()

    const value = input.value
    if(!value) return

    const newTask = createNewTask(value)

    todoLane.appendChild(newTask)
    kanban.todo.push(value)
    
    input.value = ""
})

saveButton.addEventListener("click", () => {
    kanban.todo = [...todoLane.getElementsByTagName('p')].map(d => d.innerText)
    kanban.doing = [...doingLane.getElementsByTagName('p')].map(d => d.innerText)
    kanban.done = [...doneLane.getElementsByTagName('p')].map(d => d.innerText)
    localStorage.setItem("kanban", JSON.stringify(kanban))
})
clearButton.addEventListener("click", () => {
    localStorage.clear()
    location.reload()
})