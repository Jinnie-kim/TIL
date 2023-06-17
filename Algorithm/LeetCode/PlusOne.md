# Plus One

<p style='font-size: 20px'>You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

</p>

<br />
<br />

### 🌱example

```javascript
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
```

### 정답 풀이

```javascript
// 내가 작성한 풀이
const plusOne = function (digits) {
  let number = BigInt(digits.join('')) + 1n;
  let toStr = number.toString();
  // return Array.from(toStr);
  // return [...toStr];
  return toStr.split(''); // 이게 더 빠름.
};

// 다른 사람 solution보고 다시 작성한 풀이
const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    console.log(digits);
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1); // digits 배열이 9로만 이루어진 경우에 실행됨
  return digits;
};
```

처음에 문제를 보고 떠올린 풀이 방법은 전달받은 digits배열을 우선 문자열로 합친 후 Number 타입으로 변환을 하자 였다.
그래서 Number 메서드를 사용했는데, 배열의 길이가 작고 적당한 테스트 케이스는 통과가 됐는데, 배열의 길이가 많이 긴 테스트 케이스는 문자열로 변환 후 Number 메서드를 사용해서 타입 변환 시에 숫자가 커서 0으로 생략되는 에러가 있었다.
큰 숫자도 유연하게 다루기 위해서 BigInt메서드를 사용했고, BigInt 타입으로 변환한 경우 원시적인 산술연산을 지원하지 않기 때문에 `+ 1n`을 해줬다. 계산된 BigInt 타입 수를 다시 문자열로 변환해서, spread연산자를 사용해 배열로 바꾸어 return 해줬다.

풀이 후, 다른 사람들은 어떻게 풀었는 지 궁금해서 soltions 탭을 보다가 가장 많은 vote를 받은 코드를 공부했다.
digits배열을 역순으로 반복하면서 digits[i]에 1을 더하는데, 만약 digits[i]가 9를 초과하는 경우에는 1을 더해줬던 값을 0으로 바꿔주고 그 다음 digits[i]값에 1을 더한다. digits[i]값이 9를 초과하지 않는 경우에는 이때까지 계산된 digits배열을 return한다. 만약 digits배열의 원소가 모두 9여서 for loop를 끝나고 digits배열의 원소가 0으로만 채워져있는 경우 digits배열 맨 앞에 1을 삽입한 후 return한다.

두 개의 풀이 법 중에 뭐가 더 좋고 낫다 라는 걸 딱 잘라 나눌 수는 없고, 상황에 따라 적절한 풀이법을 가져다 쓰면 될 것 같다.
BigInt메서드를 사용한 풀이의 경우 큰 숫자가 들어오는 경우에 유용하지만 추가적인 형 변환과 메모리 사용이 필요하다.
두 번째 풀이의 경우 일반적인 자바스크립트 배열을 사용했기 때문에 다른 개발자가 볼 때 익숙하고 이해가 쉬울 수 있다.

   <br />
   <br />
   <br />

### 문제 출처

<a href='https://leetcode.com/problems/search-insert-position/description/'>LeetCode 35. Search Insert Position</a>
