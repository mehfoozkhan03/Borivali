//  object hole the key value pair concept
const obj = {
  name: "mehfooz",
  age: Infinity,
  married: false,
  hobbies: ["Reading", "Playing", "Teaching"],
  city: {
    Dream: "Pune",
    Current: "Mumbai",
  },
  passport: function valid() {
    return { result: undefined };
  },
};

// const ans = obj.passport()
console.log(obj.passport()?.result ?? "invalid");

// crud

/* 

{ } -> object | documents | set | dictionary
[ ] -> array  | collection |  tuple

*/

/* 
Notation in js 'object'

. -> dot notation  

[""] -> bracket notation

*/

console.log(obj["citys"]);
console.log("before", obj);

obj.married = true;

console.log("after", obj);

for (var i = 0; i < 4; i++) {
  console.log("local", i);
}
console.log("global", i);

var i = "mehfooz";

console.log("global:sec", i);

console.log(this)