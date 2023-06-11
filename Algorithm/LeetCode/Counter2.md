# Counter 2

<p style='font-size: 20px'>
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.

</p>

### 🌱example

```javascript
Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
```

### 나의 풀이

```javascript
// 전통적인 함수 작성 법
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function (init) {
  let initial = init;
  function increment() {
    return ++initial;
  }

  function reset() {
    return (initial = init);
  }

  function decrement() {
    return --initial;
  }

  return { increment, reset, decrement };
};

// 클래스로 작성하기
class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    return this.presentCount;
  }
}
```

### 코드 해설

나는 기본적인 방법으로 코드를 작성했는데, 전달 받은 integer를 함수 안에서 새로운 inital 변수에 저장한다.
그리고 이 변수를 클로저 형식으로 계속 사용한다.

클래스로도 작성할 수 있는데, 코드를 써놓고 보니 클래스가 좀 더 잘 이해되는 느낌이다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript'>LeetCode 2665. Counter 2</a>
