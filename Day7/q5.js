// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder: V = πr2h where r is the radius and h is the height of the cylinder.
// Try To Attempt: Difficult Level Increased


var cylinder = {
	r: 2.98452874,
	h: 10.938274892,
};
const v = new Number((3.14 * cylinder.r * 2 * cylinder.h).toFixed(4));
console.log(`Volume = ${v}`);