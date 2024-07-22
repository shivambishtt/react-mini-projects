// function createCounter(n) {
//     let counterValue = n
//     function incrementCounter() {
//         return counterValue++
//     }
//     return incrementCounter
// }
// const finalCountValue = createCounter(5)
// console.log(finalCountValue());
// console.log(finalCountValue());
// console.log(finalCountValue());

/*Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal"*/


// var expect = function (val) {
//     return {
//         toBe: (anotherVal) => {
//             if (val === anotherVal) {
//                 return true
//             }
//             else {
//                 throw new Error("Not Equal")
//             }
//         },
//         notToBe: (anotherVal) => {
//             if (val !== anotherVal) {
//                 return true
//             }
//             else {
//                 throw new Error("Equal")
//             }
//         }
//     }
// };
// const val = expect(6).notToBe(6)
// console.log(val);


/* Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.*/


// var createCounter = function (init) {
//     let currentValue = init
//     return {
//         increment: () => {
//             return ++currentValue

//         },
//         decrement: () => {
//             return --currentValue
//         },
//         reset: () => {
//             return currentValue = init
//         }
//     }
// };
// const value = createCounter(11)
// console.log(value.reset());


/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. */

// var map = function (arr, fn) {
//     let transformedArray = []
//     for (let i = 0; i < arr.length; i++) {
//         transformedArray[i] = fn(arr[i], i)
//     }
//     return transformedArray;
// };


// var filter = function (arr, fn) {
//     let filteredArray = []
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArray.push(arr[i])
//         }
//         return filteredArray
//     }
// };

var filter = function (arr, fn) {
    let filteredArray = []
    arr.forEach((elem, index) => {
        if (fn(elem, index)) {
            filteredArray.push(elem)
        }
    })
    return filteredArray
}