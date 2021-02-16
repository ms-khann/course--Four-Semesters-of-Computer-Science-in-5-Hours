// let arr = [4,3,55,6,1,2];
let arr = [1,2,3,3,1,2];

function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let length = arr.length;
    let middle = Math.floor(length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle,length);
    left = mergeSort(left);
    right = mergeSort(right)
    return stich(left,right);
}
function stich(left,right){
    let res = [];
    while(left.length && right.length){
        if( left[0] < right[0]){
            res.push(left.shift());
        }
        else{
            res.push(right.shift());
        }
    }
    return res.concat(left,right);
}

console.log(arr);
console.log(mergeSort(arr));