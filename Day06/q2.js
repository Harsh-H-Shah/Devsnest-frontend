// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

function array_Clone(array) {
	let arr1 = [];
    array.forEach(element => {
        arr1.push(element);
    });
	return arr1;
}

console.log(array_Clone([10, 5, 6, 19]));
console.log(array_Clone([43, 1, 9, [2,5],[6,8,9]]));