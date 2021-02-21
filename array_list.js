class ArrayList{
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(val){
        this.data[this.length] = val;
        this.length++;
    }
    pop(){
        return this.delete(this.length-1);
    }
    get(index){
        return this.data[index];
    }
    delete(index){
        let ans = this.data[index];
        delete this.data[index];
        this._collapseTo(index);
        return ans;
    }
    _collapseTo(index){
        for(let i=index;i < this.length;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const list1 = new ArrayList();
list1.push(40);
list1.push(50);
list1.push(60);
list1.push(70);
console.log(list1.get(1));
console.log(list1.delete(2));
list1.pop();

console.log(list1);











function abc(){
    let arr = [1,2,3,4,5,6,7,8,9,10];
    for(let i=0;i< arr.length;i++){
        console.log(arr[i]);
    }
    for(let i=0;i< arr.length;i++){
        console.log(arr[i]);
    }
}

for(let i=0;i< arr.length;i++){
    for(let j=0;j< arr.length;j++){
        console.log(arr[i] + arr[]);
    }
}

O(n^2)
