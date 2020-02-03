
//   Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function(head, k) {

// };


// 反转单链表
function reverse(head) {
    if (head == null) return null;
    let pre = null;
    let currNode = head;
    while (currNode !== null) {
        let nextTemp = currNode.next;
        currNode.next = pre;
        pre = currNode;
        currNode = nextTemp;
    }
    return pre;
}

// 每 k 个一组反转 单链表 , 从头开始反转

function reverseKGroup(head, k) {
    if (head == null) return null;
    //  计算链表长度
    let Len = 0;
    let Node = head;
    while (Node !== null) {
        Len++;
        Node = Node.next;
    }
    // 需要反转链表的次数
    let pre;
    let currNode;
    let curr;
    let num;
    let last;
    let count = 0;
    currNode = head;
    while (Len - k >= 0) {
        count++;
        pre = null;
        num = k;
        while (num > 0) {
            let nextTemp = currNode.next;
            currNode.next = pre;
            pre = currNode;
            currNode = nextTemp;
            num--;
        }
        if (count == 1) {
            last = pre;
            curr = head;
        }
        if (count >= 2) {
            curr.next = pre;
        }
        Len = Len - k;
    }
    return last;
}

let n1 = new ListNode(1);
n1.next = new ListNode(2);
let n3 = n1.next.next = new ListNode(3);
n3.next = new ListNode(4);
let n5 = n3.next.next = new ListNode(5);
n5.next = new ListNode(6);
// console.log(n1)

let res = reverseKGroup(n1, 2);
console.log(res)

function Traversal(root) {
    let currNode = root;
    let res = [];
    if (root == null) return res;
    while (currNode !== null) {
        res.push(currNode.val);
        currNode = currNode.next;
    }
    return res;
}
console.log(Traversal(res))