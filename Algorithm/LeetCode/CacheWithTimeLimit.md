# Promise Time Limit

<p style='font-size: 20px'>Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.

</p>

<br />
<br />

### 정답 풀이

```javascript
const TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const found = this.cache.has(key);

  if (found) clearTimeout(this.cache.get(key).ref);
  this.cache.set(key, {
    value,
    ref: setTimeout(() => this.cache.delete(key), duration),
  });
};

TimeLimitedCache.prototype.get = function (key) {
  return this.cache.has(key) ? this.cache.get(key) : -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};
```

TimeLimitedCache라는 생성자 함수를 만든다. 그리고 public 메서드로 만들기 위해서 필요한 각 get, set, count 메서드는 prototype에 추가한다.
값을 cache할 자료구조로 Map을 사용했는데, 코드 실행 전까지 키를 알 수 없고, 모든 키와 값들이 동일한 type인 경우이기 때문이다.
set을 할 때, value값으로 객체를 저장하는데, 이때 value와 만료시간을 카운트 하기 위해 setTimeoutd을 ref의 값으로 넣어준다.
그리고 같은 key값이 들어오면 본래있던 만료 시간 카운트를 없애고 새로운 duration 값으로 카운트를 시작한다.
get하는 경우 map.has 메서드로 key값이 존재하는 지 확인하고 있으면 get메서드로 key값을 전달하고 value를 찾아서 return하고 없으면 -1을 return한다.
만료되지 않은 key값들의 개수는 size메서드를 써서 구한 후 return한다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/cache-with-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript'>LeetCode 2622. Cache With Time Limit</a>
