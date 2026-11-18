//2. non-primitive

/* 
1. Function ()
    namefunction
    arrow 
    callback

2. Array []
3. Object {}
4. Date && Regex

*/

/* var let const  */
// global {}

/* const name_1 = "mehfooz";

name_1= 6
console.log(name_1); */

// var name_1 ="khan"

// console.log(globalThis.name_1)
// console.log(typeof this)
// console.log(this.name_1)

// {
//     name_1:"khan"
// }

/* function sum() {
  var val = "local";
  console.log("hello function ", val);
}

console.log("hello function ", val);
//   console.log("hello function ", globalThis);

sum(); */

/* const sum = () => {
  console.log("hello hacker");
};

sum = ()  => {
  console.log("hello hacker");
};
sum();
 */

/* const sum = (a,b) => {
  console.log(a + b);
  return "done"
};

console.log(sum(3, 7));
 */

// TDZ start 

console.log("🚀 ~ name:", name) // undefined || reffrence error 

// TDZ end 

let name ="xyz";

console.log("🚀 ~ name:", name) // xyz
