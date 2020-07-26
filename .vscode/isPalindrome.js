/*
 * @Author: zfd
 * @Date: 2020-06-19 10:34:37
 * @LastEditTime: 2020-06-19 10:56:14
 * @Description: 正则 + 双指针 + 数组逆转比较
 * @FilePath: \algorithm\.vscode\isPalindrome.js
 */ 

//  let pattern = /[^\w\d]*/g
//  console.log("A man, a plan, a canal: Panama".replace(pattern,"").toLowerCase())
// anana  planacanalpanama
//anna
var isPalindrome = function(s) {
     if(!s){
         //空字符串
         return true;
     }
     s = s.replace(/[^\w\d]*/g,"").toLowerCase();
     //采用双指针
     let left = 0,right = s.length - 1;
     while(left < right){
         if(s[left] != s[right]){
             return false;
         }
         left++;
         right--;
     }
    //  for(let i = 0; i < Math.ceil(s.length / 2); i++){
    //      if(s[i] != s[s.length - i - 1]){
    //          return false;
    //      }
    //  }
     return true;
};

var isPalindrome2 = function(s) {
    if(!s){
        //空字符串
        return true;
    }
    s = s.replace(/[^\w\d]*/g,"").toLowerCase();
    let arr = s.split('');
    console.log(arr.join());
    console.log(arr.reverse().join());
    // if(arr.join() == arr.reverse().join()){
    //     return true;
    // }
    // else{
    //     return false;
    // }
    return true;
};

console.log(isPalindrome2("race a car"))
