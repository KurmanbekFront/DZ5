const input = document.querySelector("#input");
const createButton = document.querySelector("#create_button");
const todoList = document.querySelector("#todo_list");

const createTodo = () => {
    const div = document.createElement("div");
    const text = document.createElement("h3");
    const buttonsDiv = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    if (input.value.trim() === "") return alert("Не должно быть пусто!");

    div.setAttribute("class", "block_text");
    text.innerHTML = input.value;

    buttonsDiv.setAttribute("class", "buttons_div")
    editBtn.setAttribute("class", "edit_button")
    deleteBtn.setAttribute("class", "delete_button")
    editBtn.innerHTML = "edit"
    deleteBtn.innerHTML = "delete"

    buttonsDiv.append(editBtn, deleteBtn)
    div.append(text, buttonsDiv);
    todoList.append(div)

    input.value = "";

    editBtn.onclick = () => {
        let editedText = prompt("edit")
        if (editedText === "") return alert("Не должно быть пусто!") 
        text.innerHTML = editedText;
    }

    deleteBtn.onclick = () => {
        div.remove(buttonsDiv)
    }
}

createButton.onclick = () => createTodo();

// createButton.addEventListener("click", createTodo)

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") return createTodo(); 
})


