/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map()
    for(let num=0 ; num<=nums.length ; num++){
      let  needed = target-nums[num]
       if(seen.has(needed))return[seen.get(needed),num]
       seen.set(nums[num],num)
        }
    }
