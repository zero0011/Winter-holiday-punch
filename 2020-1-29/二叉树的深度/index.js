/**
 * 题目 : 输入一颗二叉树 , 求该树的深度
 */

 // 结点类
 function TreeNode (x) {
     this.val = x;
     this.left = null;
     this.right = null;
 }

 function TreeDepth(pRoot,count) {
     if(pRoot == null) return ;
     if(pRoot.left || pRoot.right) {
        count++;
        if(pRoot.left) {
            TreeDepth(pRoot.left,count);
        }
        if(pRoot.right) {
            TreeDepth(pRoot.right,count);
        }
     }
     return count;
 }

 function getDepth(pRoot) {
    if(pRoot == null) return 0;
    let count = 1;
    let  res =  TreeDepth(pRoot , count);
    return res;
 }

 let t1 = new TreeNode(1);
 let t2 = t1.left = new TreeNode(2);
 let t3 = t1.right = new TreeNode(3);
 t2.left = new TreeNode(4);
 t2.right = new TreeNode(5);
 t3.left = new TreeNode(6);
 t3.right = new TreeNode(7);

//  console.log(t1)
 console.log(getDepth(t1))