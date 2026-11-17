// data types

// 1. Primitive

/*
1. string
2. number
3. boolean
4. undefine && Null
5. symbol
6. BigInt
*/
//_______________________________________________________


/* string

1. "str"
2. 'str'
3. `str` template literal {use when dynamic value occuer}
*/

var name = "aman";

console.log("result", `${name} enter`)


// number
var num = 2;
console.log("num:", typeof num);


// Boolean
var flag = true;
console.log("flag:", typeof flag);


// Undefined && Null
/* 
hoisting [var, let, const]
*/

console.log("What is null and undefined:", typeof null, typeof undefined);

//symbol
var stds = {
    name: "Aman",
    ["id1"]:101,
    ["id2"]:101,
};

var s1 = Symbol(stds["id1"]);
var s2 = Symbol(stds["id2"]);

console.log("std",s1 == s2)

/*
var com = s1 == s2;
console.log("com:", com);

var Day_1 = Date.now();
console.log("Day_1:", Day_1);

setTimeout(() => {
    var Day_2 = Date.now();
    console.log("Day_2:", Day_2);

    var res = Day_1 === Day_2;
    console.log("res:", res);
}, 100);
*/

// BigInt
var num1 = 9087624165242309n;
var num2 = 9087624165456789n;
var calc = num1 + num2;

console.log("calc:", calc)



// 2. non-primitive

/*
1. Function
2. Object
3. Array
4. date & regex 
*/ 
//_______________________________________________________


// 1. Function 

// name-function
/*
var name = "Aman";
console.log("name: global", name)

function nameFunc(){
    console.log("name: local", name)
}

nameFunc()
*/


// arrow Function
/*
const sum = (a, b) =>{
    console.log(a + b);
    // return a+b;
}

sum(4,6)
*/

