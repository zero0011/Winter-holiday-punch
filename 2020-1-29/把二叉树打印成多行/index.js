 /**
  * @description {结点类}
  * @param {any} x 
  */
 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 


function Print(pRoot)
{
    if(pRoot == null) return ;
    console.log(pRoot.val);
    let queue = [];
    queue.push(pRoot);
    while(queue.length !== 0) {
        let num = queue.shift();
        if(num.left) {
            queue.push(num.left)
        }
        if(num.right) {
            queue.push(num.right);
        }
    }
}


/**
 * 前序遍历
 */
function Print_front(root) {
    if(root == null) return ;
    let stack = [];
    let res = [];
    stack.push(root);
    while(stack.length !== 0) {
        let node = stack.pop();
        res.push(node.val);
        if(node.right) {
            stack.push(node.right);
        }
        if(node.left) {
            stack.push(node.left);
        }
    }
    return res;
}
/**
 * 中序遍历
 */

function Print_mid(root) {
    if(root == null) return ;
    let stack = [];
    let res = [];
    stack.push(root);
    while(stack.length !== 0) {
        let node = stack.pop();
        
    }
}

/**
 * 递归 中序遍历
 */

 function Get_Print_Mid(root,res) {
    if(root == null) return;
    if(root.left) {
        Get_Print_Mid(root.left,res);
    }
    res.push(root.val)
    if(root.right) {
        Get_Print_Mid(root.right,res);
    }
 }

 function Print_Mid(root) {
    let res = [];
    Get_Print_Mid(root,res);
    return res;
 }
 

let t1 = new TreeNode(1);
let t2 = t1.left = new TreeNode(2);
let t3 = t1.right = new TreeNode(3);
t2.left = new TreeNode(4);
t2.right = new TreeNode(5);
t3.left = new TreeNode(6);
t3.right = new TreeNode(7);

// Print(t1)
// console.log(Print_front(t1))


console.log(Print_Mid(t1))