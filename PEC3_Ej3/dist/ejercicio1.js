"use strict";
// Sustituye /***/ por las instrucciones adeacuadas que cumplan las operaciones 
// y salidas indicadas en los comentarios.
function printArray(array) {
    //code to print the array on console
    console.log(array);
}
let array = [2, 3, 4];
console.log(array[0]); //2
array.splice(0, 1);
printArray(array); // 3,4
array.push(5);
printArray(array); // 3,4,5
console.log(array[2]); //5
array.splice(-1);
printArray(array); // 3,4
array.push(1);
printArray(array); // 3,4,1
array.unshift(8);
printArray(array); // 8,3,4,1
/** check if every number is greater than 3 */
let greaterConditon = (currentValue) => currentValue > 3;
let everyisgreater = array.every(greaterConditon);
console.log(everyisgreater); //false
/** check if every number is less than 10 */
let lessCondition = (currentValue) => currentValue < 10;
let everyisless = array.every(lessCondition);
console.log(everyisless); //true
console.log(array.sort()); //1,3,4,8
console.log(array.sort().reverse()); //8,4,3,1
