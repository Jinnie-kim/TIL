# Allow Once Function Call

<p style='font-size: 20px'>Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

</p>

<br />
<br />

### 🌱example

```javascript
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
```

### 정답 풀이

```javascript
const once = function (fn) {
  let haveBeenCalled = false;
  let result;

  return function (...args) {
    if (!haveBeenCalled) {
      result = fn(...args);
      haveBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};
```

이 문제는 클로저 개념을 사용해서 풀 수 있다.
함수를 return하는 함수를 만들어서 once 변수에 할당한다. 외부 함수 안에서 함수가 한 번 실행되었는지 아닌지를 체크할 수 있는 flag변수를 만들고 초기 값은 false를 할당한다. 그리고 전달된 함수를 실행한 결과 값을 저장할 result변수를 선언해준다.
외부 함수가 return하는 함수는 전달된 인자 값을 받고, 내부에서 haveBeenCalled가 false인 경우 첫 번째 조건문안의 로직을 계산한다. 외부 함수로 전달된 함수에 인자 값을 넣고 결과 값을 result에 저장한다. 그리고 flag변수인 haveBeenCalled값을 true로 변경한다. 마지막으로 result를 return한다. 만약 그 다음에 onceFn이 실행되면 이때 flag 변수가 true값을 가지기 때문에 undefined를 return한다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript'>LeetCode 2666. Allow Once Function Call</a>
