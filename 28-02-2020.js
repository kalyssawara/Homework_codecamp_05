
// 2.1
array1 = [1, 2, 30, 400]
array2 = array1.filter(function (item) {
    return item > 10;
})
console.log(array2);

// 2.2
array1 = [1, 2, 3, 4]
array2 = array1.filter(function (item) {
    return item % 2 != 0;
})
console.log(array2);

// 2.3
array1 = [1, "1", 2, {}]
array2 = array1.filter(function (item) {
    return typeof (item) == number;
})
console.log(array2);

// 2.4
array1 = ["apple", "banana", "orange", "pineapple", "watermelon"]
array2 = array1.filter(function (item) {
    return item.length > 6;
})
console.log(array2);

// 2.5
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
array2 = array1.filter(function () {
    return item.age < 18
})

// 2.6
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
]
array2 = array1.filter(function (item) {
    return item.age != 18;
})
console.log(array2);

// 2.7
array1 = [1, -3, 2, 8, -4, 5]
array2 = array.filter(function (item) {
    return item > 0;
})
console.log(array2);

// 2.8
array1 = [1, 3, 4, 5, 6, 7, 8]
array2 = array1.filter(function (item) {
    return item % 3 == 0;
})
console.log(array2);

// 2.9
array1 = ["peach", 1, -3, "2", {}, []]
array2 = array1.filter(function (item) {
    return item > 0;
})
console.log(array2);

// 2.10
array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2 = array1.filter(function (item) {
    return item.toUpperCase();
})
console.log(array2);

// 2.11
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
let array2 = array1.filter(function (item) {
    return item.birth.split("-")[1]
})
let array2 = array1.filter(function( item) {
    return item.birth.splice(5, 7) == 10;
})
    console.log(array1)
    console.log(array2);

// 2.12
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
]
array2 = array1.filter(function (item) {
    return item
})