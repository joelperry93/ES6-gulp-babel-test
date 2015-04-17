class Cat {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log('I\'m ' + this.name);
    }
}

require('./test');

var cats = [new Cat("Tim"), new Cat("Dave"), new Cat("Peter"), new Cat("Milkshake")];

cats.forEach(cat => {
    cat.sayHello();
}); 