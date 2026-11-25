// data type

// ! 1. primitive

/*  
1. String 
2. Number
3. Boolean
6. Undefined && Null 
5. Symbol
4. BigInt
*/

//  1. String ["", '', ``]

// console.log(`hello ${name}`);

let name = "khan";

console.log(`hello ${name}`);

// 2. Number

var num = 1.9;

// 3. Boolean

var flag = false;

flag = true;

console.log(typeof undefined); // 0

// 4. Symbol

var number_1 = Symbol("Rahul"); // Axy56
var number_2 = Symbol("Rahul"); // Azl00

console.log(number_1 == number_2);

// 5. BigInt

var numB_1 = 826262718617126858n;
console.log("🚀 ~ numB_1:", typeof numB_1);
console.log("🚀 ~ numB_1:", numB_1 + 1n);

function naam() {
  let xyz="khan"
}

console.log("global scope main ", xyz)
naam()