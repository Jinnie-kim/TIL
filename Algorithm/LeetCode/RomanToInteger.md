# Roman to Integer

<p style='font-size: 20px'>Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.</p>

<img src='https://user-images.githubusercontent.com/92916958/201803781-35e774dc-4fc9-40e6-86fb-42b2e4d667a3.png' style='width: 250px'>

로마 숫자를 입력 받은 후 정수로 변환하기

### 정답 풀이

```javascript
 symbols = {
     'I': 1,
     'V': 5,
     'X': 10,
     'L': 50,
     'C': 100,
     'D': 500,
     'M': 1000
 }

 /**
 * @param {string} 
 * @return {number}
 */
var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length ; i++) {
        if(symbols[s[i]] < symbols[s[i+1]]) {
            value -= symbols[s[i]]
        } else {
            value += symbols[s[i]]
        }
    }
    return value;
};
```
=> ```switch문```을 사용해서 해결하려고 했지만 몰라서 못 풀었습니다.<br />
우선 로마 숫자와 그에 대응되는 정수를 object로 먼저 정의합니다.
그다음 함수에서 인자로 로마 숫자를 받고 ```for문```안에서 if문으로 
각 자리의 숫자를 비교합니다. 앞의 숫자가 뒤 숫자보다 작으면 빼고, 크면 더하여 최종 value값을 반환합니다.

<br />
<br />
<br />

### 문제 출처
<a href='https://leetcode.com/problems/integer-to-roman/description/'>LeetCode 12. Integer to Roman</a>