# Execute Asynchronous Functions in Parallel

<p style='font-size: 20px'>Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.

promise resolves:

When all the promises returned from functions were resolved successfully. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.

</p>

<br />
<br />

### 🌱example

```javascript
Input: functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
Output: {"t": 200, "resolved": [5]}
Explanation:
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.
```

### 정답 풀이

```javascript
const promiseAll = function (functions) {
  return new Promise(function (resolve, reject) {
    let count = 0;
    let res = new Array(functions.length);

    for (let i = 0; i < functions.length; i++) {
      let fn = functions[i];

      fn()
        .then((val) => {
          count += 1;
          res[i] = val;
          if (count === functions.length) resolve(res);
        })
        .catch((err) => reject(err));
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
```

실행 예시 코드를 보면, promise함수를 then하여 값을 받아오고 있기 때문에, promiseAll함수는 새로운 Promise를 return해야 한다.
몇 번 진행했는지 개수를 체크할 count 변수를 만들고, functions 배열에 들어있는 promise의 resolve값을 담아둘 res 변수를 만들고 functions의 길이만큼 새로운 배열을 만들어서 할당한다. 그 다음 for loop를 도는데, fn에 functions배열의 각 프로미스를 하나 씩 담아서 실행한다. resolve인 경우, count를 1 증가하고, res배열에 인덱스를 키 값으로 하여 resolve된 value를 넣어준다. 만약에 count가 funcions 배열 길이와 같으면, functions배열의 마지막 Promise까지 모두 수행했다는 뜻이므로 이때까지 쌓아온 resolve 값을 담은 배열을 resolve한다. error가 있는 경우 reject한다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/?envType=study-plan-v2&envId=30-days-of-javascript'>LeetCode 2721. Execute Asynchronous Functions in Parallel</a>
