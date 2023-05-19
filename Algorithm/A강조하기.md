# A 강조하기

<p style='font-size: 20px'>문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.</p>

<br />
<br />

### 정답 풀이

```javascript
// 처음 풀이
function solution(myString) {
  return [...myString].map((str) => (str === 'a' ? 'A' : str.toLowerCase()));
}

// 수정한 풀이
function solution(myString) {
  return [...myString].map((str) => (str.toLowerCase() === 'a' ? 'A' : str.toLowerCase())).join('');
}
```

### 코드 해설

처음에 작성한 풀이로 테스트는 통과했는데, 제출했을 때 테스트 하나를 통과 못했다.
<br />
다른 사람이 질문한 글의 답변에서 문제점을 찾았다.
처음 풀이에서는 소문자 a만 찾아서 대문자 A로 바꿔주고 있다.
<br />
그럼 원래 대문자 A였던 것이 소문자로 바뀌어버리니까, 테스트 케이스를 통과하지 못한 것이다.
<br />
그래서 애초에 문자열을 모두 소문자로 바꿔서 소문자 a를 찾고 대문자 A로 바꿔주었다.

<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/181874'>프로그래머스 코딩테스트 입문 A 강조하기</a>
