 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function FindPath(root, expectNumber)
{
    if(root == null) return; 
    let stack = [];
    let res = [];
    stack.push(root);
    while(stack.length !== 0) {
        let num = stack.pop();
        res.push(num.val);
        if(num.right) {
            stack.push(num.right)
        }
        if(num.left) {
            stack.push(num.left);
        }
    }
    return res;
}

let t1 = new TreeNode(10);
let t2 = t1.left = new TreeNode(5);
t1.right = new TreeNode(12);
t2.left = new TreeNode(4);
t2.right = new TreeNode(7)

console.log(FindPath(t1))