/**
 * @description { 反转单链表 }
 * @param {*} head 
 * @returns {*} List
 */

 // 定义单链表
 function ListNode (val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
     // 哑节点
    let pre = null ;
    while(head !== null) {
        let nextNode = head.next;
        head.next = pre;
        pre = head;
        head = nextNode;
    }
    return pre;
}

let node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);

// console.log(node)
console.log(reverseList(node))