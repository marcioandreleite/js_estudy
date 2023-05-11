function ordernar(array) {
    return [...array].sort((a, b) => a - b)
}
const nums = Object.freeze([3, 1, 7, 9, 4, 6])
const numsOrdernados = ordernar(nums)
nums[0] = 1000
// nums.sort((a, b) => a - b) caso queira ordernar o nums
console.log(nums, numsOrdernados)

const parteNums = nums.slice(1)
console.log(parteNums, nums)