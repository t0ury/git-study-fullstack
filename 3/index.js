/** @format */

let shoppingList = ["milk", "egg", "bread"];
let item = {
  name: "milk",
  price: 3.5,
  quantity: 2,
};

const addItem = () => {
  shoppingList.push("butter");
  shoppingList.push("apple");
  return "Added butter and apple to the list";
};

const isOverFiveItems = () => {
  return shoppingList.length > 5;
};

const printOrderedList = () => {
  shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
};

const isInTheList = (item) => {
  return shoppingList.includes(item);
};

console.log(`${isOverFiveItems() ? "Your shopping cart is full" : addItem()}`);
printOrderedList();
console.log(isInTheList("milk"));
