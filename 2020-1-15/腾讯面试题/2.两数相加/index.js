/**
 *  2. 两数相加
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 /**
  * @description {链结点定义}
  */
 function ListNode (val) {
    this.val = val;
    this.next = null;
 }


var addTwoNumbers = function(l1, l2) {
    // 哑节点
    let pre = { next : null };
    let head = pre;
    let curr1 = l1;
    let curr2 = l2;
    let temp = 0;
    while(curr1 !== null || curr2 !== null) {
        let num1 = curr1 === null ? 0 : curr1.val;
        let num2 = curr2 === null ? 0 : curr2.val;
        let sum = num1 + num2 + temp;
        temp = 0;
        if(sum >= 10) {
            // 求个位
            var single = sum % 10;
            var ten = Math.floor(sum / 10) % 10;
            temp += ten;
            let singleNode = new ListNode(single);
            pre.next = singleNode;
            pre = pre.next;
        } else if (sum <= 9 && sum >= 0) {
            let node = new ListNode(sum);
            pre.next = node;
            pre = pre.next;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    if(curr1 === null) {
        pre.next = curr2;
        return head.next;
    } else if(curr2 === null) {
        pre.next = curr1;
        return head.next;
    } else if(curr1 === null && curr2 === null) {
        if(temp > 0) {
            let tempNode = new ListNode(temp);
            pre.next = tempNode;
        }
        return head.next;
    }
};


let l1 = new ListNode(5);


let l2 = new ListNode(5);


let sum = addTwoNumbers(l1,l2);
let arr = [];
while(sum !== null) {
    arr.push(sum.val)
    sum = sum.next;
}
console.log(arr)


var addTwoNumbers = function(l1,l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2 , curr = dummyHead;
    let carry = 0;
    while(p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        // 十位
        carry = Math.floor(sum / 10);
        //个位
        curr.next = new ListNode( sum % 10 );
        curr = curr.next;
        if( p !== null ) p = p.next;
        if ( q !== null ) q = q.next;
    }
    if( carry > 0 ) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
}
