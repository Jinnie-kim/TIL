# qr code

<p style='font-size: 20px'>
두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.
</p>

### 나의 풀이

```javascript
function solution(q, r, code) {
  let arr = [...code];
  arr = arr.map((el, index) => {
    let remainder = index % q;
    if (remainder === r) return el;
    return 0;
  });
  return arr.filter((el) => el !== 0).join('');
}
```

### 코드 해설

입력받은 문자열을 spread 연산자를 사용하여 배열로 바꿔서 새로운 변수에 저장한다.
arr변수를 map 메서드를 사용해서 각 index를 q로 나눈 나머지 값을 구하고 if문으로 나머지 값이 r과 같으면 el을 return하고
같지 않다면 0을 매핑하도록 한다. 마지막엔 filter메서드로 0인 원소를 거르고 join메서드로 문자열로 합쳐서 return한다.

<br />
<br />
<br />
<br />

### 문제 출처

<a href='https://school.programmers.co.kr/learn/courses/30/lessons/181903'>프로그래머스 코딩테스트 입문 qr code</a>
