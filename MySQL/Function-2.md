# 함수 Function (시간/ 날짜 관련 및 기타)

## 💚 시간 / 날짜 관련 함수들

|함수|설명|
|------|---|
|CURRENT_DATE, CURDATE|현재 날짜 반환|
|CURRENT_TIME, CURTIME|현재 시간 반환|
|CURRENT_TIMESTAMP. NOW|현재 시간과 날짜 반환|

```SQL
SELECT CURDATE(), CURTIME(), NOW(); 
-- 2022-11-07, 10:04:25, 2022-11-07 10:04:25
```
|함수|설명|
|------|---|
|DATE|문자열에 따라 날짜 생성|
|TIME|문자열에 따라 시간 생성|

```SQL
SELECT 
	'2021-6-1' = '2021-06-01', -- 0
    DATE('2021-6-1') = DATE('2021-06-01'), --1
    '1:2:3' = '01:02:03', -- 0
    TIME('1:2:3') = TIME('01:02:03'); --1 
```
```SQL
SELECT
  DATE('2021-6-1') = DATE('2021-06-01 01:02:03'), -- 1
  TIME('2021-6-1 1:2:3') = TIME('01:02:03'); --1
```
-> ```DATE```는 시간 문자열을 무시한다.
<br />
-> ```TIME```은 날짜 문자열을 무시한다.

```SQL
SELECT * FROM Orders
WHERE
	OrderDate BETWEEN DATE('1997-1-1') AND DATE('1997-1-31');
```
-> 1997년 1월 1일과 1997년 1월 31일 사이의 데이터만 필터링

|함수|설명|
|------|---|
|YEAR|주어진 DATETIME값의 년도 반환|
|MONTHNAME|주어진 DATETIME값의 월(영문) 반환|
|MONTH|주어진 DATETIME값의 월 반환|
|WEEKDAY|주어진 DATETIME값의 요일값 반환(월요일: 0)|
|DAYNAME|주어진 DATETIME값의 요일명(영문) 반환|
|DAYOFMONTH, DAY|주어진 DATETIME값의 날짜(일) 반환|

```SQL
SELECT
  OrderDate,
  CONCAT(
    CONCAT_WS(
      '/',
      YEAR(OrderDate), MONTH(OrderDate), DAY(OrderDate)
    ),
    ' ',
    UPPER(LEFT(DAYNAME(OrderDate), 3))
  )
FROM Orders;
```
<img src='https://user-images.githubusercontent.com/92916958/200294630-ffe417ae-97aa-4b30-a245-301428a7f4b3.png'>

|함수|설명|
|------|---|
|HOUR|주어진 DATETIME의 시 반환|
|MINUTE|주어진 DATETIME의 분 반환|
|SECOND|주어진 DATETIME의 초 반환|

```SQL
SELECT
	HOUR(NOW()), MINUTE(NOW()), SECOND(NOW());
```

|함수|설명|
|------|---|
|ADDDATE, DATE_ADD|시간 / 날짜 더하기|
|SUBDATE, DATE_SUB|시간 / 날짜 빼기|

```SQL
SELECT 
  ADDDATE('2021-06-20', INTERVAL 1 YEAR),
  ADDDATE('2021-06-20', INTERVAL -2 MONTH),
  ADDDATE('2021-06-20', INTERVAL 3 WEEK),
  ADDDATE('2021-06-20', INTERVAL -4 DAY),
  ADDDATE('2021-06-20', INTERVAL -5 MINUTE),
  ADDDATE('2021-06-20 13:01:12', INTERVAL 6 SECOND);
```
-> 사용자의 권한이 현재 만료되었는 지 따위를 확인할 수 있다.
-> 날짜간의 간격(INTERVAL)만큼 떨어진 날짜 또는 시간을 구함

|함수|설명|
|------|---|
|DATE_DIFF|두 시간 / 날짜 간 일수차|
|TIME_DIFF|두 시간 / 날짜 간 시간차|

-> 날짜(시간)간의 차이를 구함

```SQL
SELECT
  TIMEDIFF('2021-06-21 15:20:35', '2021-06-21 16:34:41');

SELECT * FROM Orders
WHERE
  ABS(DATEDIFF(OrderDate, '1996-10-10')) < 5;
```

|함수|설명|
|------|---|
|LAST_DAY|해당 달의 마지막 날짜|

```SQL
SELECT
  OrderDate,
  LAST_DAY(OrderDate),
  DAY(LAST_DAY(OrderDate)),
  DATEDIFF(LAST_DAY(OrderDate), OrderDate)
FROM Orders;
```

|함수|설명|
|------|---|
|DATE_FORMAT|시간 / 날짜를 지정한 형식으로 반환|

|함수|설명|
|------|---|
|%Y|년도 4자리|
|%y|년도 2자리|
|%M|월 영문|
|%m|월 숫자|
|%D|일 영문(1st, 2nd, 3rd...)|
|%d, %e|일 숫자(01 ~ 31)|
|%T|hh:mm:ss|
|%r|hh:mm:ss AM/PM|
|%H, %k|시 (~23)|
|%h, %I|시 (~12)|
|%i|분|
|%S, %s|초|
|%p|AM/PM|

```SQL
SELECT
  DATE_FORMAT(NOW(), '%M %D, %Y %T'),
  DATE_FORMAT(NOW(), '%y-%m-%d %h:%i:%s %p'),
  DATE_FORMAT(NOW(), '%Y년 %m월 %d일 %p %h시 %i분 %s초');
```

|함수|설명|
|------|---|
|STR_TO_DATE(S,F)|S를 F형식으로 해석하여 시간 / 날짜 생성|

```SQL
SELECT
  OrderDate,
  DATEDIFF(
    STR_TO_DATE('1997-01-01 13:24:35', '%Y-%m-%d %T'),
    OrderDate
  ),
  TIMEDIFF(
    STR_TO_DATE('1997-01-01 13:24:35', '%Y-%m-%d %T'),
    STR_TO_DATE(CONCAT(OrderDate, ' ', '00:00:00'), '%Y-%m-%d %T')
  )
FROM Orders;
```

## 💚 기타 함수들

|함수|설명|
|------|---|
|IF(조건, T, F)|조건이 참이라면 T, 거짓이면 F 반환|

```SQL
SELECT IF (1 > 2, '1는 2보다 크다.', '1은 2보다 작다.');
-- 1은 2보다 작다.
```
\* 조건이 하나 이상일 때 ```CASE```를 사용한다.

```SQL
SELECT
CASE
  WHEN -1 > 0 THEN '-1은 양수다.'
  WHEN -1 = 0 THEN '-1은 0이다.'
  ELSE '-1은 음수다.'
END;
-- -1은 음수다.
```

|함수|설명|
|------|---|
|IFNULL(A,B)|A가 NULL일 시 B 출력|

-> A가 값이 있다면 A를 출력하고, A가 NULL이라면 B를 출력한다.

```SQL
SELECT
  IFNULL('A', 'B'), -- A
  IFNULL(NULL, 'B'); -- B
```