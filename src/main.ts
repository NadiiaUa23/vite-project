import "./style.css";

interface User {
  id: number;
  name: string;
}

const getUserNames = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = getUserNames(userList);
console.log(names); // ['Alice', 'Bob', 'Charlie']
