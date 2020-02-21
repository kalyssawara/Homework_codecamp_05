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
// // console.log(c);
// // let d = b++;
// // console.log(d);

// // console.log("" + 1 + 0); // 10
// // console.log("" - 1 + 0); // -1
// // console.log(true + false); // 1
// // console.log(6 / "3"); // 2
// // console.log("2" * "3"); // 6
// // console.log(4 + 5 + "px"); // 9px
// // console.log("$" + 4 + 5);// $45
// // console.log("4" - 2); // 2
// // console.log("4px" - 2); // NaN
// // console.log(7 / 0); // Infinity
// // console.log(null + 1); // 1
// // console.log(undefined + 1); // NaN
// // console.log(" -9 " + 5); //-9 5
// // console.log(" -9 " - 5); //-14
// // console.log("\t\n" - 2); // 2

// // console.log(1 == '1');
// // console.log(1 === '1');

// // console.log(5 > 4); // 1
// // console.log("apple" > "pineapple"); // 0
// // console.log("2" > "12"); // 1
// // console.log(undefined == null); // 1
// // console.log(undefined === null); // 0
// // console.log("bee" < "be"); // 0
// // console.log("bee" > "Bee"); // 1
// // console.log("Bee" < "be"); // 1

// // let Name = prompt("What is my name?", '');

// // if (Name = "Kalyssa") {
// //     alert("very good");
// // } else {
// //     alert("You don't know my name");
// // }

// // let score = prompt("Please enter your score", '');
// // if (score >= 80) {
// //     alert("A");
// // } else if (score >= 70 && score <= 79) {
// //     alert("B");
// // } else if (score >= 60 && score <= 69) {
// //     alert("C");
// // } else if (score >= 50 && score <= 59) {
// //     alert("D");
// // } else if (score < 50) {
// //     alert("F");
// // }

// // let x;

// // true || (x = 1);

// // alert(x);

// // let x = 1;

// // (x > 0) && alert('Greater than zero')

// // // 1.9.1
// alert(null || 2 || undefined);         // 2
// alert(alert(1) || 2 || alert(3));      // 1
// alert(1 && null && 2);                 // null
// alert(alert(1) && alert(2));           // undefined
// alert(null || 2 && 3 || 4);             // 3

// // // 1.9.2
// let age = x;
// if (x <= 18 && x < 60);

// // // 1.9.3
// if (!(x <= 18 && x < 60));

// // 1.9.4
// if (-1 || 0) alert('first');          // run
// if (-1 && 0) alert('second');         // not run
// if (null || -1 && 1) alert('third');  // run

// // // 1.9.5
// let userName = prompt("คุณคือใคร?");

// if (userName == 'admin') {
//     let password = prompt('รหัสผ่านคืออะไร?')
//     if (password === 'codecamp#5') {
//         alert('ยินดีต้อนรับ')
//     } else if (password == "" || password == null) {
//         alert('ยกเลิก')
//     } else alert('รหัสผ่านผิด');
// } else if (userName == "" || userName == null) {
//     alert('ยกเลิก')
// } else {
//     alert('ฉันไม่รู้จักคุณ');
// }


// for (let i = 0; i < 3; i++) {
//     alert(i);
// }

// for (i = 1; 1 <= 1027; i = 1 + 2) {
//     console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 1027; i = i + 2) {
//     sum += i;
// }
// console.log(sum)

// // 2.5.1
// let i = 3;
// while (i) {
//     alert(i--);
// } // 1

// // 2.5.2 ต่าง
// let i = 0;
// while (++i < 5) alert(i); // 1 2 3 4

// let i = 0;
// while (i++ < 5) alert(i); // 1 2 3 4 5

// // 2.5.3 เหมือน
// for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4
// for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4

// // 2.5.4
// for (let i = 2; i <= 10; i++) {
//     alert(i);
// }

// // 2.5.5
// let i = 0;
// while (i < 3) {
//     alert(`number ${1}!`);
//     i++;
// }

// // // 2.5.6 Guess Number
// for (i = 1; 1 <= 100;) {
//     let number = prompt("Enter a number between 1 - 100");
//     if (number < 50) {
//         alert("too low");
//     } else if (number > 50) {
//         alert("too high");
//     } else {
//         alert("correct")
//         break;
//     }
// }

// let guessNumber = prompt('ผู้เล่นที่ 1 ใส่ตัวเลข');
// while (answer >= 1 &&  answer >= 100) {
//     let guessNumber = prompt('ผู้เล่นที่ 2 ทายตัวเลข');
//     if (guessNumber == answer) {
//         alert('ถูกต้อง');
//         break;
//     } else {
//         let message = (guessNumber > answer) ? 'ตัวเลขมากไป' : 'ตัวเลขน้อยไป';
//         alert(message);
//     }
// }


// // // Switch Case
// let browser = prompt('Choose a browser');
// switch (browser) {
//     case 'Edge':
//         alert('You have got the Edge!');
//         break;
//     case 'Chrome':
//         alert('Okay we support these browser too.');
//         break;
//     case 'Firefox':
//         alert('Okay we support these browser too.');
//         break;
//     case 'Safari':
//         alert('Okay we support these browser too.');
//         break;
//     case 'Opera':
//         alert('Okay we support these browser too.');
//         break;
//     default:
//         alert('We hope that this page looks okay!');
// }

// // // 3.3.1 if - else
// let browser = prompt('Choose a browser');
// if (browser == 'Edge') {
//     alert('You have got the Edge!')
// } else if (browser == 'Chrome') {
//     alert('Okay we support these browser too.')
// } else if (browser == 'Firefox') {
//     alert('Okay we support these browser too.')
// } else if (browser == 'Safari') {
//     alert('Okay we support these browser too.')
// } else if (browser == 'Opera') {
//     alert('Okay we support these browser too.')
// } else {
//     alert('We hope that this page looks okay!')
// }

// // // Switch Case
// // let a = +prompt('a?', '');
// // switch (a) {
// //     case 0:
// //         alert(0);
// //         break;
// //     case 1:
// //         alert(1);
// //         break;
// //     case 2:
// //     case 3:
// //         alert(2);
// //         alert(3);
// //         break;
// // }


// // Arrow Function
// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
// );

// // 1.10
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
// }
// let x = prompt("x?", ''), n = prompt("n?", '')
// if (n <= 0) {
//     alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// } else {
//     alert(pow(x, n))
// }

// // BMI
// let name1 = prompt('Enter your name');
// let bmi1 = prompt('Enter your BMI');
// let name2 = prompt('Enter your name');
// let bmi2 = prompt('Enter your name');
// if (bmi1 > bmi2) {
//     alert('name1')
// } else if (bmi2 > bmi1) {
//     alert('name2')
// }

// let firstName = prompt('ชื่อคนแรก');
// let firstBMI = +(prompt('BMI ของคนแรก'));

// let secondName = prompt('ชื่อคนที่สอง');
// let secondBMI = +(prompt('BMI ของคนที่สอง'));

// if (firstBMI > secondBMI) {
//     alert(`Name: ${firstName}\nBMI: nBMI: ${firstBMI}`)
// } else {
//     alert(`Name: ${secondName}\nBMI: nBMI: ${secondBMI}`)
// }

// // BMI Calculator
// let name1 = prompt('Enter your name');
// let height1 = +(prompt('Enter your height'));
// let weight1 = +(prompt('Enter your weight'));

// let name2 = prompt('Enter your name');
// let height2 = prompt('Enter your height');
// let weight2 = prompt('Enter your weight');

// // convert height
// function convertHeight(height) {
//    let mheight = height / 100;
//    return mheight;
// }

// let metreHeight1 = convertHeight(height1);
// let metreHeight2 = convertHeight(height2);

// // BMI
// function bmi(weight, mheight) {
//     let bmi = weight / mheight**2;
//     return bmi;
// }

// let bmi1 = bmi(weight1, metreHeight1);
// let bmi2 = bmi(weight2, metreHeight2);



// if (bmi1 > bmi2) {
//     alert(`${name1} ${bmi1}`)
// } else if (bmi2 > bmi1) {
//     alert(`${name2} ${bmi2}`)
// }

// let firstName = prompt('ชื่อคนแรก');
// let firstHeight = +prompt('ส่วนสูงของคนแรก');
// let firstWeight = +prompt('น้ำหนักของคนที่สอง');

// let secondName = prompt('ชื่อคนที่สอง');
// let secondHeight = +prompt('ส่วนสูงของคนที่สอง');
// let secondWeight = +prompt('น้ำหนักของคนที่สอง');

// let firstBMI = calculateBMI(firstHeight, firstWeight);
// let secondBMI = calculateBMI(secondHeight, secondWeight);

// if (firstBMI > secondBMI) {
//     printName
// }

// รับตัวเลข
let highNumber = 0;
let number = "";
while (number != null) {
    number = +prompt('Enter a number');
    if (number > highNumber) {
        highNumber = number
    } else {
        alert(`${highNumber}`)
    }
}


let max = -Infinity;
let input = -Infinity;

while (input) {
    input = +prompt('Enter a number');
    if (input > max) {
        max = input
    }
}

console.log(max);


// รับตัวเลข alert 2 อันดับ เลขมากที่สุด
let max1 = -Infinity;
let max2 = - Infinity;
let input = -Infinity;

while (input) {
    input = +prompt('Enter a number');
    console.log(`input: ${input}`)
    if (input > max1) {
        max2 = max1;
        max1 = input;
    } else if (input > max2) {
        max2 = input;
    }
    console.log(`max1: ${max1}, max2: ${max2}`)
}

console.log(max1, max2);