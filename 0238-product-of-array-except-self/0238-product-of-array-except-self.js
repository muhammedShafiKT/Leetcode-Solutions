/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let n = nums.length
    let output = new Array(n)

    let leftproduct = 1 
    for(let i=0;i<n;i++){
        output[i]=leftproduct
        leftproduct*=nums[i]
    }
    let rightproduct = 1
    for(let j=n-1 ; j>=0;j--){
        output[j]*=rightproduct
        rightproduct*=nums[j]
    }
    return output
    

};