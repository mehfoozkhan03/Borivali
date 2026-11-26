/* 

1. Assignments 

2. Arithmatic 

3. Logical

4. Comparision

5. Converstion

6.bitwise 

*/

// ! 1. Assignment opt

let name = "khan";

// let full_name = name + " " + "mehfooz"

name += " mehfooz";

name = name + "mehfooz ";

console.log("🚀 ~ name:", name);

// console.log("🚀 ~ full_name:", full_name);

//* 2. Arithmatic

let add = 2 + 5;
console.log("🚀 ~ add:", add);
let sub = 2 - 5;
console.log("🚀 ~ sub:", sub);
let mul = 2 * 5;
console.log("🚀 ~ mul:", mul);
let dev = 2 / 5;
console.log("🚀 ~ dev:", dev);
let mod = 2 % 5;
console.log("🚀 ~ mod:", mod);
let expo = 2 ** 5;
console.log("🚀 ~ expo:", expo);

// ? 3. Logical

/* 

||  or // "" | 0 | false 
 
&&  and 
 
!   not

?? nullish  //  undefined or null 

*/

/* 

LHS  || RHS

*/

let flag = true;

// let ans = flag ?? 10 ;

// console.log("🚀 ~ ans:", ans)

let flag_2 = false;

console.log(!!!flag_2);
/* 
flag === true return 
 !!flag == true return
  else return */

const ans_2 = flag && !!flag_2;
console.log("🚀 ~ ans_2:", ans_2);

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

console.log("ans", num_1 !== num_2);

// conversion

let x = "M";
// console.log("🚀 ~ x:",typeof x)

const conv = Number(x);
console.log("🚀 ~ conv:", conv);

let y = 2 + conv;
console.log("🚀 ~ y:", y);

let decNum = 304;

const convToBin = decNum.toString(2);

console.log("🚀 ~ convToBin:", convToBin);

let binNum = "1100100";

const convToDec = parseInt(binNum, 2);
console.log("🚀 ~ convToDec:", convToDec);
