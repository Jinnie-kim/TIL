# Valid Parentheses

<p style='font-size: 20px'>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.</p>

입력받은 괄호는 여는 괄호와 닫는 괄호의 모양이 같아야 합니다.
여는 괄호와 대칭대는 괄호로 닫히지 않으면 flase를 반환합니다.

### 🌱example
```javascript
Input: s = "()"
Output: true

Input: s = "(]"
Output: false
```

### 정답 풀이

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var temp = [];
    var map = {
        '(':')',
        '{': '}',
        '[': ']'
    };

    for (var i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            temp.push(s[i]);
        } else if (map[temp.pop()] !== s[i]) {
            return false;
        }
    }

    if(temp.length > 0) {
        return false;
    } else {
        return true;
    }
};
```
=> 괄호를 입력 받았을 때 여는 괄호라면 우선 스택에 쌓아둡니다(빈 배열로 선언한 temp 변수에 담는다.). 
<br />
닫는 괄호를 입력받은 경우 temp에 저장된 것을 pop해서 꺼낸 다음 map의 인덱스로 대응대는 괄호를 찾아 비교합니다. 이때 같지 않다면 바로 false를 반환합니다.
<br />
서로 대응대는 괄호를 입력받으면 temp 배열에서 쌓아둔 여는 괄호를 pop하기 때문에
최종적으로 temp 배열의 길이가 0보다 크면 false, 그렇지 않으면 true를 반환합니다. 

<br />
<br />
<br />

### 문제 출처
<a href='https://leetcode.com/problems/integer-to-roman/description/'>LeetCode 20. Valid Parentheses</a>
