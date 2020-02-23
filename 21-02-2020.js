// 21/02/2020

let user = {
    name: "John",
    "computer skill": "JavaScript"
};
user.age = 17;
user.height = 201;
console.log(user);
console.log(user["computer skill"]);

delete user.name;
console.log(user);

// 4.6.1
let human = {
    name: "Kalyssa",
    age: 33,
    home: "BuzzCode",
    isSingle: true,
    intelligent: 5,
};
console.log(human);

// 4.7.1


let key;
let value;

while (key, value != stop) {
    key = prompt('key');
    value = prompt('value');
    let object = {};

    object[key] = value;
}
console.log(object);

let obj = {}
while (true) {
    let propertyName = prompt("Enter property");
    if (propertyName == "stop") break;
    let propertyValue = prompt("Enter propety");
    obj[properyName] = propertyValue;
}

console.log(obj);

let person = {};
let v1 = "firstName";
    person[v1] = "Kalyssa";
    person["lastName"] = "Warapongthada";
    person["age"] = 33;
    person["height"] = 171;

console.log(person);

let fruit = {}
let fruitName;
let amountFruit;
    while (true) {
        fruitName = prompt('Enter a name of fruit');
        amountFruit = prompt('Enter amount of fruit');
        if (amountFruit > 1) {
            fruitName = fruitName + 's';
        } else if (fruitName == null) {
            break;
        }
        fruit[fruitName] = amountFruit;
    };
    console.log(fruit);