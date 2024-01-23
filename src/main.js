import axios from 'axios';
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


// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// console.group('Bio:');
// console.log('My name is Kolade');
// console.warn("I don't like to be late");
// console.error('You came late');
// console.groupEnd();

const styles = `padding: 15px;
                background-color: #bcdb58;
                color: black`;

console.log('%c Hello, Everyone!', styles);


let searchParams = new URLSearchParams({
    key: "41527522-465889db431a6a06c19f4d10b",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
});


const fetchUsers = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};


// fetchUsers().then(result => console.log(result)).catch(error => console.log(error));


// https://newsapi.org/docs/get-started
// Your API key is: 499dfc64c0224a4895abf0e01e499bc7


const foo = async () => {
    console.log("Before await");

    const promiseValue = await new Promise(resolve => {
        setTimeout(() => resolve("second"), 1000)
    });

    console.log("After await 1", promiseValue);
};

foo(); // через 2 секунди виведеться в консоль  "After await" 5

// console.log("two" / "2");

// let kro = 5;
// console.log(Number.isNaN(kro));

// console.log('---');

// console.log("5" == 5);
// console.log('5' === 5);

// const A = {
//     con: "string",
//     i: 5,
// };

// const B = {
//     con: "string",
//     i: 5,
// };

// console.log(JSON.stringify(A) == JSON.stringify(B));
// console.log(A === B);

// console.log("isArray? ", Array.isArray(A));


// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 8);

// console.log(words);
// console.log(result);

// function isBigEnough(element, index, array) {
//     return element >= 10;
// }
// console.log([12, 5, 8, 130, 44]);
// console.log("Every more than 1? - ", [12, 5, 8, 130, 44].every((element) => element >= 1));
// console.log("Every more than 50? - ", [12, 54, 18, 130, 44].every((element) => element >= 50));
// console.log("Some more than 50? - ", [12, 5, 8, 130, 44].some((element) => element >= 50));
// console.log("Some more than 500? - ", [12, 54, 18, 130, 44].some((element) => element >= 500));

// const numbers = [1, 4, 9];
// const doubles = numbers.map((num) => num * 2);
// console.log(numbers, doubles);


// const array1 = [1, 2, 3, 4];

// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(sumWithInitial);
// Expected output: 10


// const i = [0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// });
// console.log(i);



// const array1 = [5, 44, 33, 12, 1, 2, 3, 4];
// const array2 = [5, 44];
// console.log(array1);
// console.log(array1.sort((a, b) => { return a - b }));
// console.log(array1.sort((a, b) => { return b - a }));


// function Product(name, price) {
//     this.name = name;
//     this.price = price;

//     if (price < 0) {
//         throw RangeError(
//             "Нельзя создать продукт " + this.name + " с отрицательной ценой",
//         );
//     }
// }

// function Food(name, price) {
//     Product.apply(this, [name, price]);
//     this.category = "еда";
// }

// Food.prototype = Object.create(Product.prototype);

// function Toy(name, price) {
//     Product.call(this, name, price);
//     this.category = "игрушка";
// }

// Toy.prototype = Object.create(Product.prototype);

// var cheese = new Food("фета", 5);
// var fun = new Toy("робот", 40);

// console.log(cheese);
// console.log(fun);

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// var mycar = new Car("Honda", "Accord", 1998);
// var a = mycar instanceof Car; // возвращает true
// var b = mycar instanceof Object; // возвращает true

// let lord = { car: [5, 4, 1, 53] };
// console.log(...lord.car);


