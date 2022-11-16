# Logest Common Prefix 

<p style='font-size: 20px'>Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".</p>
문자열들의 배열을 입력받았을 때, 문자열들 간의 공통된 접두어가 있다면 반환하고, 없다면 빈 문자열을 반환합니다.

<br />
<br />

### 🌱example
```javascript
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

### 정답 풀이

```javascript
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs === undefined || strs.length === 0) {
    return '';
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) {
      i++;
    }
    return prev.slice(0, i);
  });
};
```

=> 이번 문제로 자바스크립트 기초를 다시 훑어봐야겠다고 생각했습니다.

우선 입력받은 문자열들의 배열이 undefined인지, 빈 배열인지 확인합니다.
<br />
문자열을 받은 배열을 입력받았다면 ```reduce메서드```를 이용해 각 문자열의 같음을 비교합니다. 같다면 ```i```변수를 1씩 증가시킵니다. 
<br />
최종으로 리턴하는 값은 ```slice메서드```를 이용해 문자열의 왼쪽부터 ```i```값만큼 잘라낸 공통 prefix입니다.

<br />
<br />
<br />

### 문제 출처
<a href='https://leetcode.com/problems/integer-to-roman/description/'>LeetCode 14. Longest Common Prefix</a>
