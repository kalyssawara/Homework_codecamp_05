// 27-02-2020

// 1.1
let array1 = [1, 2, 30, 400]
let array2 = array1.map(function(item) {
    return item * 2;
})
console.log(array2);

// 1.2
let array1 = [1, 2, 3, 4]
let array2 = array1.map(function(item) {
    return item.toString();
})
console.log(array2);

// 1.3
let array1 = [1, "1", 2, {}]
let array2 = array1.map(function(item) {
    return typeof(item);
})
console.log(array2);

//1.4
let array1 = ["apple", "banana", "orange"]
let array2 = array1.map(function(item) {
    return item.toString()
})
console.log(array2);

// 1.5
let array1 = [
    {name: "apple", age: 14},
    {name: "banana", age: 18},
    {name: "watermelon", age: 32},
]
let array2 = array1.map(function(item) {
    return item.name;
})
console.log(array2);

// 1.6
let array1 = [
    {name: "apple", age: 14},
    {name: "banana", age: 18},
    {name: "watermelon", age: 32},
]
let array2 = array1.map(function(item) {
    return item.age;
})
console.log(array2);

// 1.7
let array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
let array2 = array1.map(function(item) {
    return item.name + " " + item.surname;
})
console.log(array2);

// 1.8
let array1 = [1,3,4,5,6,7,8]
let array2 = array1.map(function(item) {
    if (item % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
})
console.log(array2);

// 1.9
let array1 = [1, -3, 2, 8, -4, 5]
let array2 = array1.map(function(item) {
    return Math.abs(item);
})
console.log(array2);

// 1.10
let array1 = [100, 200.25, 300.84, 400.3]
let array2 = array1.map(function(item) {
    return String(item.toFixed(2));
})
console.log(array2);

// 1.11
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]
let array2 = array1.map(function(item) {
    let year = new Date(item.birth);
    let now = new Date();
    item.age = now.getFullYear() - year.getFullYear();
    return item
})
console.log(array2);

// 1.12
let array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30"},
  ]
let array2 = array1.map(function(item) {
  let date = new Date(item)
  .toString()
  .slice(4)
  .split(' ')
  return
  <tr>
    <td>${item.name}</td>
    <td>${date[1]} ${date[0]} ${date[2]}</td>
  </tr>
})
