# Longest Common Prefix

<p style='font-size: 20px'>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.</p>

<br />
<br />

### 🌱example

```javascript
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### 정답 풀이

```javascript
// 시간 복잡도 O(N^2)
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// 시간 복잡도 O(N)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    } else {
      let pairValue = target - nums[i];
      map.set(pairValue, i);
    }
  }
};
```

처음 떠올린 풀이는 for loop를 중첩해서 해결하는 것이었다. 각 원소를 더하고 target과 같을 때까지 체크하고, target과 같다면 해당 인덱스를 return한다.
이 풀이는 for loop의 중첩이기 때문에 시간 복잡도가 O(n^2)이다.
시간 복잡도를 O(n)으로 줄이기 위해서 for loop를 한 번만 쓰도록 Map 자료구조를 사용해서 풀이를 개선했다.
함수 안에서 Map 연산자를 사용해 새로운 Map을 만들어 map 변수에 할당한다. 그리고 for loop를 i는 0부터 nums.length 보다 작을 때까지
반복하면서 nums[i]값에 무엇을 더하면 target이 되는지 pairValue를 찾는다. 그리고 pairValue를 key값으로 하고, 현재 nums[i]값의 인덱스를 value로 하여 Map 객체에 set한다. 만약 nums[i]값이 map에 있다면, 즉 nums[i]값이 이전 nums[i]값의 pairValue라면 map.get(nums[i])로 pairValue인 요소의 인덱스를 가져와서, 현재 nums[i]값의 인덱스와 함께 return한다.

<br />
<br />
<br />

### 문제 출처

<a href='https://leetcode.com/problems/two-sum/'>LeetCode 1. Two Sum</a>
