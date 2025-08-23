Question - 1 : 

problem :

console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);

Solution : 

Explanation : 
In JS synchronous tasks (Not time taking tasks / Async Tasks) executed first , then all the microTasks(Promises) finally macroTasks(setTimeout , setInterval) executed through event loop.

So output : 
1
4
3
2  

Question - 2 : 
Problem :
console.log(a);
var a = 10;
console.log(b);
let b = 20;

Solution : 
Explanation : 

In JS , all the variables are moved to the top of the their scope . 
Here var is hoisted ans it is initially assigned to undefined .
But let and const are hoisted but they initially are in the temporary dead zone (TDZ) . 
So we get reference error when we acces  the variables and functions in the TDZ before assigning them . 

So Output : 
undefined 
Reference Error : Cannot access 'b' before initialization

Question - 3 : 
Problem : 
function foo() {
  console.log(this);
}
foo();
const obj = { foo };
obj.foo();


Solution : 
Explanation : 
In JS the value of this is depends on how we call a function .
When we call foo() directly , this refers to the global object 
If We call inside an object , this refers to the object itself 

So Output : 
Global Object 
{ foo: [Function: foo] }


Question - 4 : 
Problem : 
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100);
}

Solution  :
Explanation : 

Var is function - scoped , all three callbacks share the same i , so after setTimeout completed , it will give the same value as output i.e : 3 
let is block - scoped , for each iteration it will create new j with let , so it will give different values

Output : 
3
3
3
0
1
2

Question - 5 : 
problem : 
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 100;
console.log(obj.a);

Solution : 
Explanation :
Object.freeze will not allow to modify the object in the future . So here we update the object field value after freeze the object . But it will not updates . 
So output : 
1

Question - 6 : 
Problem : 
const obj1 = { name: "Alice" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name);

Solution : 
Explanation : 
In JS , Objects are stored by ref , not by value . So when we assign obj1 to obj2 , both objects are stored in same memory . therefore , when we update the object 2 name it will also update object1 name 
So Output : 
Bob

Question - 7 : 
Problem : 
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };
shallowCopy.b.c = 42;
console.log(obj.b.c);

Solution : 
Explanation : 
In JavaScript, the spread operator ({...obj}) creates a shallow copy, meaning only the top-level properties are copied. Nested objects  are still referenced. So modifying shallowCopy.b.c also changes obj.b.c.

So Output : 
42 

Question - 8 : 
Problem : 
function foo(x, y, z) {
  console.log(x, y, z);
}
foo(...[1, 2]);
foo(...[1, 2, 3, 4]);

Solution :
Explanation : 
The spread operator (...) expands an array into individual arguments when calling a function.
for foo(...[1,2]) and foo([...[1,2,3,4]]) it will pass elemetns as a indivisual values not in the form of array
So output : 
1 2 undefined 
1 2 3 
 
Question : 9 
problem : 
function foo(a, b, c) {
  arguments[0] = 99;
  console.log(a, arguments[1]);
}
foo(1, 2, 3);

Explanation : 
We are passing three arguments 
and inside function we updating the first argument 
Finally , printing the a , arg[1]
So output : 
99 2 

Question : 10 
Problem : 
console.log(typeof null);
console.log(null instanceof Object);
console.log([] instanceof Array);
console.log([] instanceof Object);

Solution : 
Explanation : 
typeof null , shows "object" (a mistake in JavaScript).
null instanceof Object → false because null is not really an object.
[] instanceof Array → true because [] is an array.
[] instanceof Object → true because arrays are also objects in JavaScript.

So output : 
Object
false
true
true