// 25-02-2020
let calculator = {
    read() {
        calculator.number1 = +prompt('enter a number');
        this.number2 = +prompt('enter a number');
    },
    sum() {
        return this.number1 + this.number2;

    },
    mul() {
        return this.number1 * this.number2;
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // shows the current step
      alert( this.step );
    }
  };

  ladder.up().up().down().showStep(); // 1

let calculator = {
    read() {
        calculator.number1 = +prompt('enter a number');
        this.number2 = +prompt('enter a number');
    },
    sum() {
        return this.number1 + this.number2;

    },
    mul() {
        return this.number1 * this.number2;
    },
}




function user(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    this.hello = function() {
        alert(`My name is ${name}. I am ${age} years old. my tall ${height} cm.`)
    }
}

let newUser = new user("Tuck", 25, 165);
let newUser2 = new user("Tare", 25, 170);
newUser2.hello();

