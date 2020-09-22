// function sum() {
//     let args = Array.from(arguments);
//     let result = 0;
//     for (let k = 0; k < args.length; k++) {
//         result += args[k]        
//     }
//     return result;
// }

function sum(...args) {
    debugger
    let result = 0;
    for (let k = 0; k < args.length; k++) {
        result += args[k]
    }
    return result;
}


///////////////////////////////////////////////


// Cat.prototype.myColor = fnc

Function.prototype.myBind = function(context, ...bindArgs) {
    let func = this;

    return function(...callArgs) {
       return func.call(context, ...bindArgs, ...callArgs);
    }
}

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// // console.log(markov.says("meow", "Ned"));
// // // Markov says meow to Ned!
// // // true

// // // bind time args are "meow" and "Kush", no call time args
// // console.log(markov.says.myBind(pavlov, "meow", "Kush")());
// // // Pavlov says meow to Kush!
// // // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// console.log(markov.says.myBind(pavlov)("meow", "a tree"));
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// console.log(markov.says.myBind(pavlov, "meow")("Markov"));
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// console.log(notMarkovSays("meow", "me"));
// // Pavlov says meow to me!
// // true


// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30

function curriedSum(numArgs) {
    let numbers = [];
    let sum = 0;

    return function _curriedSum(num) {
        numbers.push(num);
        sum += num;
        if (numbers.length === numArgs) {
            return sum;
        }
        else {
            return _curriedSum;
        }
    };
}

const total = curriedSum(4);
console.log(total(5)(30)(20)(1))


// crazyFunc(1, 2, 3, 4, 5)
// curriedCrazyFunc = crazyFunc.curry(5)
// curriedCrazyFunc(1)(2)(3)(4)(5);

Function.prototype.curry = function (numArgs) {
    let args = [];
    let func = this;

    return function _curriedFunc(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            // return func(...args);
            return func.call(func, ...args);
        } else {
            return _curriedFunc;
        }
    };
}


let newSum = sum.curry(1);
newSum(89);














































