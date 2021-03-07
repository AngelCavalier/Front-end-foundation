// function Parent() {
//   this.name = 'parent';
//   this.arr = [1, 2, 3];
// }

// function Child() {
//   this.type = 'child';
// }

// Child.prototype = new Parent();
// var c1 = new Child();
// var c2 = new Child();
// console.log(c1);
// console.log(c2);

function Person() {
  this.name = 'xiaopao';
  this.colors = ['red', 'blue', 'green'];
}

Person.prototype.getName = function () {
  console.log(this.name);
};

function Child() {
  Person.call(this);
}

var child1 = new Child();
var child2 = new Child();
child1.colors.push('yellow');
console.log(child1.name);
console.log(child1.colors); // ["red", "blue", "green", "yellow"]
console.log(child2.colors); // ["red", "blue", "green"]
