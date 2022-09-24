let obj = {
	one: 1,
	two: 2,
	three: 3,
};
// let one = obj.one;
// let two = obj.two;
// let three = obj.three;
let [one, two, thre] = Object.values(obj);
console.log(one, two, thre);
