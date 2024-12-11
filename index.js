let toDoInput = document.getElementById("toDo-Input");
const toDoButton = document.getElementById("toDo-Button");
const toDos = document.getElementById("to-Dos");
const deleteIcon = document.getElementById("delete-Icon");
const toDoForm = document.getElementById("toDo-Form");

let toDoArray = [];

function generateRandomID() {
  return Math.random().toString(36).substr(2, 9) + "-" + Date.now();
}

function renderToDos() {
  toDos.innerHTML = "";
  toDoArray.forEach((item) => {
    toDos.innerHTML += `
            <li class="relative text-white font-semibold text-lg bg-white/20 py- mt-3 text-left pl-3 rounded-md flex justify-between items-center">
                ${item.value}
                <button class="bg-teal-800 text-white rounded hover:bg-teal-700 font-semibold text-center pl-5 pr-5 py-2 text-sm" onclick="deleteTodo('${item.id}')">
                    Delete
                </button>   
            </li>`;
  });
}

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const randomID = generateRandomID();
  if (toDoInput.value.trim() == "") {
    console.log("empty");
  } else {
    let inputValue = toDoInput.value;

    let todoObject = {
      id: randomID,
      value: inputValue,
    };

    toDoArray.push(todoObject);
    toDoInput.value = "";
    console.log(toDoArray);

    toDos.innerHTML = "";
    renderToDos();
  }
});

function deleteTodo(id) {
  console.log(id);
  toDoArray = toDoArray.filter((item) => item.id !== id);

  renderToDos();
  console.log("test delete");
}

renderToDos();
