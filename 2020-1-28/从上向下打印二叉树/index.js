/**
 * @description {这是树的节点类} 
 * @param {any} x 
 */
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function PrintFromTopToBottom(root)
{
    if(root == null) return null;
    let queue = [];
    let res = [];
    queue.push(root);
    while(queue.length !== 0) {
        let currNode = queue.shift();
        res.push(currNode.val);
        if(currNode.left) {
            queue.push(currNode.left)
        }
        if(currNode.right) {
            queue.push(currNode.right);
        }
    }
    return res;
}



let t1 = new TreeNode(1);
let t2 = t1.left = new TreeNode(2); 
let t3 = t1.right = new TreeNode(3);
 t2.left = new TreeNode(4);
 t2.right =  new TreeNode(5);
 t3.left = new TreeNode(6);
 t3.right = new TreeNode(7);


 console.log(PrintFromTopToBottom(t1))