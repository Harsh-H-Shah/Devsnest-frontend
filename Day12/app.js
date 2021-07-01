const container = document.querySelector(".tasks");
const addBtn = document.querySelector(".addBtn");
const text = document.querySelector("#myInput");
const removeAllBtn = document.querySelector(".removeAll");
const removeFirstBtn = document.querySelector(".removeFirst");
let count = 0;
let todo = {};

addBtn.addEventListener("click", addtask);

let initial = () => {localStorage.getItem("todo");
container.innerHTML = initial;}

function addtask(e){
    console.log("Hello");
    if (e.target.name === "plusButton" && text.value.length > "0") {
		const div = document.createElement("div");
		div.innerHTML = text.value;
		div.classList.add("item");
    count++;
    
    container.appendChild(div);
		text.value = "";
    localStorage.setItem("todos", container.innerHTML);
    }
}

removeFirstBtn.addEventListener("click", removeFirst);

removeAllBtn.addEventListener("click", removeAll);

function removeAll(e){
  console.log("Hi there");
  if(count>0){
    for(let i=0;i<count;i++){
      container.removeChild(container.lastChild);
    }
    localStorage.removeItem("todos")
  }
}

function removeFirst(e){
  console.log("what's up?");
  if(count>0){
    container.removeChild(container.firstChild);
    count--;
    // localStorage.setItem("todos", container.innerHTML);
  }
}