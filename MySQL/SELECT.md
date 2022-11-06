# SELECT 

### 💚 원하는 Column 선택해서 가져오기 
<br />

```SQL
* -- 모든 것을 선택한다는 뜻

SELECT * FROM Customers; -- Customers에서 모든 데이터를 가져오겠다.

SELECT CustomerName, ContactName, Country FROM Customers; -- 가져오고 싶은 데이터 선별 
```

```SQL
-- 숫자, 문자열, NULL은 나중에 프로그래밍할 대 다양하게 적용할 수 있다.

SELECT
  CustomerName, 1, 'Hello', NULL
FROM Customers;
```

### 💚 원하는 row 선택해서 가져오기

```SQL
-- Orders에서 모든 데이터를 가져오되, EmployeeID가 3인 데이터만 가져오겠다.

SELECT * FROM Orders
WHERE EmployeeID = 3;
```
\* 줄바꿈, 대문자 작성은 가독성 측면에서 적용한 것이지 프로그래밍과 관련없다.

### 💚 데이터를 원하는 순서대로 가져오기 
```ORDER BY```
|구문|기준|기본|
|------|---|---|
|ASC|오름차순|✅|
|DESC|내림차순||

```SQL
SELECT * FROM Customers
ORDER BY ContactName; -- 기본 오름차순 적용됨
```
```SQL
-- 2가지 기준을 적용할 수 있다.
SELECT * FROM OrderDetails
ORDER BY ProductID ASC, Quatity DESC;
```
-> ProductID의 오름차순으로 먼저 정리하고, 같은 ProductID는 내림차순으로 정리한다는 뜻이다.

### 💚 데이터를 원하는 만큼만 가져오기
```LIMIT (가져올 데이터 개수)```
<br />
```LIMIT (가져올 데이터 시작) (가져올 데이터 개수)```

```SQL
-- 총 데이터 개수에서 10개만 가져온다.
SELECT * FROM Customers
LIMIT 10;
```

```SQL
-- 총 데이터에서 5번째 까지는 건너뛰고 6번째 부터 10개의 데이터를 가져온다.
SELECT * FROM Customers
LIMIT 5, 10;
```
-> 검색 결과 페이징이나 게시판의 보여질 글의 개수를 구현할 때 사용할 수 있다.

### 💚 데이터를 원하는 이름으로 가져오기
```AS```
```SQL
SELECT 
	CustomerID AS ID,
    CustomerName AS NAME,
    Address AS ADDR
FROM Customers;
```