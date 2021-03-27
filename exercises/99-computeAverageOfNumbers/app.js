// Write your function here

function computeAverageOfNumbers(nums){
    let sum = 0;
    if (nums && nums.length > 0) {
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
    } else {
        return sum;
    }
    return sum / nums.length;
};

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);