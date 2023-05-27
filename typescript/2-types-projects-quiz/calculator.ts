/**
 * Let's make a calculator 🧮
 */

// 내가 먼저 만들어본 계산기
// 놓친 점:
// 1. operator로 들어오는 타입을 따로 유니언 타입으로 만들어 주는 게 코드 작성 시 좋음
// 2. 함수 return type 설정을 안해줬음
//
// function calculate(operator: string, firstNum: number, secondNum: number) {
//   if (operator === 'add') return firstNum + secondNum;
//   if (operator === 'substract') return firstNum - secondNum;
//   if (operator === 'multiply') return firstNum * secondNum;
//   if (operator === 'divide') return firstNum / secondNum;
//   if (operator === 'remainder') return firstNum % secondNum;
// }

// 강사님 코드
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, a: number, b: number): number {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
