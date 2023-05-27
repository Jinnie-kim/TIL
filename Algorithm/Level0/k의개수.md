# k의 개수

<p style='font-size: 20px'>1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.</p>

### 나의 풀이

```javascript
function solution(i, j, k) {
  var answer = [];
  let resultNum = 0;
  for (let a = i; a <= j; a++) {
    answer.push(a + '');
  }
  let result = answer.join('').split('');
  for (let b = 0; b < result.length; b++) {
    if (result[b] === k + '') resultNum++;
  }
  return resultNum;
}
```

### 코드 해설

i부터 j까지 for반복문을 이용하여 배열에 넣어준 후, 하나의 문자열로 합친 후 다시 split 하여 두 자릿 수도  
모두 하나의 숫자로 나뉜 배열을 만들었습니다. 그다음 만들어진 배열로 for반복문을 돌려서 k와 같으면 최종적으로 리턴해주는 변수에 1을 더하여 답을 구했습니다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/120887'>프로그래머스 코딩테스트 입문 k의 개수</a>
