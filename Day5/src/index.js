const firstnum = document.getElementById("first");
const secondnum = document.getElementById("second");
const buttonclicked = document.getElementById("btn-container");
const result = document.getElementById("result");

buttonclicked.addEventListener("click", doTask);

function doTask(e){
    const firstval = Number(firstnum.value);
    const secondval = Number(secondnum.value);
    const operation = e.target.innerText;
    switch (operation) {
        case "Add +":
            Ans(firstval + secondval);
            break;
        case "Substract -":
            Ans(firstval - secondval);
            break;
        case "Multiply *":
            Ans(firstval * secondval);
            break;
        case "Divide /":
            Ans(firstval / secondval);
            break;
        default:
            alert("Wrong operand");
            break;
    }
}

function Ans(r){
    result.innerText = `The result of the operation = ${r}`;
}