# x만큼 간격이 있는 n개의 숫자

<p style='font-size: 20px'>함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.</p>

### 나의 풀이

```javascript
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }
  return answer;
}
```

### 코드 해설

1부터 n까지 n번 반복할 동안, answer 배열에 주어진 x부터 x만큼 커지는 숫자를 push해야한다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/12954'>프로그래머스 코딩테스트 연습 x만큼 간격이 있는 n개의 숫자</a>
