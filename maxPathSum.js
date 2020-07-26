/*
 * @Author: zfd
 * @Date: 2020-06-30 06:57:42
 * @LastEditTime: 2020-07-26 11:10:06
 * @Description: 
 * @FilePath: \algorithm\maxPathSum.js
 */ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val){
    this.val = val;
    this.right = this.left = null;
}
let nodeArr = [-10,9,20,null,null,15,7];
function createBinaryTreeWithSequence (tree,i){//层序构造二叉树
    if(i <= nodeArr.length / 2){
        if(i === 1){
            tree = new TreeNode(nodeArr[i-1]);
        }else if(tree === null){
            return;
        }else if(i == parseInt(nodeArr.length / 2)){
            tree.left = nodeArr[i*2-1];
            if(nodeArr.length % 2 != 0){
                tree.right = nodeArr[i*2];
            }
            return;
        }
        
        if(nodeArr[i*2-1] === null){
            tree.left = null;
        }else{
            tree.left = new TreeNode(nodeArr[i*2-1]);
        }

        if(nodeArr[i*2] === null){
            tree.right = null;
        }else{
            tree.right = new TreeNode(nodeArr[i*2]);
        }
        createBinaryTreeWithSequence(tree.left,++i);//如果是i++，那么只是返回了i!!!
        createBinaryTreeWithSequence(tree.right,++i);
        return tree;
    }
}
console.log(createBinaryTreeWithSequence(null,1));



























// var maxPathSum = function(root) {
//     let list = [];
//     DrawAdjList(root,null,list);
    
// };
// function DrawAdjList(root,parent,list){
//     if(root.val){
//         let listNode = new ListNode(root.val);
//         let p = listNode.next;
//         let temp = [parent,root.left,root.right];
//         for(let i of temp){
//             if(i){
//                 p = new ListNode(i.val);
//                 p = p.next;
//             }
//         }
//         list.push(listNode);
//         DrawAdjList(root.left,root,list);
//         DrawAdjList(root.right,root,list);
//     }
// }

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }