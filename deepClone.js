/*
 * @Author: zfd
 * @Date: 2020-05-22 21:21:25
 * @LastEditTime: 2020-05-22 21:57:25
 * @Description: 
 * @FilePath: \algorithm\deepClone.js
 */ 

 function checkType(val){
     let type = Object.prototype.toString.call(val);
     return type.match(/^\[object (\w+)\]$/)[1];
 }

 function deepClone(target){
     let result;
     if(typeof target === Object){
        if(Array.isArray(target)){
            result = [];
            for(let i in target){
                result.push(deepClone(target[i]))
            }
        }else if(target === null){
            result = target;
        }else if(target.constructor === RegExp){
            result = target;
        }else{//普通对象
           result = {};
           for(let i in target){
               result[i] = deepClone(target[i]);
           }
        }
     }else{//基本数据类型
         result = target;
     }
     return result;    
 }
let arr = [1,2,3,5,323,2];
for(let i of arr){
    console.log(i);
}

console.log(checkType(1))

function deepClone(target){
    let result;
    if(typeof target === Object){
        if(Array.isArray(target)){//数组
            result = [];
            for(let i in target){
                result.push(target[i]);
            }
        }else if(target === null){
            result = null;
        }else if(target.constructor === RegExp){
            result = target;
        }else{//普通对象
            result = {};
            for(let i in target){
                result[i] = deepClone(target[i]);
            }
        }
    }else{//基本数据类型
        result = target;
    }
    return result;
}