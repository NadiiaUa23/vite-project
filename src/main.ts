import "./style.css";
//1.отримує список користувачів та повертає імена цих користувачів у вигляді масиву рядків. Ось як ми можемо типізувати таку функцію:
// interface User {
//   id: number;
//   name: string;
// }

// const getUserNames = (users: User[]): string[] => {
//   return users.map((user) => user.name);
// };

// const userList: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const names = getUserNames(userList);
// console.log(names); // ['Alice', 'Bob', 'Charlie']

//2.TypeScript дозволяє робити параметри функції опціональними за допомогою додавання ?.
// function greet(name: string, age?: number) {
//   if (age !== undefined) {
//     console.log(`Hello, my name is ${name} and I am ${age} years old.`);
//   } else {
//     console.log(`Hello, my name is ${name}.`);
//   }
// }

// greet("Alice", 30); // ✅
// greet("Bob"); // ✅
// greet("Jacob", true); // ❌тут помилку покаже пыдкресленням. а в браузеру непобачить.

//3.Function Type (Тип функції)
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (x, y) => x + y;

console.log(add(2, 3)); // 5
