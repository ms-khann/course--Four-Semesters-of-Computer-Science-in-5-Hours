class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(value){
        const node = new Node(value);
        this.length++;
        if( !this.head ){
            this.head = node;
        }
        else{
            this.tail.next = node;
        }
        this.tail = node;
    }
    pop(){
        return this.delete( this.length -1 );
    }
    delete(index){
        if( index === 0 ){
            const head = this.head;
            if(head){
               this.head = head.next; 
            }else{
                this.tail = this.head = null;
            }
            this.length--;
            return head.value;
        }
        const node = this._find(index-1,this._testIndex);
        const excise = node.next;
        if(!excise) {
            return null;
        }
        node.next = excise.next;
        if(node.next && !node.next.next){
            this.tail = node.next;
        }
        this.length--;
        return excise.value;
    }
    get(index){
        const node = this._find(index,this._testIndex)
        if( !node ){
            return null;
        }
        return node.value;
    }
    _test(a,b){
        return a === b;
    }
    _find(value, test = this._test){
        let current = this.head;
        let i=0;
        while(current){
            if(test(value,current.value,i,current)){
                return current;
            }
            current = current.next;
            i++;
        }
        return null;
    }
    _testIndex(search,__,i){
        return search === i;
    }
}


let list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);

console.log(list);