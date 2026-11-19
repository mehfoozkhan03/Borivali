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


let flag_2=false;


console.log(!!!flag_2)
/* 
flag === true return 
 !!flag == true return
  else return */


  const ans_2 = flag && !!flag_2
  console.log("🚀 ~ ans_2:", ans_2)
 

