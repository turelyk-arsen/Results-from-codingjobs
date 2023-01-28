const fruit1 = [{ name: "tomato" }, { name: "banana" }, { name: "cherry" }];
for (let index = 0; index < fruit1.length; index++) {
  fruit1[index].name = fruit1[index].name.toUpperCase();
}
console.log("fruit1", fruit1);

const fruit2 = [{ name: "tomato" }, { name: "banana" }, { name: "cherry" }];
fruit2.forEach(function (fruit) {
  fruit.name = fruit.name.toUpperCase();
});
console.log("fruit2", fruit2);

const fruit3 = [{ name: "tomato" }, { name: "banana" }, { name: "cherry" }];
const newFruits = fruit3.map(function (fruit) {
  fruit.name = fruit.name.toUpperCase();
  return fruit;
});
console.log("fruit3", fruit3);
console.log("newFruits", newFruits);

fruit3[2] = "";
console.log("fruit3", fruit3);

//reverse array

const list = [1, 2, 3, 4, 5, 6];
const reversedList = [];
for (let index = list.length - 1; index >= 0; index--) {
  reversedList.push(list[index]);
}
console.log(reversedList);

//2 with loop
const reversedList2 = [];
for (let index2 = 0; index2 < list.length; index2++) {
   // reversedList2.push(list[list.length - 1 - index2]);
   reversedList2[index2] = list[list.length - 1 - index2];
}
console.log(reversedList2);

//forEach

const reversedList3 = [];
list.forEach(function (item, index) {
    // reversedList3[index] = list[list.length - 1 - index];
    reversedList3.unshift(item);
    console.log(reversedList3);
});

const reversedList4 = list.slice().reverse();
console.log(reversedList4);