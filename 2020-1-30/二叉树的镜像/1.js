// 结点类
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}


function Mirror(root) {
    if(root == null) return;
    let temp;
    if(root.left || root.right) {
        temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
    if(root.left) {
        Mirror(root.left);
    }
    if(root.right) {
        Mirror(root.right);
    }
    return root;
}

let t1 = new TreeNode(8);
let t2 = t1.left = new TreeNode(6);
let t3 = t1.right = new TreeNode(10);
t2.left = new TreeNode(5);
t2.right = new TreeNode(7)
t3.left = new TreeNode(9)
t3.right = new TreeNode(11);

console.log(t1)
console.log(Mirror(t1))