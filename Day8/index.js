const frame = document.querySelector('.frame');
const defaultWhite = [
	129, 130, 148, 149, 150, 151, 167, 168, 169, 170, 171, 172, 186, 187, 189,
	190, 192, 193, 206, 207, 208, 209, 210, 211, 212, 213, 228, 231, 247, 249,
	250, 252, 266, 268, 271, 273,
];

function addElements(){
    var div = document.createElement('div');
    div.style.height = "18px";
    div.style.width = "18px";
    div.style.backgroundColor = "rgb(222, 71, 56)";
    div.className = "pixel";
    div.style.zIndex = "1";
    div.style.border = "1px rgb(230, 90, 70) solid"
    return div;
}

for(let i=0;i<400;i+=1){
    frame.appendChild(addElements());
}

frame.addEventListener("click", (e) => {
    let color = e.target.style.backgroundColor;
    let borderColor = e.target.style.borderColor;
    if (color === "rgb(222, 71, 56)"){
        color = "white";
        borderColor = "white"
    }
    else{
        color = "rgb(222, 71, 56)";
        borderColor = "rgb(230, 90, 70)";
    }
    e.target.style.backgroundColor = color;
    e.target.style.borderColor = borderColor;
} );

const pixel = document.querySelectorAll(".pixel");
for (let i = 0; i < 400; i++) {
	if (defaultWhite.includes(i)) {
		pixel[i].style.backgroundColor = "white";
		pixel[i].style.borderColor = "rgb(255, 255, 255)";
	}
}

