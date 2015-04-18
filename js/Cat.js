class Cat {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`My name is ${this.name}`);
    }
};

module.exports = Cat;