# Palindrome Number

<p style='font-size: 20px'>Given an integer x, return true if x is a 
palindrome, and false otherwise.</p>

입력받은 정수와 순서를 뒤집은 정수가 같다면 'true'를 같지 않다면 'false'를 반환하시오.

### 나의 풀이

```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    numToString = String(x);
    let compareNum = [];
    for(let i = numToString.length ; i >= 0 ; i--) {
        compareNum.push(numToString[i]);
    }
    if(Number(compareNum.join('')) === x) {
        return true
    } else {
        return false
    }
};
```

### 코드 해설

정수를 입력받은 후 각 자릿수대로 쪼개어 순서가 뒤바뀐 값을 구해야 했습니다. 우선 입력받은 숫자를 ```String()```메서드를 이용하여 우선 문자열로 바꿔 준 후 ```for 반복문```으로 뒷자리부터 새로운 배열로 넣어주었습니다.
그다음 ```join()```메서드로 하나의 문자로 합쳐준 후 ```Number()```메서드를 이용해 숫자로 변환하여 원래 입력받았던 정수 x와 비교하였습니다.
<br />
<br />
<br />
<br />
### 문제 출처
<a href='https://leetcode.com/problems/palindrome-number/'>LeetCode 9. Palindrom Number</a>