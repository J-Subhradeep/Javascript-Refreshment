let arr = [1, 2, 3, 4, 5];
// let checkOddOrEven = (number) => {
// 	if (number % 2 == 0) {
// 		return "Even";
// 	} else {
// 		return "Odd";
// 	}
// };
// let strArr = ["a", "b", "c", "d", "e"];
let squares = arr.map((value, index) => {
	return value + "_" + index;
});
console.log(squares);
