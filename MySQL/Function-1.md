# 함수 Function (숫자열, 문자열)

## 💚 숫자 관련 함수들

|함수|설명|
|------|---|
|ROUND|반올림|
|CEIL|올림|
|FLOOR|내림|
```SQL
SELECT 
  ROUND(0.5), -- 1
  CEIL(0.4), -- 1
  FLOOR(0.6); -- 0
```
|함수|설명|
|------|---|
|ABS|절대값|
```SQL
SELECT ABS(1), ABS(-1), ABS(3 - 10); -- 1, 1, 7
```
```SQL
SELECT * FROM OrderDetails
WHERE ABS(Quantity - 10) < 5;
```
-> ```Quantity - 10```이 5보다 작거나 -5보다 크다는 것을 의미한다.

|함수|설명|
|------|---|
|GREATEST|( )안에서 가장 큰 값|
|LEAST|( )안에서 가장 작은 값|

```SQL
SELECT 
  GREATEST(1, 2, 3), -- 3
  LEAST(1, 2, 3, 4, 5); -- 1
```

### 🟢 그룹 함수 (집계 함수)

|함수|설명|
|------|---|
|MAX|가장 큰 값|
|MIN|가장 적은 값|
|COUNT|갯수 (NULL 값 제외)|
|SUM|총합|
|AVG|평균 값|

### 🟢 제곱근 함수

|함수|설명|
|------|---|
|POW(A, B), POWER(A, B)|A를 B만큼 제곱|
|SQRT|제곱근|
```SQL
SELECT
  POW(2, 3), -- 8
  POWER(5, 2), -- 25
  SQRT(16); -- 4
```
---
|함수|설명|
|------|---|
|TRUNCATE(N,n)|N을 소숫점 n자리까지 선택|

```SQL
SELECT
  TRUNCATE(1234.5678, 1), -- 1234.5
  TRUNCATE(1234.5678, 2), -- 1234.56
  TRUNCATE(1234.5678, 3), -- 1234.567
  TRUNCATE(1234.5678, -1), -- 1230
  TRUNCATE(1234.5678, -2), -- 1200
  TRUNCATE(1234.5678, -3); -- 1000
```
-> 정해진 자릿수만큼 잘라내기만 한다. (반올림, 올림, 내림하지 않는다.)

## 💚 문자열 관련 함수들

|함수|설명|
|------|---|
|UCASE, UPPER|모두 대문자로|
|LCASE, LOWER|모두 소문자로|

```SQL
SELECT 
  UPPER('abcDEF'), -- ABCDEF
  LOWER('abcDEF'); -- abcdef
```

|함수|설명|
|------|---|
|CONCAT(...)|괄호 안의 내용 이어붙임|
|CONCAT_WS(\*, ...)|괄호 안의 내용을 \*로 이어붙임(\*는 모든 문자열이 올 수 있음)|

```SQL
SELECT CONCAT('HELLO', ' ', 'THIS IS ', 2021); -- HELLO THIS IS 2021
```
-> CONCAT함수에서는 숫자도 문자열로 변환된다.
```SQL
SELECT CONCAT_WS('-', 2021, 8, 15, 'AM'); -- 2021-8-15-AM
```

```SQL
SELECT
	CONCAT_WS(' ', FirstName, LastName) AS FullName
FROM Employees;
```
<img src='https://user-images.githubusercontent.com/92916958/200236640-c786adec-627f-4e50-ab50-f7cc7e1a10ab.png' width="400" height="300">

|함수|설명|
|------|---|
|SUBSTR, SUBSTRING|주어진 값에 따라 문자열 자름|
|LEFT|왼쪽부터 N글자|
|RIGHT|오른쪽부터 N글자|

```SQL
SELECT
  SUBSTR('ABCDEFG', 3), -- CDEFG
  SUBSTR('ABCDEFG', 3, 2), -- CD
  SUBSTR('ABCDEFG', -4), -- DEFG
  SUBSTR('ABCDEFG', -4, 2); -- DE

  SELECT
  LEFT('ABCDEFG', 3), -- ABC
  RIGHT('ABCDEFG', 3); -- EFG
```
|함수|설명|
|------|---|
|LENGTH|문자열의 바이트 길이|
|CHAR_LENGTH, CHARACTER_LENGTH|문자열의 문자 길이|

```SQL
SELECT
  LENGTH('ABCDE'), -- 5
  CHAR_LENGTH('ABCDE'), -- 5
  CHARACTER_LENGTH('ABCDE'); -- 5 
```
-> ```LENGTH```값은 사용하는 언어나 브라우저 환경에 따라 값이 다르게 도출될 수 있다. 
<br />
-> 일반적으로 MySQL에서 글자수를 셀 때는 ```CHAR_LENGTH``` 또는 ```CHARACTER_LENGTH```를 사용한다.

|함수|설명|
|------|---|
|TRIM|양쪽 공백 제거|
|LTRIM|왼쪽 공백 제거|
|RTRIM|오른쪽 공백 제거|

```SQL
SELECT
  CONCAT('|', ' HELLO ', '|'), -- | HELLO |
  CONCAT('|', LTRIM(' HELLO '), '|'), -- |HELLO |
  CONCAT('|', RTRIM(' HELLO '), '|'), -- | HELLO|
  CONCAT('|', TRIM(' HELLO '), '|'); -- |HELLO|
```

|함수|설명|
|------|---|
|LPAD(S, N, P)|S가 N글자가 될 때까지 왼쪽에 P를 이어붙임|
|RPAD(S, N, P)|S가 N글자가 될 때까지 오른쪽에 P를 이어붙임|

```SQL
SELECT
	LPAD('ABC', 5, '-'), -- --ABC
	RPAD('ABC', 5, '-'); -- ABC--
```

|함수|설명|
|------|---|
|REPLACE(S, A, B)|S 중 A를 B로 변경|

```SQL
SELECT
	REPLACE('맥도날드에서 맥도날드 햄버거를 먹었다.', '맥도날드', '버거킹');
  -- 버거킹에서 버거킹 햄버거를 먹었다.
```
```SQL
SELECT
	Description,
	REPLACE(Description, ', and ', ','),
	REPLACE(REPLACE(Description, ', and ', ','), ',', ' and')
FROM Categories;
```
<img src='https://user-images.githubusercontent.com/92916958/200243954-acc388d2-2459-47e9-ada7-7e07e01a9744.png'>

```REPLACE(Description, ', and ', ',')``` 이렇게만 하면 마지막 ```and```가 중복되어 두 번 나오기 때문에 먼저 모든 ```and```를 ```','```로 바꿔주고 다시 ```and```로 바꿔준다. 

|함수|설명|
|------|---|
|INSTR(S,s)|S중 s의 첫 위치 반환, 없을 시 0을 반환|

```SQL
SELECT
  INSTR('ABCDE', 'ABC'), -- 1
  INSTR('ABCDE', 'BCDE'), -- 2
  INSTR('ABCDE', 'C'), -- 3
  INSTR('ABCDE', 'DE'), -- 4
  INSTR('ABCDE', 'F'); -- 0
```

|함수|설명|
|------|---|
|CONVERT(A, T)|A를 T 자료형으로 변환|

-> 원하는 자료형으로 바꿔주는 역할을 한다.
```SQL
SELECT
	'01' = '1', -- 0
    CONVERT('01', DECIMAL) = CONVERT('1', DECIMAL); -- 1
```