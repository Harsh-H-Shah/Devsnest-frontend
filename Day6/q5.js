// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function freq(params) {
	const newMap = new Map();
	for (let i = 0; i < params.length; i++) {
		if (newMap.has(params[i])) {
			newMap.set(params[i], newMap.get(params[i]) + 1);
		} else {
			newMap.set(params[i], 1);
		}
	}
	let maxValue = 0;
	let maxKey = 0;
	for (let [key, value] of newMap) {
		if (value > maxValue) {
			maxValue = value;
			maxKey = key;
		}
	}
	return {maxKey, maxValue};
}

const x = freq([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]);
console.log(`${x.maxKey} ( ${x.maxValue} times )`);