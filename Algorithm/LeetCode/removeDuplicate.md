# Remove Duplicate from Sorted Array

<p style='font-size: 20px'>Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.

</p>

<br />
<br />

### 🌱example

```javascript
Input: nums = [1, 1, 2];
Output: 2, (nums = [1, 2, _]);
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
```

### 정답 풀이

```javascript
const removeDuplicates = function (nums) {
  let uniqueIdx = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[uniqueIdx] !== nums[j]) {
      i++;
      nums[uniqueIdx] = nums[j];
    }
  }

  return uniqueIdx + 1;
};
```

중복이 제거된 요소들의 개수를 카운트하는 uniqueIdx 변수를 만들어서 초기 값을 0으로 할당한다.
초기 값을 0으로 할당하는 이유는, 중복이 제거된 요소를 원래 배열의 앞부분 부터 순차적으로 저장하기 위해서이다.
그리고 for loop를 사용해서 j는 1부터 nums.length보다 작을 때까지 반복한다. for loop안에서 nums[uniqueIdx]값과 nums[j]값이 같은지
체크한다. 같다면 다음 loop로 넘어가고 다르다면 uniqueIdx를 1 증가하고, nums[uniqueIdx]값을 nums[j]로 할당한다.
마지막으로 uniqueIdx를 return하는데, 초기 값을 0으로 두었기 때문에, 1 더한 값이 중복을 제거된 요소들의 실제 개수이고 더한 값을 return한다.

<br />
<br />
<br />

### 문제 출처

<a href='https://leetcode.com/problems/valid-parentheses/description/'>LeetCode 26. Remove Duplicates from Sorted Array</a>
