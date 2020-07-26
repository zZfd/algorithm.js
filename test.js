/*
 * @Author: zfd
 * @Date: 2020-05-10 19:52:40
 * @LastEditTime: 2020-05-17 15:23:32
 * @Description: 
 * @FilePath: \algorithm\test.js
 */

//  let str = '123';
//  str.substring(1);
//  console.log( str.substring(1));

var milliseconds = new Date().getTime();
console.log("当前时间毫秒数",milliseconds);
var date = new Date();
console.log("当前时间对象",date.toString());
var convertToTwo = function(num){
    return num > 9 ? '' + num:'0' + num;
}
var formatDate = date.getFullYear() + "-"
                + convertToTwo(date.getMonth()) + "-"
                + convertToTwo(date.getDate()) + " "
                + convertToTwo(date.getHours()) + ":"
                + convertToTwo(date.getMinutes()) + ":"
                + convertToTwo(date.getSeconds()) 
console.log(formatDate);
