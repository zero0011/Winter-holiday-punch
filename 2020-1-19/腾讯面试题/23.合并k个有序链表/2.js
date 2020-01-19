/**
 * 合并两个有序链表
 */

 // 结点类
 function ListNode (val) {
     this.val = val;
     this.next = null;
 }

 var mergeList = function(l1,l2) {
     if(l1 == null) return l2;
     if(l2 == null) return l1;
    // 哨兵结点
    let pre = { next : null };
    let curr = pre;
    while(l1 !== null && l2 !== null) {
        if(l1.val <= l2.val) {
            pre.next = l1;
            l1 = l1.next;
        } else if(l1.val > l2.val){
            pre.next = l2;
            l2 = l2.next;
        }
        pre = pre.next;
    }
    pre.next = l1 || l2;
    return curr.next;
 }

 let n1 = new ListNode(1)
 let n2 = new ListNode(4)
 let n3 = new ListNode(5)
 n1.next = n2;
 n2.next = n3;

 let m1 = new ListNode(1)
 let m2 = new ListNode(3)
 let m3 = new ListNode(4)
 m1.next = m2;
 m2.next = m3;

 console.log(mergeList(n1,m1))