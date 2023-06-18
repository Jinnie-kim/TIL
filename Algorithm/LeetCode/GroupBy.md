# Group By

<p style='font-size: 20px'>Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's \_.groupBy function.

</p>

<br />
<br />

### 정답 풀이

```javascript
Array.prototype.groupBy = function (fn) {
  return this.reduce((grouped, item) => {
    const key = fn(item);

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(item);

    return grouped;
  }, {});
};
```

Array의 프로토타입 메서드로 등록하여 Array 타입인 자료구조들은 모두 사용가능한 메서드를 만든다.
메서드를 사용한 array의 arr[i]값을 key값으로 하고 arr[i]값에 해당되는 value들을 배열 값으로 가지는 객체를 만들어서 return하는 문제이다.
객체에 값을 계속 누적해서 계산해야하기 때문에 reduce메서드를 쓰는 것이 적합해 보인다. grouped 초기 값으로는 빈 객체{}를 전달해준다.
인자로 전달받는 fn함수는 arr[i]값을 받아서 key값을 만들어주는 함수이다. key값으로 grouped에 value가 있는 지 없는 지 체크하고
없으면 해당 key에 value 값으로 빈 배열을 할당해준다. 그리고 빈 배열에 현재 item을 push한다. 이 과정을 반복해서 처리한 후, 최종적으로
배열의 모든 요소가 그룹화된 grouped를 return한다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/group-by/description/?envType=study-plan-v2&envId=30-days-of-javascript'>LeetCode 2631. Group By</a>
