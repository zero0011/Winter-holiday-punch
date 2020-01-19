/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 function ListNode (val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * 时间复杂度 : O(k N) , 其中 k 是链表的数目
 * - 我们可以在 O(n) 的时间内合并两个有序链表 , 其中 n 表示合并后链表的总长度
 * 空间复杂度 : O(1)
 */
var mergeKLists = function(lists) {
    let i = 0;
    let len = lists.length ;
    while(i < len - 1) {
        let res = mergeList(lists[i],lists[i+1]);
        lists[i+1] = res;
        i++;
    }
    return lists[len - 1];
};


// 连接两个链表的方法
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



// 测试
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

 let arr = [ n1 , m1 ]
 console.log(mergeKLists(arr))