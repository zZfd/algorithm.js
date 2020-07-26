/*
 * @Author: zfd
 * @Date: 2020-05-09 23:24:47
 * @LastEditTime: 2020-06-19 09:46:32
 * @Description: 超时了，没有采用滑动窗口
 * @FilePath: \algorithm\lengthOfLongestSubstring.js
 */

 /**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s){
        return 0;
    }
    let strLen = s.length,subLen = strLen;
    while(subLen > 1){
        let start = 0;
        while(start + subLen <= strLen){
            let subStr = s.substr(start,subLen);
            if(!IsDeplication(subStr)){
                return subLen;
            }
            start++;
        }
        subLen--;
    }
    return 1;
};

// function IsDeplication(subStr){
//     for(let i = 0; i < subStr.length; i++){
//         if(subStr.substring(i + 1).indexOf(subStr[i]) >= 0){
//             return true;
//         }
//     }
//     return false;
// }

// console.log(lengthOfLongestSubstring('uouiouououyiyi'));

// var fmtDate = "ddd MMM d HH:mm:ss 'UTC'zz'00' yyyy";