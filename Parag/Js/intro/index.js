// primitive and non-primitive data types


// primitive data types

/*
    1. String
    2. Number
    3. Boolean
    4. Undefined && Null
    5. Symbol
    6. BigInt
*/


/* String */

/*
1."str"
2.'str'
3.`str`  template literals {use when dymamic value is needed}

*/

var name = "Parag"

console.log("result" ,`${name} enter`)

// Number

var num = 5
console.log("number" ,num)

// Boolean

var flag = true
console.log("flag" , typeof flag )

// undefined && Null

/*
hoisting [var, let, const]
*/

console.log("What is null and undefined:" ,typeof null , typeof undefined)

// symbol

var stds ={
    name: "Parag",
    ["id1"]:101,
    ["id2"]:101,
};

var s1 = Symbol(stds["id1"])
var s2 = Symbol(stds["id2"])

console.log("stds", s1 === s2)



// bigInt

var num1 = 9374916238034572n
var calc = num1 + 1n
console.log("bigInt" ,typeof calc, calc)

// non-primitive data types

/*
    1. Object
    2. Array
    3. Function
    4. Date
    5. RegExp

*/
