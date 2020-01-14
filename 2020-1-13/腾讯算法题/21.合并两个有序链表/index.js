/**
 * 将两个有序链表合并为 一个 新的有序链表并返回 。
 * 新链表是通过拼接给定的两个链表 的所有节点组成
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
var mergeTwoLists = function(l1, l2) {
    // 鲁棒性
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    // 哑节点
    let l3 = new ListNode('head');
    let currNode = l3;
    while(l1 !== null && l2!== null) {
        if(l1.val <= l2.val) {
            currNode.next = l1;
            l1 = l1.next;
        } else if(l1.val > l2.val){
            currNode.next = l2;
            l2 = l2.next;
        }
        currNode = currNode.next;
    }
    currNode.next = l1 === null ? l2 : l1;
    return l3.next;
};  

