
// function sum(a) {

//     return function (b) {
//         return `${a} + ${b} = ${a + b}`; // берёт "a" из внешнего лексического окружения
//     };

// }

// console.log(sum(5)(10));
// console.log(sum(15)(110));

// let x = 1;
// function func() {
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 2;
// }
// func();

// function inBetween(a, b) {
//     // let c = 0;
//     return function (number) {
//         return number >= a && number <= b;
//     };

// }

// function inArray(arr) {
//     return function (number) {
//         return arr.includes(number);
//     };
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter((number) => number > 3));
// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([3, 6])));
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2


function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12