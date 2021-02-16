let arr = [4,3,55,6,1];

function bubbleSort(nums){
    do{
        var swap = false;
        for(let i=0;i<nums.length;i++){
            if( nums[i] > nums[i+1]){
                let temp = nums[i+1];
                nums[i+1] = nums[i];
                nums[i] = temp;
            }
        }
    }while(swap);
}

console.log(arr);
bubbleSort(arr);
console.log(arr);
