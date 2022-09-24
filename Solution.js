// 6.
const array1 = [12, 13, 14, 4, 15].map((curElm) => {
	return { type: curElm % 2 == 0 ? "Even" : "Odd", value: curElm };
});
console.log(array1);
