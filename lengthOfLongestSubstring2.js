/*
 * @Author: zfd
 * @Date: 2020-06-19 08:25:02
 * @LastEditTime: 2020-06-19 09:46:15
 * @Description: 滑动窗口
 * @FilePath: \algorithm\lengthOfLongestSubstring2.js
 */ 
/************************abccbcabc  3 */
/***************pwwkew 3 */

/*************解法1 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1){
        return s.length;
    }
    let i = 0,maxLength = 1,arr = [];
    arr.push(s[i++])
    while(i < s.length){
        let index = arr.indexOf(s[i]);
        if(index != -1){
            arr = arr.slice(index + 1);
            arr.push(s[i++]);
        }else{
            arr.push(s[i++]);
            maxLength = Math.max(maxLength,arr.length);
            //maxLength = arr.length > maxLength ? arr.length : maxLength;
        }
    }
    return maxLength;
};
let maxLength = lengthOfLongestSubstring('abccbcabc');
console.log(maxLength);
/***********************解法2 */
/************************abccbcabc  3 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map(), max = 0
    for(let i = 0, j = 0; j < s.length; j++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i)
        }
        max = Math.max(max, j - i + 1)
        map.set(s[j], j)
    }
    return max
};

// let index = arr.indexOf(3);
// arr = arr.slice(index);
// let s = new Set(arr);
// arr = Array.from(s);
// console.log(arr.length);