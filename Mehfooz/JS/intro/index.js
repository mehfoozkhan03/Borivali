// data type

// ! 1. primitive

/*  
1. String 
2. Number
3. Boolean
6. Undefine && Null 
5. Symbol
4. BigInt
*/

/* String */

/* 

1. "str"
2. 'str'
3. `str` template literal {use when dynamic value ouccer}

 roshan enter
*/

var name = "aman";

console.log("result", `${name} enter`);

// # number

var num = 2;
console.log("🚀 ~ num:", typeof num);

//  Boolean

var flag = true;
console.log("🚀 ~ flag:", typeof flag);

//  Undefined && Null

/* 
hoisting [var, let, conts]
*/

console.log("🚀 ~ what is null and undefined:", typeof null, typeof undefined);

// Symbol

var stds = {
  name: "Rahul",
  ["id1"]: 101,
  ["id2"]: 101,
};

var s1 = Symbol(stds["id1"]);
var s2 = Symbol(stds["id2"]);

console.log("std", s1 == s2);

/* var com = s1 == s2;
console.log("🚀 ~ com:", com);

var Day_1 = Date.now();
console.log("🚀 ~ Day_1:", Day_1);

setTimeout(() => {
  var Day_2 = Date.now();
  console.log("🚀 ~ Day_2:", Day_2);

  var res = Day_1 === Day_2;
  console.log("🚀 ~ res:", res);
}, 100); */

// BigInt

var num1 = 9087624165242309n;
// var num1 = 9087624165912063;

var calc = num1 + 1n;
console.log("🚀~ calc:", calc);

//2. non-primitive

/* 
1. Function
2. Array
3. Object
4. Date && Regex

*/
