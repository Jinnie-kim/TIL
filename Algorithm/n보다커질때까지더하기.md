# n보다 커질 때까지 더하기

<p style='font-size: 20px'>정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

</p>

### 나의 풀이

```javascript
function solution(numbers, n) {
  var answer = 0;
  for (const number of numbers) {
    if (answer > n) return answer;
    answer += number;
  }

  return answer;
}
```

### 코드 해설

`for of`문을 사용하여 numbers 배열을 순회하며 answer에 더해줍니다.
<br />
단, answer가 주어진 n을 넘어가는 순간 그 전까지 더해진 answer를 리턴합니다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/181884'>프로그래머스 코딩테스트 연습 n보다 커질 때까지 더하기</a>
