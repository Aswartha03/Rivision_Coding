console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

console.log(a);
var a = 10;
console.log(b);
let b = 20;

function foo() {
  console.log(this);
}
foo();
const obj = { foo };
obj.foo();

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}

const object = { a: 1 };
Object.freeze(object);
object.a = 100;
console.log(object.a);


const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name);

const obje = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obje };
shallowCopy.b.c = 42;
console.log(obje.b.c);

function foo(x, y, z) {
  console.log(x, y, z);
}
foo(...[1, 2]);
foo(...[1, 2, 3, 4]);

function foo(a, b, c) {
  arguments[0] = 99;
  console.log(a, arguments[1]);
}
foo(1, 2, 3);

console.log(typeof null);
console.log(null instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);

