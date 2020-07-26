/*
 * @Author: zfd
 * @Date: 2020-07-26 14:27:48
 * @LastEditTime: 2020-07-26 20:24:52
 * @Description: 
 * @FilePath: \algorithm\createBinaryTreewithSequence.js
 */ 
/*
 * @Author: zfd
 * @Date: 2020-06-30 06:57:42
 * @LastEditTime: 2020-07-26 14:25:46
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
let nodeArr = [-10,9,20,null,null,15,7,8,9,11,10,11,12];//null即为叶节点
let seq = [];
let i = 0;
let tree = null;
function createBinaryTreeWithSequence(branch){//层序生成二叉树需队列结合递归实现
    if(i == 0){
        tree = new TreeNode(nodeArr[i]);
        if(nodeArr[++i] === null){
            tree.left = null;
        }else{
            tree.left = new TreeNode(nodeArr[i]);
        }

        if(nodeArr[++i] === null){
            tree.right = null;
        }else{
            tree.right = new TreeNode(nodeArr[i]);
        }
        seq.push(tree.right,tree.left);
        createBinaryTreeWithSequence(seq.pop());
    }else if(i < nodeArr.length-2){
        if(branch!=null){
            if(nodeArr[++i] === null){
                branch.left = null;
            }else{
                branch.left = new TreeNode(nodeArr[i]);
            }
    
            if(nodeArr[++i] === null){
                branch.right = null;
            }else{
                branch.right = new TreeNode(nodeArr[i]);
            }
            seq.unshift(branch.right,branch.left);
            createBinaryTreeWithSequence(seq.pop());
        }else{
            createBinaryTreeWithSequence(seq.pop());
        }
    }
    //return tree;
}

let generateArr = [];
function readBinaryTreeWithFirst(tree){//先序遍历
    if(tree!=null){
        generateArr.push(tree.val);
        readBinaryTreeWithFirst(tree.left);
        readBinaryTreeWithFirst(tree.right);
    }
    return generateArr;
}
function readBinaryTreeWithMid(tree){//中序遍历
    if(tree!=null){
        readBinaryTreeWithMid(tree.left);
        generateArr.push(tree.val);
        readBinaryTreeWithMid(tree.right);
    }
    return generateArr;
}
function readBinaryTreeWithEnd(tree){//后序遍历
    if(tree!=null){
        readBinaryTreeWithMid(tree.left);
        readBinaryTreeWithMid(tree.right);
        generateArr.push(tree.val);
    }
    return generateArr;
}
createBinaryTreeWithSequence(null)
console.log(readBinaryTreeWithFirst(tree));
// nodeArr = [-10,9,20,null,null,15,7,8,9,11,10,11,12];//null即为叶节点
 generateArr = [];
 console.log(readBinaryTreeWithMid(tree));
 generateArr = [];
 console.log(readBinaryTreeWithEnd(tree));
