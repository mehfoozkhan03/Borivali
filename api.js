let api = "https://jsonplaceholder.typicode.com/posts";

fetch(api)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  })
  .finally(console.log("done"));
