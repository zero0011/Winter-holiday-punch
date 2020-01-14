/**
 * 题目 :
 *  给定一个链表 , 判断链表中是否有环。
 *  为了表示给定链表中的环 , 我们使用整数 pos 来表示链表尾连接到
 * 链表中的位置 (索引从 0开始)。
 * 如果 pos 是 -1 ， 则在该链表中没有环
 */


 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // 解法1 : 快慢指针
var hasCycle = function(head) {
    if(head == null || head.next == null) return false;
    let slow = head;
    let fast = head;
    while(slow !== fast) {
        if(fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};