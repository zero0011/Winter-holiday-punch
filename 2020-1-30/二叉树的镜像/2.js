// 结点类
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}


// 二叉树的镜像 非递归

function Mirror(root) {
    if(root == null) return;
    let queue = [];
    let temp;
    queue.push(root);
    while(queue.length !== 0) {
        let res = queue.shift();
        if(res.left) {
            queue.push(res.left);
        }
        if(res.right) {
            queue.push(res.right);
        }
        if(res.left || res.right) {
            temp = res.left;
            res.left = res.right;
            res.right = temp;
        }
    }
    return root;
}


let t1 = new TreeNode(8);
let t2 = t1.left = new TreeNode(6);
let t3 = t1.right = new TreeNode(10);
// t2.left = new TreeNode(5);
t2.right = new TreeNode(7)
t3.left = new TreeNode(9)
t3.right = new TreeNode(11);

console.log(t1)
console.log(Mirror(t1))