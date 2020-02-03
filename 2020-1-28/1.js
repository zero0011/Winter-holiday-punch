function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * 二叉树的中序遍历
 */
 function helper(node,res) {
    if(node !== null) {
        if(node.left) helper(node.left,res);
        if(node) {
            res.push(node.val)
        }
        if(node.right) helper(node.right,res);
    }
 }

function inorderTraversal(root) {
    let res = [];
    helper(root,res);
    return res;
}

 let t1 = new TreeNode(1);
let t2 = t1.left = new TreeNode(2);
let t3 = t1.right = new TreeNode(3);
 t2.left = new TreeNode(4);
 t2.right = new TreeNode(5);
 t3.left = new TreeNode(6);
 t3.right = new TreeNode(7);

//  console.log(Traversal(t1))


/**
 * 二叉树的前序遍历  非递归
 */

 function TraversingNotRecursive(root) {
    let res = [];
    if(root == null) return res;
    let stack = [];
    stack.push(root);
    while(stack.length !== 0) {
        let num = stack.pop();
        res.push(num.val);
        if(num.right) {
            stack.push(num.right);
        }
        if(num.left) {
            stack.push(num.left);
        }
    }
    return res;
 }

 console.log(TraversingNotRecursive(t1))