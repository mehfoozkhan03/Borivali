// let name = "xyz";
// console.log("before update", name);
// name = name[0];
// name[0] = "z"; // typeError: cannnot assign to read only property '0' of string 'x'

// console.log("after update", name);


// let arr = ["name", "surname"];
// // arr[0] = aman;

// // arr = "somthing"

// let arr_1 = arr[0];
// arr_1 = ["hello"];

// console.log("arr", arr);
// console.log("arr_1", arr_1);




// object hole the key value pair concept
const obj = {
    name: "Aman",
    age: 22,
    hobbies: ["gaming","playing"],
    city:{
        Dream:"Ujjain",
        Current:"Mumbai",
    },
    passport: function valid(){
        return {result: undefined};
    },
};

console.log(obj)
// const ans = obj.passport()
// console.log(obj.passport()?.result ?? "invalid");