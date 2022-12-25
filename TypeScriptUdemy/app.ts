// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple type
// } = {
//   name: "Jinnie",
//   age: 24,
//   hobbies: ["Sports", "Reading"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
}

const person = {
  name: "Jinnie",
  age: 24,
  hobbies: ["Sports", "Reading"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10;

// person.role = [0, "hello"];

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Reading"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); get an Error!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}