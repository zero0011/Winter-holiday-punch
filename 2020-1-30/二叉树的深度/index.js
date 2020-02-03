 // 结点类
 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function TreeDepth(pRoot)
{
    if(pRoot == null) return 0;

    let left = TreeDepth(pRoot.left);
    let right = TreeDepth(pRoot.right);

    return Math.max(left , right) + 1 ;
}

let t1 = new TreeNode(1);
let t2 = t1.left = new TreeNode(2);
t1.right = new TreeNode(3);
t2.left = new TreeNode(4);
t2.left.left = new TreeNode(5)

console.log(TreeDepth(t1))