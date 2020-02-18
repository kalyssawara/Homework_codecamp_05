// let name, human;
// name = 'Kalyssa';
// human = name;
// console.log(human);

// // var name
// let myMoney, parentsName, myAddress, ourUniverseAge;

// // number
// console.log(typeof -Infinity);
// console.log(1 / Infinity);
// console.log(Infinity / Infinity);
// console.log(NaN / NaN);

// console.log(`hello ${1}`);
// console.log(`hello ${"name"}`);
// console.log(`hello ${name}`);

// let myName = 'Kalyssa', myAge = 33, address = 'Bangkok';
// let myProfile = (`My name is ${myName}, I am ${myAge} years old, I live in ${address}`);
// console.log(myProfile);

// let vars = undefined;
// vars = String(vars);
// let text = (`This is ${vars}`);
// console.log(text);

// let a = 1, b = 1;
// let c = ++a;
// console.log(c);
// let d = b++;
// console.log(d);

// console.log("" + 1 + 0); // 10
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // 9px
// console.log("$" + 4 + 5);// $45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log(7 / 0); // Infinity
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(" -9 " + 5); //-9 5
// console.log(" -9 " - 5); //-14
// console.log("\t\n" - 2); // 2

// console.log(1 == '1');
// console.log(1 === '1');

// console.log(5 > 4); // 1
// console.log("apple" > "pineapple"); // 0
// console.log("2" > "12"); // 1
// console.log(undefined == null); // 1
// console.log(undefined === null); // 0
// console.log("bee" < "be"); // 0
// console.log("bee" > "Bee"); // 1
// console.log("Bee" < "be"); // 1

// let Name = prompt("What is my name?", '');

// if (Name = "Kalyssa") {
//     alert("very good");
// } else {
//     alert("You don't know my name");
// }

// let score = prompt("Please enter your score", '');
// if (score >= 80) {
//     alert("A");
// } else if (score >= 70 && score <= 79) {
//     alert("B");
// } else if (score >= 60 && score <= 69) {
//     alert("C");
// } else if (score >= 50 && score <= 59) {
//     alert("D");
// } else if (score < 50) {
//     alert("F");
// }

// let x;

// true || (x = 1);

// alert(x);

// let x = 1;

// (x > 0) && alert('Greater than zero')

// // 1.9.1
alert( null || 2 || undefined);         // 2
alert( alert(1) || 2 || alert(3));      // 1
alert( 1 && null && 2);                 // null
alert( alert(1) && alert(2));           // undefined
alert(null || 2 && 3 || 4);             // 3

// // 1.9.2
let age = x;
if (x < 18 || x < 60);

// // 1.9.3
if !(x < 18 || x < 60);

// 1.9.4
if ( -1 || 0 ) alert('first');          // run
if ( -1 && 0 ) alert('second');         // not run
if ( null || -1 && 1 ) alert('third');  // run

// // 1.9.5
let userName = prompt("คุณคือใคร?");

if (userName == 'admin') {
    let password = prompt('รหัสผ่านคืออะไร?')
    if (password === 'codecamp#5') {
        alert('ยินดีต้อนรับ')
    } else if (password == "" || password == null) {
        alert('ยกเลิก')
    } else alert('รหัสผ่านผิด');
} else if (userName == "" || userName == null) {
    alert('ยกเลิก')
} else {
    alert('ฉันไม่รู้จักคุณ');
}


for (let i = 0; i < 3; i++) {
    alert(i);
}

for (i = 1; 1 <= 1027; i = 1 + 2) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 1027; i = i + 2) {
    sum += i;
}
console.log(sum)

// 2.5.1
let i = 3;
while (i) {
    alert(i--);
} // 1

// 2.5.2 ต่าง
let i = 0;
while (++i < 5) alert( i ); // 1 2 3 4

let i = 0;
while (i++ < 5) alert( i ); // 1 2 3 4 5

// 2.5.3 เหมือน
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

// 2.5.4
for (let i = 2; i <= 10; i ++) {
    alert(i);
}

// 2.5.5
let i = 0;
while (i < 3) {
    alert(`number ${1}!`);
    i++;
}

// // 2.5.6 Guess Number
for (i = 1; 1 <= 100;) {
    let number = prompt("Enter a number between 1 - 100"); 
    if (number < 50) {
        alert("too low");    
    } else if (number > 50) {
        alert("too high"); 
    } else {
        alert("correct")
        break;
    }
}
    
// // Switch Case
let browser = prompt('Choose a browser');
switch (browser) {
    case 'Edge':
        alert('You have got the Edge!');
        break;
    case 'Chrome':
        alert('Okay we support these browser too.');
        break;
    case 'Firefox':
        alert('Okay we support these browser too.');
        break;
    case 'Safari':
        alert('Okay we support these browser too.');
        break; 
    case 'Opera':
        alert('Okay we support these browser too.');
        break;
    default:
        alert('We hope that this page looks okay!');
}

// // 3.3.1 if - else
let browser = prompt('Choose a browser');
if (browser == 'Edge') {
    alert('You have got the Edge!')
} else if (browser == 'Chrome') {
    alert('Okay we support these browser too.')
} else if (browser == 'Firefox') {
    alert('Okay we support these browser too.')
} else if (browser == 'Safari') {
    alert('Okay we support these browser too.')
} else if (browser == 'Opera') {
    alert('Okay we support these browser too.')
} else {
    alert('We hope that this page looks okay!')
}

// Switch Case
let a = +prompt('a?','');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert(2);
        alert(3);
        break;
}
 

