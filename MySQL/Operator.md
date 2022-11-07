# 연산자 Operator

## 💚 사칙연산

```SQL
SELECT 1 + 2; -- 3
```

```SQL
SELECT 5 - 2.5 AS DIFFERENCE; 
```
-> DIFFERENCE라는 이름으로 값을 가져오겠다는 뜻이다.
<img src='https://user-images.githubusercontent.com/92916958/200161879-e165fd19-3c5f-481b-9552-f229071b0810.png'>

```SQL
SELECT 3 * (2 + 4) / 2, 'Hello';
```
-> 여러 개의 값을 가져올 수 있다.
<img src='https://user-images.githubusercontent.com/92916958/200161847-30e847f4-accf-4184-923b-ebfb52c94b39.png' />

```SQL
SELECT 3 * (2 + 4) / 2 AS Number, 'Hello' AS Text;
```

```SQL
SELECT 'ABC' + 3; -- 3
```
-> 문자열과 숫자를 더하면 문자열을 0으로 인식한다.

```SQL
SELECT 'ABC' * 3; -- 0
```
-> 문자열을 0으로 인식하기 때문에 값은 0이 된다.

```SQL
SELECT '1' + '002' * 3; -- 7
```
-> 숫자로 구성된 문자열은 자동으로 숫자로 인식한다. 

```SQL
SELECT 
	OrderId, ProductID,
	OrderID + ProductId
FROM OrderDetails;
```
-> 각 column을 더한 값을 도출 할 수도 있다. 
<img src='https://user-images.githubusercontent.com/92916958/200206993-3c480446-96f1-48e9-a649-dc37fc9b189c.png'>

```SQL
SELECT 
	ProductName,
    Price / 2 AS HalfPrice
FROM Products;
```
<img src='https://user-images.githubusercontent.com/92916958/200207097-11b14d3e-7d43-4214-a74c-b60a9b3e7fee.png'>

```SQL
SELECT 
	ProductName,
    Price,
    Price / 2 AS HalfPrice,
    Price * 2 AS DoublePrice,
    Price * 0.75 AS SalePrice
FROM Products;
```

## 💚 참과 거짓

테이블에서 조건을 구할 때 중요한 연산자이기 때문에 확실히 알아두어야 한다.

```SQL
SELECT TRUE, FALSE -- 각 1과 0을 나타낸다.
```
```SQL
SELECT !TRUE, NOT 1, !FALSE, NOT FALSE; -- 0, 0, 1, 1

SELECT 0 = TRUE, 1 = TRUE, 0 = FALSE, 1 = FALSE; -- 0, 1, 1, 0 
```

|연산자|의미|
|------|---|
|IS|양쪽이 모두 TRUE 또는 FALSE|
|IS NOT|한쪽은 TRUE, 한쪽은 FALSE|

```SQL
SELECT TRUE IS TRUE; -- 1

SELECT TRUE IS NOT FALSE; -- 1

SELECT (TRUE IS FALSE) IS NOT TRUE; -- 1
```
|연산자|의미|
|------|---|
|AND, &&|양쪽이 모두 TRUE일 때만 TRUE|
|OR, \|\||한쪽이 TRUE면 TRUE|

```SQL
SELECT TRUE AND FALSE, TRUE OR FALSE; -- 0, 1

SELECT 2 + 3 = 6 OR 2 * 3 = 6; -- 1

SELECT 2 + 3 = 6 AND 2 * 3 = 6; -- 0
```

```SQL
SELECT * FROM OrderDetails
WHERE
	ProductId = 20
    AND (OrderId = 10514 Or Quantity = 50);
```
<img src='https://user-images.githubusercontent.com/92916958/200209711-7cf297c3-aa98-4f31-ac63-5bc973bf7ab4.png'>

## 💚 비교 연산자

|연산자|의미|
|------|---|
|=|양쪽 값이 같음|
|!=, <>|양쪽 값이 다름|
|>, <|왼쪽(오른쪽) 값이 더 큼|
|>=, <=|왼쪽(오른쪽) 값이 같거나 더 큼|

```SQL
SELECT 1 = 1, !(1 <> 1), NOT (1 < 2), 1 > 0 IS NOT FALSE; -- 1, 1, 0, 1

SELECT 'A' = 'A', 'A' != 'B', 'A' < 'B', 'A' > 'B'; -- 1, 1, 1, 0

SELECT 'A' = 'a'; -- 1
```
-> 알파벳 문자열에서 부등호는 뒤에 올 수록 더 크다. 
-> MySQL에서는 대소문자 구별을 하지 않는다.

\* 테이블의 column이 아닌 값으로 선택하기
```SQL
SELECT 
	ProductName, Price,
    Price < 20 AS CHEAP
FROM Products;
```


## 💚 BETWEEN 연산자

|연산자|의미|
|------|---|
|BETWEEN {MIN} AND {MAX}|두 값 사이에 있음|
|NOT BETWEEN {MIN} AND {MAX}|두 값 사이가 아닌 곳에 있음|

```SQL
SELECT 5 BETWEEN 1 AND 10; -- 1: 5는 1과 10 사이에 있다.

SELECT 5 BETWEEN 10 AND 1; -- 0: 큰 숫자를 앞에쓰면 거짓이 된다. 항상 작은 숫자를 앞에 써야 한다.
```
```SQL
SELECT 'banana' NOT BETWEEN 'Apple' AND 'camera'; -- 0

-- MySQL은 대소문자 구별을 하지 않으므로 'b는 a와 c사이에 있다'를 계산하면 된다.
```
```SQL
SELECT * FROM OrderDetails
WHERE ProductID BETWEEN 1 AND 4;

SELECT * FROM Customers
WHERE CustomerName BETWEEN 'b' AND 'c';
-- 고객이름이 'b'보다 크고 'c'보다 작은 이름이라면, 'b'로 시작하는 이름들만 걸러진다.
-- 'b'로 시작하는 어떤 이름이든 'b'보다는 사전적으로 뒤에 오기 때문이다.
```

## 💚 IN 연산자

|연산자|의미|
|------|---|
|IN (...)|괄호 안의 값들 가운데 있음|
|NOT IN (...)|괄호 안의 값들 가운데 없음|

```SQL
SELECT 1 + 2 IN (2, 3, 4); -- 1

SELECT 'Hello' IN (1, TRUE, 'hello'); -- 1 
```

## 💚 LIKE 연산자 (❗️)

|연산자|의미|
|------|---|
|LIKE '...%...'|0~N개 문자를 가진 패턴|
|LIKE '..._...'|_ 갯수만큼의 문자를 가진 패턴|
```SQL
SELECT
  'HELLO' LIKE 'hel%', -- 1
  'HELLO' LIKE 'H%', -- 1
  'HELLO' LIKE 'H%O', -- 1
  'HELLO' LIKE '%O', -- 1
  'HELLO' LIKE '%HELLO%', -- 1
  'HELLO' LIKE '%H', -- 0
  'HELLO' LIKE 'L%' -- 0
```
```SQL
SELECT * FROM Customers
WHERE CustomerName BETWEEN 'b' AND 'c';

-- LIKE 연산자를 사용해 간단하게 바꿀 수 있다.

SELECT * FROM Customers
WHERE CustomerName LIKE 'b%';
```

```SQL
SELECT
  'HELLO' LIKE 'HEL__', -- 1
  'HELLO' LIKE 'h___O', -- 1
  'HELLO' LIKE 'HE_LO', -- 1
  'HELLO' LIKE '_____', -- 1
  'HELLO' LIKE '_HELLO', -- 0
  'HELLO' LIKE 'HEL_', -- 0
  'HELLO' LIKE 'H_O' -- 0
```

```SQL
SELECT * FROM OrderDetails
WHERE OrderID LIKE '1025_'; -- MySQL에서는 숫자데이터를 문자 열로 필터링할 수 있다.
```
<img src='https://user-images.githubusercontent.com/92916958/200228278-5be32aff-ff93-4b8b-b2f2-589d7a80b232.png'>