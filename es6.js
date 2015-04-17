class Cat {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('I\'m ' + this.name);
    }
}
 
var x = require('./test'); 
 
console.log(x);

var cats = [new Cat("Tim"), new Cat("Dave"), new Cat("Peter"), new Cat("Milkshake")];

cats.forEach(cat => {
    cat.sayHello();
}); 