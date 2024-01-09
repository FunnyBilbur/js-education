
function sum(a) {

    return function (b) {
        return `${a} + ${b} = ${a + b}`; // берёт "a" из внешнего лексического окружения
    };

}

console.log(sum(5)(10));
console.log(sum(15)(110));

let x = 1;

function func() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 2;
}

func();