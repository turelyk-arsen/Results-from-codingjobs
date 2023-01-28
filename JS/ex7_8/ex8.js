const movies = [
  {
    title: "Batman",
    characters: [
      {
        name: "Christian Bale",
        children: [{ name: "Boby 5 Junior" }, { name: "Mary Poppins" }],
      },
      { name: "Robert Pattinson" },
    ],
  },
  {
    title: "Superman",
    characters: [],
  },
];

console.log(movies[0].characters.name);
console.log(movies[1].characters.length);

const list = [1, 2, 3];
list.reverse();

const moviesNew = ["batmen", "superman"];
moviesNew.forEach(function (item, index) {
  console.log(item, index)
});

const listMultiplied = list.map(function (item, index) {
  return item*5;
});
console.log(listMultiplied);

const obj1 = { title: "my title"};
const change = function (obj) {
  obj.title = "test";
}
change(obj1);
console.log(obj1);

const string1 = "hello"
let string2 = string1;
string2 = string2 + " world";
console.log(string1, string2);