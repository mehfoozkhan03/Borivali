//  what is hoisting?

//  var | let | const

/* 

* scope's
1. Global {}
2. Lexical | Local | block

*/

/* var name = "mehfooz";

console.log("🚀 ~ name:1", name);

var name = "khan";
console.log("🚀 ~ name:2", name);

var name = "xyz";

console.log("🚀 ~ name:3", name); */

/* let name = "khan";

name = "mehfooz";
// let name= "sjvbshv";
console.log("🚀 ~ name: with let", name);

const name_1 = "Abhay"; // const use in function, mostly in arrow function

name_1 = "khan";
console.log("🚀 ~ name_1: with const ", name_1);
 */
//  =================================

/* try {
  function nameFunc() {
    var name_2 = "hello";

    console.log("🚀 ~ name_2:local", name_2);
  }
  console.log("🚀 ~ name_2:global", this.name_2);                                                      

  nameFunc();
} catch (error) {
  console.log("🚀 ~ error:", error);
}
 */

// console.log(password);

// let  name = " khan ";

const sum = (a, b) => {
//   console.log(a + b);
  return a + b;
};

// const ans = sum(2, 6);
// console.log("🚀 ~ ans:", ans);
console.log("🚀 ~ sum(2, 6):", sum(2, 6))
