/**
 * 分隔数组 :
 * 给定一个链表 和 一个特定值 x ， 对链表进行分隔 ， 使得所有小于
 * x 的节点都在 大于或等于 x 的节点之前
 * 
 * note : 你应该保留两个分区中每个节点的初始相对位置
 */

 // 链表节点的定义
 function Node(val) {
     this.val = val;
     this.next = null;
 }

 // 解法1

 var partition = function(head,x) {
    let less = new Node(0);
    let before = less;
    let more = new Node(0);
    let after = more;
    while(head !== null) {
        if(head.val < x) {
            less.next = head;
            less = less.next;
        } else if(head.val >= x) {
            after.next = head;
            after = after.next;
        }
        head = head.next;
    }

    after.next = null;

    before.next = more.next;
    return less.next;
  }


  