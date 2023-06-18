# Plus One

<p style='font-size: 20px'>You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

</p>

<br />
<br />

### 🌱example

```javascript
Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
Output: [1, 1, 2, 3, 4, 4];
```

### 정답 풀이

```javascript
// singly-linked list constructor 함수
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (list1, list2) {
  let result = new ListNode();
  let temp = result;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  temp.next = list1 || list2;
  return result.next;
};

// 콘솔 풀이 과정
let result = new ListNode();
console.log(result); // {val: 0, next: null};
let temp = result; // temp = {val: 0, next: null};

// list1 = [1, 2, 4], list2 = [1, 3, 4]
if (list1.val < list2.val) {
  temp.next = list1;
  list1 = list1.next;
} else {
  temp.next = list2;
  list2 = list2.next;
}

// list1.val = 1, list2.val = 1
// else 조건에 성립
temp.next = list2;
list2 = list2.next; // 3 -> 4

temp = temp.next; // //  1 -> 3 -> 4

// list.val = 2, list2.val = 3
temp.next = list1;
list1 = list1.next; // 2 -> 4

temp = temp.next; // 1 -> 2 -> 4

// ... 이 과정을 반복하게 된다.
```

   <br />
   <br />
   <br />

### 참고했던 풀이 영상

<a href="https://www.youtube.com/watch?v=26GN2SsiBKY">달레님 풀이</a>

### 문제 출처

<a href='https://leetcode.com/problems/merge-two-sorted-lists/description/'>LeetCode 21. Merge Two Sorted Lists</a>
