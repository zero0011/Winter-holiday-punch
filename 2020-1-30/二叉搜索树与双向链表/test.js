/**
 * 创建二叉搜索树
 */

 class Node {
     constructor(data,left,right) {
        this._data = data;
        this._left = left;
        this._right = right;         
     }
     show() {
         return this._data;
     }
 }

 class BST {
     constructor() {
         this._root = null;
     }
     insert(data) {
        let node = new Node(data);
        if(this._root == null) {
            this._root = node;
        }
        else {
            let current , parent;
            current = this._root;
            while(true) {
                parent = current;
                if(data < current.data) {
                    current = current._left;
                    if(current == null) {
                        parent._left = node;
                        break;
                    }
                }
                else {
                    current = current._right;
                    if(current == null) {
                        parent._right = node;
                        break;
                    }
                }
            }
        }
     }
 }

 let nums = [10,6,14];

 let bst = new BST()
 for(let item of nums) {
     bst.insert(item);
 }

 console.log(bst)