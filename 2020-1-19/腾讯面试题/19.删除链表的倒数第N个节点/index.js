/**
 * 题目 : 删除链表的倒数第 n 个节点
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 //结点定义
 function ListNode (val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null || n == 0) return null;
    let slow = head;
    let fast = head;
    // 如果 n >= 2 , 则都行
    if(n >= 2) {
        for(let i = 0 ; i < n - 1; i ++) {
            if(fast.next !== null) {
                fast = fast.next;
            } else {
                return null;
            }
        }
        while(fast.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.val = slow.next.val;
        slow.next = slow.next.next;
    } else if(n == 1 && head.next !== null){ // 如果 n == 1 , 则要删除最后一个结点 , 只能获得倒数第二个结点, 才能删除
        while(fast.next.next !== null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
    } else if(n == 1 && head.next == null) {
        return null;
    }
    return head;
};

let n1 = new ListNode(1);
// n1.next = new ListNode(2);
// n1.next.next = new ListNode(3)

console.log(removeNthFromEnd(n1,1))