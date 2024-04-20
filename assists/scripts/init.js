document.addEventListener("DOMContentLoaded", function () {
    kanban = JSON.parse(localStorage.getItem("kanban"))
    if(!kanban){
        kanban = {
            todo: [],
            doing: [],
            done: []
        }
    }
    const { todo, doing, done } = kanban
    createItems(todo, doing, done)
})

const createItems = (todo, doing, done) => {
    todo.forEach(item => {
        const newTask = createNewTask(item)
        todoLane.appendChild(newTask)
    })

    doing.forEach(item => {
        const newTask = createNewTask(item)
        doingLane.appendChild(newTask)
    })

    done.forEach(item => {
        const newTask = createNewTask(item)
        doneLane.appendChild(newTask)
    })
}
