// 6.😎
// const array1 = [12, 13, 14, 4, 15].map((curElm) => {
// 	return { type: curElm % 2 == 0 ? "Even" : "Odd", value: curElm };
// });
// console.log(array1);

// 2.😎
// const fibonacci = (n) => {
// 	var t1 = 0;
// 	var t2 = 1;
// 	for (var i = 2; i < n; i++) {
// 		var t3 = t1 + t2;
// 		t1 = t2;
// 		t2 = t3;
// 	}
// 	return t3;
// };
// console.log(fibonacci(5));

// 3.😎
// const checkParenthesis = (eq) => {
// 	let stack = [];
// 	for (const i of eq.split("")) {
// 		if (stack.length == 0 && i == ")") {
// 			return false;
// 		} else if (i == "(") {
// 			stack.push("(");
// 		} else if (stack.length != 0 && i == ")") {
// 			if (stack[stack.length - 1] == "(") {
// 				stack.pop();
// 			}
// 		}
// 	}
// 	if (stack.length != 0) {
// 		return false;
// 	}
// 	return true;
// };
// console.log(checkParenthesis("(a+b)+((c-d)-e)"));
// console.log(checkParenthesis("(a+b) + (c-d)-e)"));

// 4.😎
// var arr1 = ['January', 'February', 'March', 'April'];
// var arr2 = ['May', 'June', 'July', 'August'];

// const input = (array1, array2) => {
//     var arr3 = array1.concat(array2);
//     return arr3.sort();
// }

// console.log(input(arr1, arr2));

// 5.😎
// const array1 = [4,169,144,25];

// let newArr = array1.map((curElm) => {
//     return Math.sqrt(curElm);
// })
// console.log(newArr);

// 7.😎
// const monthName = (index) => {
// 	return [
// 		"January",
// 		"Febuary",
// 		"March",
// 		"April",
// 		"May",
// 		"June",
// 		"July",
// 		"August",
// 		"September",
// 		"October",
// 		"November",
// 		"December",
// 	][index - 1];
// };
// const dateConversion = (date) => {
// 	let dateArr = date.split("/");
// 	return `${dateArr[0]}th ${monthName(dateArr[1])} ${dateArr[2]}`;
// };
// console.log(dateConversion("16/9/2022"));

// 8.😎
// const timeStrToMiliseconds = (timeStr) => {
// 	let timeArr = timeStr.split(":");
// 	let timeMilliseconds =
// 		timeArr[0] * 60 * 60 * 1000 + timeArr[1] * 60 * 1000 + timeArr[2] * 1000;
// 	return timeMilliseconds;
// };
// const timeDependentFunction = (arr, timeStr) => {
// 	setTimeout(() => {
// 		arr.reverse();
// 		console.log(arr);
// 	}, timeStrToMiliseconds(timeStr));
// };

// timeDependentFunction([1, 2, 3], "0:0:1");

// 9.😎
// const convert2Dto1D = (arr) => {
// 	return arr.flat();
// };
// console.log(convert2Dto1D([1, [2, 3]]));

// 10. 😎
// var str = "Hello world! I love you 3000!";

// var newStr = (str) => {
// 	var str2 = "";
// 	for (var i = 0; i < str.length; i++) {
// 		if (
// 			(str[i] >= "a" && str[i] <= "z") ||
// 			(str[i] >= "A" && str[i] <= "Z") ||
// 			str[i] == " "
// 		) {
// 			str2 = str2 + str[i];
// 		}
// 	}
// 	return str2;
// };

// console.log(newStr(str));

// 1.😎
// let arr = [1, 2, 3, 4].reverse();
// console.log(arr);
