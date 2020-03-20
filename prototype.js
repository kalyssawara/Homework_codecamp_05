// 2.7
let head = {
    glasses: 1
}
let table = {
    pen: 3,
    __proto__: head
}
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
}
let pockets = {
    money: 2000,
    __proto__: bed
}

// 2.7.4
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach = [food];
    }
}
let speedy =  {
    __proto__: hamster
};
let lazy = {
    __proto__: hamster
};

speedy.eat('apple');
alert( speedy.stomach );

alert( lazy.stomach );

// 4.6.1
function f(a, b) {
    alert(a + b);
}
Function.prototype.defer = function(ms) {
    return function(a, b) {
        setTimeout(() => ms)
    }
}
f.defer(1000) (1, 2);


let dictionary = Object.create(null, {
    toString: {
        value: function() {
            return Object.key(this).join();
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
    console.log(key);
}

console.log(dictionary);