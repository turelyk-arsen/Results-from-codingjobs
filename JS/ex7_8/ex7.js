const vegetables = [
  { name: "carrot " },
  { name: "cabbage " },
  { name: "potato" },
];

for (let index = 0; index < vegetables.length; index++) {
  document.getElementById("one").innerHTML +=
    vegetables[index].name.toUpperCase();
}

vegetables.forEach(function (vegetable) {
  document.getElementById("two").innerHTML += vegetable.name;
});

vegetables.map(function (vegetable) {
  document.getElementById("three").innerHTML += vegetable.name;
});

const newVegetables = vegetables.map(function (vegetable) {
  vegetable.name = vegetable.name.toUpperCase();
  document.getElementById("four").innerHTML += vegetable.name;
});

let list = [1, 2, 3, 4, 5, 6];
let reversedList = [];
for (let i = list.length - 1; i >= 0; i--) {
  reversedList[i] = list[i];
  document.getElementById("five").innerHTML += reversedList[i];
}

let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let reversedList1 = [];
for (let i = list1.length - 1; i >= 0; i--) {
  reversedList1.push(list1[i]);
  document.getElementById("six").innerHTML = reversedList1;
};
console.log(reversedList1);

let list2 = [10, 20, 30, 40, 50];
let reversedList2 = [];
list1.forEach(function (item, index) {
    reversedList2[index] = list2[list2.length - 1 - index];
      document.getElementById("seven").innerHTML = reversedList2;

});
