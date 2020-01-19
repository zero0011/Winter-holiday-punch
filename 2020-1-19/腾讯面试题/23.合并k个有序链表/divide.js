/**
 * 解法3 : 分治
 */

 // 两两合并两个链表
 var mergeList = function(l1,l2) {
     if(l1 == null) return l2;
     if(l2 == null) return l1;
     // 哨兵结点
     let pre = { next : null };
     let currNode = pre;
     while(l1 !== null && l2 !== null) {
         if(l1.val < l2.val) {
             pre.next = l1;
             l1 = l1.next;
         } else {
             pre.next = l2;
             l2 = l2.next;
         }
         pre = pre.next;
     }
     pre.next = l1 || l2;
     return currNode.next;
 }


 var mergeKLists = function(lists) {
    if(lists.length == 0 || lists == null) return null;
    let left = 0;
    let right = lists.length - 1;
    while(right > 0) {
        while(left < right) {
            lists[left] = mergeList(lists[left],lists[right]);
            left++;
            right--;
        }
        left = 0;
    }
    return lists[0];
 }


 let arr = [1,2,3,4,5,6,7,8,9,10];
 var sum = function(arr) {
    
 }
 console.log(sum(arr))