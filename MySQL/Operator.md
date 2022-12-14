# μ°μ°μ Operator

## π μ¬μΉμ°μ°

```SQL
SELECT 1 + 2; -- 3
```

```SQL
SELECT 5 - 2.5 AS DIFFERENCE; 
```
-> DIFFERENCEλΌλ μ΄λ¦μΌλ‘ κ°μ κ°μ Έμ€κ² λ€λ λ»μ΄λ€.
<img src='https://user-images.githubusercontent.com/92916958/200161879-e165fd19-3c5f-481b-9552-f229071b0810.png'>

```SQL
SELECT 3 * (2 + 4) / 2, 'Hello';
```
-> μ¬λ¬ κ°μ κ°μ κ°μ Έμ¬ μ μλ€.
<img src='https://user-images.githubusercontent.com/92916958/200161847-30e847f4-accf-4184-923b-ebfb52c94b39.png' />

```SQL
SELECT 3 * (2 + 4) / 2 AS Number, 'Hello' AS Text;
```

```SQL
SELECT 'ABC' + 3; -- 3
```
-> λ¬Έμμ΄κ³Ό μ«μλ₯Ό λνλ©΄ λ¬Έμμ΄μ 0μΌλ‘ μΈμνλ€.

```SQL
SELECT 'ABC' * 3; -- 0
```
-> λ¬Έμμ΄μ 0μΌλ‘ μΈμνκΈ° λλ¬Έμ κ°μ 0μ΄ λλ€.

```SQL
SELECT '1' + '002' * 3; -- 7
```
-> μ«μλ‘ κ΅¬μ±λ λ¬Έμμ΄μ μλμΌλ‘ μ«μλ‘ μΈμνλ€. 

```SQL
SELECT 
	OrderId, ProductID,
	OrderID + ProductId
FROM OrderDetails;
```
-> κ° columnμ λν κ°μ λμΆ ν  μλ μλ€. 
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

## π μ°Έκ³Ό κ±°μ§

νμ΄λΈμμ μ‘°κ±΄μ κ΅¬ν  λ μ€μν μ°μ°μμ΄κΈ° λλ¬Έμ νμ€ν μμλμ΄μΌ νλ€.

```SQL
SELECT TRUE, FALSE -- κ° 1κ³Ό 0μ λνλΈλ€.
```
```SQL
SELECT !TRUE, NOT 1, !FALSE, NOT FALSE; -- 0, 0, 1, 1

SELECT 0 = TRUE, 1 = TRUE, 0 = FALSE, 1 = FALSE; -- 0, 1, 1, 0 
```

|μ°μ°μ|μλ―Έ|
|------|---|
|IS|μμͺ½μ΄ λͺ¨λ TRUE λλ FALSE|
|IS NOT|νμͺ½μ TRUE, νμͺ½μ FALSE|

```SQL
SELECT TRUE IS TRUE; -- 1

SELECT TRUE IS NOT FALSE; -- 1

SELECT (TRUE IS FALSE) IS NOT TRUE; -- 1
```
|μ°μ°μ|μλ―Έ|
|------|---|
|AND, &&|μμͺ½μ΄ λͺ¨λ TRUEμΌ λλ§ TRUE|
|OR, \|\||νμͺ½μ΄ TRUEλ©΄ TRUE|

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

## π λΉκ΅ μ°μ°μ

|μ°μ°μ|μλ―Έ|
|------|---|
|=|μμͺ½ κ°μ΄ κ°μ|
|!=, <>|μμͺ½ κ°μ΄ λ€λ¦|
|>, <|μΌμͺ½(μ€λ₯Έμͺ½) κ°μ΄ λ νΌ|
|>=, <=|μΌμͺ½(μ€λ₯Έμͺ½) κ°μ΄ κ°κ±°λ λ νΌ|

```SQL
SELECT 1 = 1, !(1 <> 1), NOT (1 < 2), 1 > 0 IS NOT FALSE; -- 1, 1, 0, 1

SELECT 'A' = 'A', 'A' != 'B', 'A' < 'B', 'A' > 'B'; -- 1, 1, 1, 0

SELECT 'A' = 'a'; -- 1
```
-> μνλ²³ λ¬Έμμ΄μμ λΆλ±νΈλ λ€μ μ¬ μλ‘ λ ν¬λ€. 
-> MySQLμμλ λμλ¬Έμ κ΅¬λ³μ νμ§ μλλ€.

\* νμ΄λΈμ columnμ΄ μλ κ°μΌλ‘ μ ννκΈ°
```SQL
SELECT 
	ProductName, Price,
    Price < 20 AS CHEAP
FROM Products;
```


## π BETWEEN μ°μ°μ

|μ°μ°μ|μλ―Έ|
|------|---|
|BETWEEN {MIN} AND {MAX}|λ κ° μ¬μ΄μ μμ|
|NOT BETWEEN {MIN} AND {MAX}|λ κ° μ¬μ΄κ° μλ κ³³μ μμ|

```SQL
SELECT 5 BETWEEN 1 AND 10; -- 1: 5λ 1κ³Ό 10 μ¬μ΄μ μλ€.

SELECT 5 BETWEEN 10 AND 1; -- 0: ν° μ«μλ₯Ό μμμ°λ©΄ κ±°μ§μ΄ λλ€. ν­μ μμ μ«μλ₯Ό μμ μ¨μΌ νλ€.
```
```SQL
SELECT 'banana' NOT BETWEEN 'Apple' AND 'camera'; -- 0

-- MySQLμ λμλ¬Έμ κ΅¬λ³μ νμ§ μμΌλ―λ‘ 'bλ aμ cμ¬μ΄μ μλ€'λ₯Ό κ³μ°νλ©΄ λλ€.
```
```SQL
SELECT * FROM OrderDetails
WHERE ProductID BETWEEN 1 AND 4;

SELECT * FROM Customers
WHERE CustomerName BETWEEN 'b' AND 'c';
-- κ³ κ°μ΄λ¦μ΄ 'b'λ³΄λ€ ν¬κ³  'c'λ³΄λ€ μμ μ΄λ¦μ΄λΌλ©΄, 'b'λ‘ μμνλ μ΄λ¦λ€λ§ κ±Έλ¬μ§λ€.
-- 'b'λ‘ μμνλ μ΄λ€ μ΄λ¦μ΄λ  'b'λ³΄λ€λ μ¬μ μ μΌλ‘ λ€μ μ€κΈ° λλ¬Έμ΄λ€.
```

## π IN μ°μ°μ

|μ°μ°μ|μλ―Έ|
|------|---|
|IN (...)|κ΄νΈ μμ κ°λ€ κ°μ΄λ° μμ|
|NOT IN (...)|κ΄νΈ μμ κ°λ€ κ°μ΄λ° μμ|

```SQL
SELECT 1 + 2 IN (2, 3, 4); -- 1

SELECT 'Hello' IN (1, TRUE, 'hello'); -- 1 
```

## π LIKE μ°μ°μ (βοΈ)

|μ°μ°μ|μλ―Έ|
|------|---|
|LIKE '...%...'|0~Nκ° λ¬Έμλ₯Ό κ°μ§ ν¨ν΄|
|LIKE '..._...'|_ κ°―μλ§νΌμ λ¬Έμλ₯Ό κ°μ§ ν¨ν΄|
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

-- LIKE μ°μ°μλ₯Ό μ¬μ©ν΄ κ°λ¨νκ² λ°κΏ μ μλ€.

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
WHERE OrderID LIKE '1025_'; -- MySQLμμλ μ«μλ°μ΄ν°λ₯Ό λ¬Έμ μ΄λ‘ νν°λ§ν  μ μλ€.
```
<img src='https://user-images.githubusercontent.com/92916958/200228278-5be32aff-ff93-4b8b-b2f2-589d7a80b232.png'>