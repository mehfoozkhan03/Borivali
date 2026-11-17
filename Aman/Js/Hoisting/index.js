// What is hoisting ?

// var | let | const

/*

* scope
1. Global {}
2. Lexical | Local | block

*/

/* hoisting

// var
var name = "Aman";
console.log("Name 1:", name);

var name = "Gupta";
console.log("Name 2:", name);



// let
let name = "Aman";
 name = "Gupta";
 console.log("Name with let:", name)


//  const
const name_1 = "Aman";
name_1 = "Gupta"
console.log("name_1 with const", name_1)

*/


// 1. Global {}
/*
try{
    function nameFunc(){
        var name_2 = "hello";

        console.log("name_2:local", name_2)
    }

    console.log("name_2:global", this.name_2);
    nameFunc();
} catch(error){
    console.log("error:", error);
}

*/


