class Tree{
    constructor(){
        this.root = null;
    }
    otObject(){
        return this.root;
    }
    add(value){
        if(this.root == null){
            this.root = new Node(value);
            return this.root;
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                // go left
                if(current.left){
                    current = current.left;
                }else{
                    current.left = new Node(value);
                    return;
                }
            }else{
                // go right
                if(current.right){
                    current = current.right;
                }else{
                    current.right = new Node(value);
                    return;
                }
            }
        }
        current = new Node(value);
    }
}
class Node{
    constructor(value,left =null,right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let tr = new Tree();
tr.add(40);
tr.add(30);
tr.add(20);
tr.add(35);
tr.add(50);
tr.add(45);
tr.add(60);
console.log(tr.otObject());


