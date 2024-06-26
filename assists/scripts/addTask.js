const createNewTask = (value) => {
    const newTask = document.createElement("p")

    newTask.classList.add("task")
    newTask.setAttribute("draggable", "true")
    newTask.innerText = value

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging")
    })
    
    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging")
    })
    
    return newTask
}
