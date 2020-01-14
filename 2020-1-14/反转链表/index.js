/**
 * 反转一个单链表
 * 
 * note:
 *  你可以迭代或递归地反转链表 。 你能否用两种方法解决这道题?
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
 * @return {ListNode}
 */

 // 用栈存储数据 
 /**
  *  时间复杂度 : O(n)  空间复杂度 : O(n)               
  */
var reverseList = function(head) {
    var currNode = head;
    var copy = [];
    while(currNode !== null) {
        copy.push(currNode.val);
        currNode = currNode.next;
    }
    currNode = head;
    while(currNode !== null) {
        currNode.val = copy.pop();
        currNode = currNode.next;
    }
    return head;
};

/**
 * 
 * @param {*} head 
 * @description {
 *  解法2 :
 *   双指针迭代
 * }
 */

var reverseList1 = function(head) {
    var pre = null;
    let curr = head;
    while(curr !== null) {
        let nextTemp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = nextTemp;
    }
    return pre;
}


/**
 * 解法3 :
 *  递归
 */

 var reverseList2 = function(head) {
    if(head === null || head.next === null) return head;

    let cur = reverseList2(head.next);

    head.next.next = head;
    head.next = null;

    return cur;
 }  


