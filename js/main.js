var Cat = require('./Cat'); 
var $ = require('jquery'); 
 
var cats = [new Cat("Tim"), new Cat("Dave"), new Cat("Peter"), new Cat("Milkshake")];

for (let cat of cats) {
    console.log(cat);
} 

cats.forEach(cat => {
    cat.sayHello(); 
}); 