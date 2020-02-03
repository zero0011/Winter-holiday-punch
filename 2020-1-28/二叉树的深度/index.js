/**
 * @description {结点类}
 * @param {any} x 
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

function TreeDepth(pRoot)
{
    if(pRoot == null) return 0;
    let count = 0;
    let queue = [];
    queue.push(pRoot);
    count = count + 1;
    while(queue.length !== 0) {
        let num = queue.shift();
        if(num.left && num.right) {
            queue.push(num.left);
            queue.push(num.right);
            count++;
        } else if(num.left && num.right == null) {
            queue.push(num.left);
            count++;
        } else if(num.right && num.left == null) {
            queue.push(num.right);
            count++;
        }
    }
    return count;
}


let t1 = new TreeNode(1);
let t2 = t1.left = new TreeNode(2);
let t3 = t1.right = new TreeNode(3);
 t2.left = new TreeNode(4);
 t2.right = new TreeNode(5);
 t3.left = new TreeNode(6);
 t3.right = new TreeNode(7);
 t2.left.left = new TreeNode(8)

 console.log(TreeDepth(t1))