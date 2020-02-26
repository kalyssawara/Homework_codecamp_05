// // 26-02-2020

// // 3.11.1
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;
shoppingCart.push("Banana");

alert( fruits.length ); // 4

// // 3.11.2
let style = ["Jazz", "Blues"];
style.push("Rock n Roll");
style[1] = "Classic";
style.shift();
style.unshift("Rap", "Reggae");

alert(style);

// 3.11.3
function sumInput() {
    let array = [];
    let arr = 0;
    let sum=0;
    
    console.log((isFinite(arr)) == true);
    while ( isFinite(arr)) {
        arr = +prompt('Input value');
        array.push(arr); 
        console.log(array);
    } 
    array.pop()
console.log(array);
    for (let item of array) {
        sum += item
        
    }
    alert(sum);
}

sumInput();





