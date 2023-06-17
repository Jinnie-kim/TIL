# Find the Index of the First Occurence in a String

<p style='font-size: 20px'>Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

</p>

<br />
<br />

### 🌱example

```javascript
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

### 정답 풀이

```javascript
// 첫 번째 풀이
const strStr = function (haystack, needle) {
  if (!haystack.includes(needle)) return -1;

  return haystack.split(needle)[0].length;
};

// 두 번째 풀이
const strStr = function (haystack, needle) {
  if (needle === '' || needle === haystack) return 0;
  if (haystack.length < needle.length) return -1;
  if (!haystack.includes(needle)) return -1;

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (needle[j] !== haystack[i + j]) {
          break;
        } else if (j === needle.length - 1) {
          return i;
        }
      }
    }
  }
};
```

1. 첫 번째 풀이 해설
   <br />
   needle 값이 haystack에 없는 경우에는 -1을 return해야하므로 if문을 써서 아닌 경우를 early return해준다.
   haystack을 needle값을 기준으로 split을 한다. split된 배열에서 첫 번째 값의 길이를 구하면 needle이 haystack에서
   처음 나타나는 인덱스를 구할 수 있다.
   <br />
2. 두 번째 풀이 해설
   <br />
   if문으로 먼저 0 또는 -1로 early return할 수 있는 것들을 분기 처리 해줬다.
   그다음 for loop를 도는데, outer for loop에서 i가 haystack.length - needle.length +1 보다 작을 때까지 라는 조건을 붙여준 건, haystack 길이가 10이고 needle 길이가 4라고 가정했을 때, 이미 인덱스 6까지 반복한 경우, 그 뒤에 문자열에서는 needle과 일치하는 값을 찾을 수 없기 때문에 불필요한 순회를 없애주기 위해서이다.
   outer for loop의 안의 if문 조건에 부합하면 다시 if문 안에서 for loop을 도는데, 이때는 needle의 전체 문자열을 haystack의 문자열 안에서 같은지 비교하며 찾는 로직이다.
   같지 않으면 inner for loop을 종료하고 다시 outer for loop으로 가서 i를 1증가하고 앞의 과정을 반복한다. 문자열이 같음을 찾으면 최종적으로 haystack에서 needle[0]와 같은 값을 가지는 haystack[i]가 되는 i 값을 return한다.
   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/'>LeetCode 28. Find the Index of the First Occurence in a String</a>
