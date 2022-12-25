// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple type
} = {
  name: "Jinnie",
  age: 24,
  hobbies: ["Sports", "Reading"],
  role: [2, "author"],
};

person.role.push("admin");
// person.role[1] = 10;

person.role = [0, "hello"];

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Reading"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); get an Error!
}
