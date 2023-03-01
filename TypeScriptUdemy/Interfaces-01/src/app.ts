type Admin = {
  name: string;
  previleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  previleges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add1(a: number, b: number): number; // JS에서는 동작안함 컴파일 시 제거됨.
function add1(a: string, b: string): string; // JS에서는 동작안함 컴파일 시 제거됨.
function add1(a: number, b: string): string; // JS에서는 동작안함 컴파일 시 제거됨.
function add1(a: string, b: number): string; // JS에서는 동작안함 컴파일 시 제거됨.
function add1(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // type guard
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add1("hey", "you");
result.split(" ");

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name :", emp.name);
//   if ("previleges" in emp) {
//     console.log("Privileges :", emp.previleges);
//   }
//   if ("startDate" in emp) {
//     console.log("start date :", emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   // 밑의 코드는 작동하지 않음. interface는 JS로 컴파일되지 않으니까.
//   // if (animal instanceof Bird) {
//   //   console.log("Moving with speed: " + animal.flyingSpeed);
//   // }
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")
// // );
// // const userInputElement = document.getElementById(
// //   "user-input"
// // ) as HTMLInputElement;
// // userInputElement.value = "Hi there";

// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there";
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid email.",
//   username: "Must start with a capital character!",
// };
