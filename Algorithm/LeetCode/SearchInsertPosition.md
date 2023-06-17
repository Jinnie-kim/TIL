# Search Insert Position

<p style='font-size: 20px'>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

</p>

<br />
<br />

### 🌱example

```javascript
// 1.
Input: (nums = [1, 3, 5, 6]), (target = 5);
Output: 2;

// 2.
Input: (nums = [1, 3, 5, 6]), (target = 2);
Output: 1;
```

### 정답 풀이

```javascript
const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (target < nums[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return nums[middle] === target ? middle : middle + 1;
};
```

이진 검색, Binary Search 알고리즘을 사용해서 풀었다.
왼쪽부터 시작하는 포인터와 배열의 끝 부터 시작하는, 오른쪽부터 시작하는 포인터 그리고 배열의 중간 포인터를 먼저 변수로 만들어 값을 할당한다. 왼쪽부터 시작하는 포인터는 start 포인터로 초기 인덱스 값은 0이고, 오른쪽부터 시작하는 포인터는 end 포인터로 초기 인덱스 값은 배열 길이 - 1을 값으로 가진다. 그리고 중간 포인터는 start와 end를 더해서 2로 나눠 버린 값을 가진다.
그리고 while loop를 도는데, start값이 end값과 같거나 작을 때까지 반복한다.
반복문 안에서는 찾고자하는 target과 nums[middle] 값이 같은 지 비교하는데, target이 nums[middle] 보다 작은 경우에는
end 인덱스를 middle - 1 값으로 재할당해서 새로운 범위를 지정한다. 반대의 경우에는 start 인덱스를 middel + 1 값으로 재할당해서 비교할 새로운 범위를 지정한다. 그리고 middle 값도 다시 계산해서 할당한다. start가 end보다 커지는 경우에 반복문이 종료되는데, 이때 nums[middle] 값이 target과 같은 경우 middle 인덱스 값을 return하고 같지 않은 경우,
배열에 찾는 값이 없는 경우에는, middle + 1을 return 한다. 찾는 값이 없는 경우 계산된 middle 값은 찾고자 하는 target 보다 작은 수 중에 가장 큰 수를 가리키는 인덱스 값을 가진다. 문제에서 배열에서 찾을 수 없다면 들어가야할 자리의 인덱스를 return하라고 했으므로 middle + 1값을 return한다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/search-insert-position/description/'>LeetCode 35. Search Insert Position</a>
