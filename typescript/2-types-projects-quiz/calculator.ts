/**
 * Let's make a calculator 🧮
 */

// 내가 먼저 만들어본 계산기
function calculate(operator: string, firstNum: number, secondNum: number) {
  if (operator === 'add') return firstNum + secondNum;
  if (operator === 'substract') return firstNum - secondNum;
  if (operator === 'multiply') return firstNum * secondNum;
  if (operator === 'divide') return firstNum / secondNum;
  if (operator === 'remainder') return firstNum % secondNum;
}
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
