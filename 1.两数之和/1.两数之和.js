/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var memory = new Map()
    for(let i = 0; i < nums.length; i++){
        if(memory.has(target - nums[i])){
            return [memory.get(target - nums[i]), i]
        }else{
            memory.set(nums[i], i)
        }
    }
};
// @lc code=end

