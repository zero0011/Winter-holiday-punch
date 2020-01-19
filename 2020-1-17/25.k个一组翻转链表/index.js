/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 定义单链表
 function ListNode (val) {
     this.val = val;
     this.next = null;
 }


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    // 哑节点
    let pre = null;
    let currNode = head;
    let start = currNode;
    while(k > 0) {
        let nextNode = currNode.next;
        currNode.next = pre;
        pre = currNode;
        currNode = nextNode;
        k--;
    }
    return pre;
};


let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

// console.log(reverseKGroup(node,2))


var reverseKGroup1 = function(head,k) {
    let pos = k;
    // 求链表长度
    let len = 0;
    let curr = head;
    let copy;
    while(curr !== null) {
        len ++;
        if(len === k) copy = curr;
        curr = curr.next;
    }
    // 反转一次 , 一共需要反转多少次
    // 哑节点
    let pre = null;
    let currNode = head;
    while(len >= k) {
        while(pos > 0) {
            let nextNode = currNode.next;
            currNode.next = pre;
            pre = currNode;
            pos--;
            if(pos === k - 1) {
                start = currNode;
            }
            currNode = nextNode;
        }
        start.next = currNode; // 链表连接
        pre = null;
        len -= k;
        pos = k;
    }
    return copy;
}

