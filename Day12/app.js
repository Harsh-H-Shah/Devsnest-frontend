const container = document.querySelector(".tasks");
const addBtn = document.querySelector(".addBtn");
const text = document.querySelector("#myInput");
const removeAllBtn = document.querySelector(".removeAll");
const removeFirstBtn = document.querySelector(".removeFirst");
let count = 0;

addBtn.addEventListener("click", addtask);

function addtask(e){
    console.log("Hello");
    if (e.target.name === "plusButton" && text.value.length > "0") {
		const div = document.createElement("div");
		div.innerHTML = text.value;
		div.classList.add("item");
    count++;
    
        container.appendChild(div);
		text.value = "";
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
  }
}

function removeFirst(e){
  console.log("what's up?");
  if(count>0){
    container.removeChild(container.firstChild);
    count--;
  }
}