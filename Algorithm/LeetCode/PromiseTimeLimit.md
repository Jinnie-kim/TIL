# Promise Time Limit

<p style='font-size: 20px'>Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".

</p>

<br />
<br />

### 🌱example

```javascript
Input:
fn = async (a, b) => {
  await new Promise(res => setTimeout(res, 120));
  return a + b;
}
inputs = [5,10]
t = 150
Output: {"resolved":15,"time":120}
Explanation:
​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
```

### 정답 풀이

```javascript
const timeLimit = function (fn, t) {
  return function (...args) {
    const originalPromise = fn(...args);

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);
    });
    return Promise.race([originalPromise, timeoutPromise]);
  };
};
```

timeLimit함수는 인자 fn과, t 밀리세컨드 값을 받아서 새로운 시간 제한 함수를 return한다.
example코드로 코드 실행 과정을 설명해보자면, fn값으로 주어진 함수는 a, b를 인자로 받아서 안에서 Promise함수가 resolve될 때까지 기다리는데, 120초 동안 기다린 후 a + b를 return한다.
이 return 값은 originalPromise변수에 저장된다. 그리고 t값으로 주어진 150 밀리세컨드는, timeoutPromise 변수에 할당된 프로미스 안의 setTimeout의 시간 값으로 전달된다.
각각 프로미스를 처리하는 originalPromise와 timeoutPromise를 Promise.race를 사용해서 가장 빨리 끝나는 프로미스를 return한다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript'>LeetCode 2637. Promise Time Limit</a>
