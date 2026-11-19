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

// console.log(obj)
// const ans = obj.passport()
// console.log(obj.passport()?.result ?? "invalid");


// crud

/*

{ } -> object | documents | set | dictionary

[ ] -> array | collection | tuple 

*/ 

/*

notation in js 'object'

. -> dot notation

[" "] -> bracket notation

*/ 

// read
console.log(obj["city"]);

// create
obj.married = true;
obj.contact = 12345;

// update
obj.married = false;
console.log("before", obj);

// delete
delete obj.contact;
console.log("after", obj);


for (let i = 0; i < 4; i++){
    console.log("local", i);
}
// console.log("global", i);