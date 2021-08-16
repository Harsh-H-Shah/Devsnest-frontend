// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function fevicol(array){
    return `${array.join(',')}\n${array.join('+')}`;
}

console.log(fevicol(["Red", "Green", "White", "Black"]));