

let todoAddBtn = document.getElementById("todoBtn")
let todo = document.getElementById("todoInput")
let clearCompletedBtn = document.getElementById("clearcompletedBTN")
let container = document.getElementById("allTodosContainer")
let allTodos = []   

todoAddBtn.addEventListener("click",handleSubmit) 
// adding newtodo
function handleSubmit(){
    let todoText = todo.value.trim()
    if(todoText){
        let newTodo = {title : todoText,completed:false}
        allTodos.push(newTodo)
        displayTodos()
        todo.value = ""
    }
}

function displayTodos(){
    container.innerHTML = ""
    if(allTodos.length>0){
        console.log("Inside Display function")
        allTodos.map((todo,idx)=>{
            let div = document.createElement("div")
            div.innerHTML = `
            <p>Title : ${todo.title}</p>
            <p id="completedTask"> Completed : ${todo.completed} </p>
            `
            container.append(div)
        })
    }else {
        container.innerHTML = "<p> No Todos</p>"
    }
}


