# A로 B만들기

<p style='font-size: 20px'>문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.</p>

### 나의 풀이

```javascript
function solution(before, after) {
  var answer = 0;
  let result = 0;
  let bfArr = [...before].sort((a, b) => (a > b ? 1 : -1));
  let afArr = [...after].sort((a, b) => (a > b ? 1 : -1));
  for (let i = 0; i < bfArr.length; i++) {
    if (bfArr[i] === afArr[i]) {
      result++;
    } else {
      result--;
    }
  }
  if (result === afArr.length) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}
```

### 코드 해설

우선 입력받은 문자열들을 모두 정렬해주었습니다. 그리고 for 반복문을 이용하여 각 문자열의 요소를 비교했습니다.
같으면 1을 더하고 아니면 1을 빼서 요소의 길이와 같으면 바꾸어 만들수 있고, 다르면 바꿀 수 없다고 판단했습니다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/120886'>프로그래머스 코딩테스트 입문 A로 B만들기</a>
