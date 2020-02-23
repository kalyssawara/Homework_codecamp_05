// // 1.9.1
alert(null || 2 || undefined);         // 2
alert(alert(1) || 2 || alert(3));      // 1
alert(1 && null && 2);                 // null
alert(alert(1) && alert(2));           // undefined
alert(null || 2 && 3 || 4);             // 3

// // 1.9.2
let age = x;
if (x <= 18 && x < 60);

// // 1.9.3
if (!(x <= 18 && x < 60));

// 1.9.4
if (-1 || 0) alert('first');          // run
if (-1 && 0) alert('second');         // not run
if (null || -1 && 1) alert('third');  // run

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
while (++i < 5) alert(i); // 1 2 3 4

let i = 0;
while (i++ < 5) alert(i); // 1 2 3 4 5

// 2.5.3 เหมือน
for (let i = 0; i < 5; i++) alert(i); // 0 1 2 3 4
for (let i = 0; i < 5; ++i) alert(i); // 0 1 2 3 4

// 2.5.4
for (let i = 2; i <= 10; i++) {
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

let guessNumber = prompt('ผู้เล่นที่ 1 ใส่ตัวเลข');
while (answer >= 1 &&  answer >= 100) {
    let guessNumber = prompt('ผู้เล่นที่ 2 ทายตัวเลข');
    if (guessNumber == answer) {
        alert('ถูกต้อง');
        break;
    } else {
        let message = (guessNumber > answer) ? 'ตัวเลขมากไป' : 'ตัวเลขน้อยไป';
        alert(message);
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

// 3.3.1 if - else
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

// // Switch Case
let a = +prompt('a?', '');
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