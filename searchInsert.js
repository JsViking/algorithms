var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        const center = Math.floor((start + end) / 2)
        if (end - start <= 1) {
            if (target <= nums[start]) return start
            else if (target <= nums[end]) return end
            else return end + 1
        }
        
        if (nums[center] == target) {
            return center
        } else if (target < nums[center]) {
            end = center
        } else {
            start = center
        }
    }
};

console.log('VALUE: ', searchInsert([1,3,5,6], 0))