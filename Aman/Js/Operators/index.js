/*

1. Assignment Operators 
2. Arithmetic Operators
3. Logical Operators 
4. Comparison Operators
5. Conditional (Ternary) Operator
6. Bitwise Operators

*/

// 1. Assignment opt

let name = "Aman";

// let full_name = name + " " + "Gupta"

name += " Gupta"

// name = name + "Gupta "

console.log("name:", name)
// console.log("full_name:", full_name);


// 2. Arithmatic

let add = 2 + 5;
console.log("add", add);

let sub = 2 - 5;
console.log("sub", sub);

let mul = 2 * 5;
console.log("mul", mul);

let dev = 2 / 5;
console.log("dev", dev);

let mod = 2 % 5;
console.log("mod", mod);

let expo = 2 ** 5;
console.log("expo", expo);


// 3. Logical

/*

||  or  (undefined | null | 0 | [] | false)

&&  and

!   not

??  nullish

*/

// or || (undefined | null | 0 | [] | false)

let flag = 0;

let ans = flag || 10;

console.log("ans", ans)


// nullish  ??  // undefined or null

let flag1 = null;

let ans1 = flag ?? 10;

console.log("ans", ans1)


// ! not 

let flag2 = false;

console.log(!flag2)
// console.log(!!!flag2)


// && And 

let flag3 = 1
let flag4 = true

ans = flag3 && !flag4
console.log("ans:", ans)


// 4. Comparision

/* 

  1. == -> data value comp 

 
  2. === -> data type and data value comp

  3. < -> less

  4. > -> greater

  5. <=  -> less then eql

  6. >= -> greater then eql

  7. != -> not eql

  8. !== -> not double eql


*/

let number_1 = 23;
let number_2 = 23;

const ans_1 = number_1 == number_2;

console.log("ans_1", ans_1); // value

const ans_3 = number_1 === number_2; // value && type
console.log("🚀 ~ ans_3:", ans_3);

const ans_4 = (23 === "23" && "name" == "name") || [];
console.log("🚀 ~ ans_4:", ans_4); // D-false | P-false | A-true

const num_1 = 55;

const num_2 = "55";

console.log("ans",num_1 !== num_2);
