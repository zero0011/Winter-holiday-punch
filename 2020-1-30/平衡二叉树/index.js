 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * @description {返回树的高度}
 * @param {*} root 
 * @returns {number} number
 */
function TreeDepth(root) {
    if(root == null) return 0;

    let left = TreeDepth(root.left);
    let right = TreeDepth(root.right);

    return Math.max(left , right) + 1;
}

function IsBalanced_Solution(pRoot)
{
    if(pRoot == null) return true;

    let leftDepth = TreeDepth(pRoot.left);
    let rightDepth = TreeDepth(pRoot.right);

    let diff = Math.abs(leftDepth - rightDepth);
    if(diff > 1) {
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}



function IsBalcanced(pRoot,Depth) {
    if(pRoot == null) {
        Depth = 0;
        return true;
    }
    let left , right ;
    if(IsBalcanced(pRoot.left,left) && IsBalcanced(pRoot.right,right)) {
        let diff = Math.floor(left - right);
        if(diff <= 1) {
            Depth = 1 + (left > right ? left : right);
            return true;
        }
    }
    return false;
}