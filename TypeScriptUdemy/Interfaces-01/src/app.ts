// Code goes here!

class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = "Sierra"; // 직접 추가
console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "sierra", describe: accounting.describe };
// accountingCopy.describe();
