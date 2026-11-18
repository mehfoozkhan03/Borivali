/* let name = "xyz";
console.log("before update ", name);
name = name[0];
name[0] = "z";

console.log("after update", name); // zyz

let arr = ["name", "surname"]; */

// arr[0] = `${arr[0]} mehfooz`;

// arr= "somthing"

/* let arr_1 = arr[0];

arr_1 = ["hello"];

console.log("arr", arr);
console.log("🚀 ~ arr_1:", arr_1);

let arr_2 = [2, 4, 6, 8, 9];

// arr_2[0] = arr_2[0] + 2;
arr_2[0] += 2;

console.log(arr_2); */

//  object hole the key value pair concept
const obj = {
  name: "mehfooz",
  age: Infinity,
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
