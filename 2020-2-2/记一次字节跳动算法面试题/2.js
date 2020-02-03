// reverse 函数 反转一个区间之内的元素 
// 反转区间 [a , b) 的元素 , 注意是左闭右开

function reverse(a , b) {
    let pre = null;
    let currNode = a;
    // 终止的条件改一下就行了
    while(currNode !== b) {
        let nextTemp = currNode.next;
        currNode.next = pre;
        pre = currNode;
        currNode = nextTemp;
    }
    // 返回反转后的头结点
    return pre;
}


// 每 k 个一组反转链表

function reverseKGroup(head , k) {
    if(head == null) return null;
    // 区间 [a , b) 包含 k 个待反转元素
    let left = head;
    let right = head;
    for(let i = 0 ; i < k ; i ++) {
        // 不足 k 个 , 不需要反转 , base case
        if(right == null) return head;
        right = right.next;
    }
    // 反转前 k 个元素
    let newHead = reverse(left , right);
    // 递归反转后续链表并连接起来
    left.next = reverseKGroup(right ,k);
    return newHead;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let n1 = new ListNode(1);
n1.next = new ListNode(2);
let n3 = n1.next.next = new ListNode(3);
n3.next = new ListNode(4);
let n5 = n3.next.next = new ListNode(5);
// n5.next = new ListNode(6);

let res = reverseKGroup(n1,3);

// 遍历链表
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