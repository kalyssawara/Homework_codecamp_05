let name, human;
name = 'Kalyssa';
human = name;
console.log(human);

// var name
let myMoney, parentsName, myAddress, ourUniverseAge;

// number
console.log(typeof -Infinity);
console.log(1 / Infinity);
console.log(Infinity / Infinity);
console.log(NaN / NaN);

console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name}`);

let myName = 'Kalyssa', myAge = 33, address = 'Bangkok';
let myProfile = (`My name is ${myName}, I am ${myAge} years old, I live in ${address}`);
console.log(myProfile);

let vars = undefined;
vars = String(vars);
let text = (`This is ${vars}`);
console.log(text);

let a = 1, b = 1;
let c = ++a;
console.log(c);
let d = b++;
console.log(d);

console.log("" + 1 + 0); // 10
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // 9px
console.log("$" + 4 + 5);// $45
console.log("4" - 2); // 2
console.log("4px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(" -9 " + 5); //-9 5
console.log(" -9 " - 5); //-14
console.log("\t\n" - 2); // 2

console.log(1 == '1');
console.log(1 === '1');

console.log(5 > 4); // 1
console.log("apple" > "pineapple"); // 0
console.log("2" > "12"); // 1
console.log(undefined == null); // 1
console.log(undefined === null); // 0
console.log("bee" < "be"); // 0
console.log("bee" > "Bee"); // 1
console.log("Bee" < "be"); // 1

let Name = prompt("What is my name?", '');

if (Name = "Kalyssa") {
    alert("very good");
} else {
    alert("You don't know my name");
}

let score = prompt("Please enter your score", '');
if (score >= 80) {
    alert("A");
} else if (score >= 70 && score <= 79) {
    alert("B");
} else if (score >= 60 && score <= 69) {
    alert("C");
} else if (score >= 50 && score <= 59) {
    alert("D");
} else if (score < 50) {
    alert("F");
}

let x;

true || (x = 1);

alert(x);

let x = 1;

(x > 0) && alert('Greater than zero')







    




