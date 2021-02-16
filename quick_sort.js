let arr = [4,3,55,6,1,2];

function quickSort(nums){
    if(nums <= 1){
        return nums;
    }
    let pivot = nums[nums.length -1];
    let left = [];
    let right = [];
    for(let i=0;i < nums.length-1;i++){
        if(nums[i] < pivot){
            left.push(nums[i]);
        }
        else{
            right.push(nums[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.log(quickSort(arr));