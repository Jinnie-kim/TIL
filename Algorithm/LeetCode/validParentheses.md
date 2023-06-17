# Longest Common Prefix

<p style='font-size: 20px'>Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

</p>

<br />
<br />

### 🌱example

```javascript
Input: s = '()';
Output: true;
```

### 정답 풀이

```javascript
const valid = function (str) {
  let tempStack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      tempStack.push('}');
    } else if (str[i] === '[') {
      tempStack.push(']');
    } else if (str[i] === '(') {
      tempStack.push(')');
    } else if (tempStack.pop() !== str[i]) {
      return false;
    }
  }
  return !tempStack.length;
};
```

괄호 문자열을 받는 solution 함수 안에 임시로 닫힌 괄호를 저장할 빈 배열을 tempStack 변수를 만들어서 할당한다.
for loop를 사용해서 i는 0부터 str.length보다 작을 때까지 1씩 증가하며 반복하는데, 반복문안에서 조건문으로
만약에 문자열의 i 인덱스 값이 오픈 괄호라면, 그에 대응되는 닫힌 괄호를 tempStack에 push해준다.
tempStack에 쌓이는 닫힌 괄호들은 그 다음에 와야할 올바른 닫힌 괄호들이다. str[i]값이 닫힌 괄호라면 바로 전에
넣었던 tempStack의 값을 pop해서 같은 괄호인지 비교한다. 다른 괄호라면 올바른 괄호가 아니기 때문에 false를 return한다.
모두 올바른 괄호가 전달되었다면, 최종 tempStack 배열은 빈배열이 되고 return값으로는 tempStack.length가 0이고 0은 falsy 값이기 때문에
! 논리부정 연사자를 앞에 붙여서 결론적으로는 true를 return한다.

<br />
<br />
<br />

### 문제 출처

<a href='https://leetcode.com/problems/valid-parentheses/description/'>LeetCode 20. Valid Parentheses</a>
