// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Jinnie",
  age: 24,
  hobbies: ["Sports", "Reading"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Reading"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); get an Error!
}
