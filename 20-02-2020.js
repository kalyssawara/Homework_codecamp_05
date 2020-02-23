// 20/02/2020

// Arrow Function
let ask = (question, yes, no) => {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

// 1.10
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
}
let x = prompt("x?", ''), n = prompt("n?", '')
if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
    alert(pow(x, n))
}

// BMI
let name1 = prompt('Enter your name');
let bmi1 = prompt('Enter your BMI');
let name2 = prompt('Enter your name');
let bmi2 = prompt('Enter your name');
if (bmi1 > bmi2) {
    alert('name1')
} else if (bmi2 > bmi1) {
    alert('name2')
}

let firstName = prompt('ชื่อคนแรก');
let firstBMI = +(prompt('BMI ของคนแรก'));

let secondName = prompt('ชื่อคนที่สอง');
let secondBMI = +(prompt('BMI ของคนที่สอง'));

if (firstBMI > secondBMI) {
    alert(`Name: ${firstName}\nBMI: nBMI: ${firstBMI}`)
} else {
    alert(`Name: ${secondName}\nBMI: nBMI: ${secondBMI}`)
}

// BMI Calculator
let name1 = prompt('Enter your name');
let height1 = +(prompt('Enter your height'));
let weight1 = +(prompt('Enter your weight'));

let name2 = prompt('Enter your name');
let height2 = prompt('Enter your height');
let weight2 = prompt('Enter your weight');

// convert height
function convertHeight(height) {
   let mheight = height / 100;
   return mheight;
}

let metreHeight1 = convertHeight(height1);
let metreHeight2 = convertHeight(height2);

// BMI
function bmi(weight, mheight) {
    let bmi = weight / mheight**2;
    return bmi;
}

let bmi1 = bmi(weight1, metreHeight1);
let bmi2 = bmi(weight2, metreHeight2);



if (bmi1 > bmi2) {
    alert(`${name1} ${bmi1}`)
} else if (bmi2 > bmi1) {
    alert(`${name2} ${bmi2}`)
}

let firstName = prompt('ชื่อคนแรก');
let firstHeight = +prompt('ส่วนสูงของคนแรก');
let firstWeight = +prompt('น้ำหนักของคนที่สอง');

let secondName = prompt('ชื่อคนที่สอง');
let secondHeight = +prompt('ส่วนสูงของคนที่สอง');
let secondWeight = +prompt('น้ำหนักของคนที่สอง');

let firstBMI = calculateBMI(firstHeight, firstWeight);
let secondBMI = calculateBMI(secondHeight, secondWeight);

if (firstBMI > secondBMI) {
    printName(firstName, firstBMI);
} else {
    printName(secondName, secondBMI);
}

function printName(name, BMI) {
    alert(`Name: ${name}\nBMI: $(BMI)`);
}

function calculateBMI(height, weight) {
    height /= 100;
    return height / (height **2)
}

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