/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = false;
    let initNums = [];
    nums.forEach((v,i) => initNums[i] = v);
    let e1, e2;

    //nums = nums.filter(v => v <= target);
    nums.sort((firstE1, firstE2) => firstE1 - firstE2);
    // nums.forEach(element => {
    //     console.log(element);
    // });
    for (let i = nums.length - 1; nums[i] >= target / 2; i--) {
        if(result)
        {
            break;
        }
        for (let j = 0; nums[j] <= target / 2; j++) {
            if (nums[i] + nums[j] == target) {
                result = true;
                e1 = nums[j];
                e2 = nums[i];
                //console.log(`${e1},${e2}`);
                break;
            } else if (nums[i] + nums[j] > target) {
                break;
            }
        }
    }
    if (result) { 
        //console.log(`${e1},${e2}`);
        let index1 = initNums.indexOf(e1), index2 = initNums.lastIndexOf(e2);
        //console.log(index2);
        if(index1 != index2)
        {
            return [index1, index2];

        }else{
            return [];
        }
    }
    else {
        return [];
    }
   
}


console.log(twoSum([3,2,4], 6));
