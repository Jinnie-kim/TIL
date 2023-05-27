# n의 배수 고르기

<p style='font-size: 20px'>정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.</p>

### 나의 풀이

```javascript
function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}
```

### 코드 해설

정수 배열의 각 숫자들을 입력받은 정수 n값으로 나눴을 때 나머지가 0인 것만 answer배열에 push한 후 리턴합니다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/120905'>프로그래머스 코딩테스트 입문 n의 배수 고르기</a>
