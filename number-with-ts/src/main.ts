import './style.css';

// const $form = document.querySelector('form') as HTMLFormElement;

const $numberDisplay = document.querySelector('#number') as HTMLDivElement;
const $plus5Button = document.querySelector('#plus') as HTMLButtonElement;
const $minus5Button = document.querySelector('#minus') as HTMLButtonElement;
const $resetButton = document.querySelector('#reset') as HTMLButtonElement;

const inputNumber = prompt('1~100까지 숫자 중 하나를 골라주세요.') as string;

$numberDisplay.textContent = inputNumber;

$plus5Button.addEventListener('click', () => {
  let currentNumber = $numberDisplay.textContent as string;
  $numberDisplay.textContent = `${+currentNumber + 5}`;
});

$minus5Button.addEventListener('click', () => {
  let currentNum = $numberDisplay.textContent!;
  $numberDisplay.textContent = `${+currentNum - 5}`;
});

$resetButton.addEventListener('click', () => {
  $numberDisplay.textContent = inputNumber;
});
