
//   Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let pre = new ListNode(0);
    let res = pre;
    let curr1 = l1;
    let curr2 = l2;
    let carry = 0;
    while(curr1 !== null || curr2 !== null) {
        if(curr1 == null ) curr1.val = 0;
        if(curr2 == null ) curr2.val = 0;
        let sum = curr1.val + curr2.val + carry;
        carry = 0;
        if(sum > 9) {
            // 求个位
            let num = sum % 10;
            let newNode = new ListNode(num);
            pre.next = newNode;
            carry += Math.floor(sum / 10);
        } else {
            let newNode = new ListNode(sum);
            pre.next = newNode;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
        pre = pre.next;
    }
    return res.next;
}

let n1 = new ListNode(2);
n1.next = new ListNode(4);
n1.next.next = new  ListNode(3);

let n2 = new ListNode(5);
n2.next = new ListNode(6);
n2.next.next = new ListNode(4);

console.log(addTwoNumbers(n1,n2))