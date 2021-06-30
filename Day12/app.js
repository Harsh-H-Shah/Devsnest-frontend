const container = document.querySelector(".tasks");
const addBtn = document.querySelector(".addBtn");
const text = document.querySelector("#myInput");
const removeAllBtn = document.querySelector(".removeAll");
const removeFirstBtn = document.querySelector(".removeFirst");

addBtn.addEventListener("click", addtask);

function addtask(e){
    console.log("Hello");
    if (e.target.name === "plusButton" && text.value.length > "0") {
		const div = document.createElement("div");
		div.innerHTML = text.value;
		div.classList.add("item");
    
        container.appendChild(div);
		text.value = "";
    }
}

removeFirstBtn.addEventListener("click", removeFirst);

removeAllBtn.addEventListener("click", removeAll);

function removeAll(e){
  console.log("Hi there");
  for(let i=0;i<10;i++){
    container.removeChild(container.lastChild);
  }
}

function removeFirst(e){
  console.log("what's up?");
  container.removeChild(container.firstChild);
}