{
  function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // JS에서 에러를 확인하는 방법 TS에서는 필요 없음
    // if (typeof n1 !== "number" || typeof n2 !== "number")
    //   throw new Error("Incorrect input!");
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }

  let number1 = 5; // 5.0 same numbern, essentially
  const number2 = 2.8;
  const printResult = true;
  const resultPhrase = "Result is: ";

  add(number1, number2, printResult, resultPhrase);
}
