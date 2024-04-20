const form = document.getElementById("todo-form")
const input = document.getElementById("todo-input")
const saveButton = document.getElementById("save")
const clearButton = document.getElementById("clear")

const todoLane = document.getElementById("todo-lane")
const doingLane = document.getElementById("doing-lane")
const doneLane = document.getElementById("done-lane")

const draggables = document.querySelectorAll(".task")
const droppable = document.querySelectorAll(".swin-lane")

let kanban = { }