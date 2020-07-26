/*
 * @Author: zfd
 * @Date: 2020-05-09 21:57:01
 * @LastEditTime: 2020-06-30 07:06:14
 * @Description: 2. 两数相加
 * @FilePath: \algorithm\addTwoNumbers.js
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // let myL1 = l1,myL2 = l2;
    // let carry = 0;
    
    // console.log(v1,v2,carry);
    let carry = 0;
    let l3,n3;
    while(l1 || l2 || carry)
    {
        let [v1,v2] = [0,0]; 
        if(l1)
        {
            v1 = l1.val;
            l1 = l1.next;
        }
        if(l2)
        {
            v2 = l2.val;
            l2 = l2.next;
        }
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);
        if(!n3)
        {
            l3 = new ListNode(sum % 10);
            n3 = l3;
        }else
        {
            n3.next = new ListNode(sum % 10);
            n3 = n3.next;
        }     
    }
    return l3;
};
//(2 -> 4 -> 3) + (5 -> 6 -> 4)
