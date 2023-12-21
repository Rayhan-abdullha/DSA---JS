class Node {
    constructor(val) {
            this.val = val
            this.next = null        
    }
}
class LinkedList {
    constructor(val) {
        this.head = {
            val,
            next: null
        };
        this.tail = this.head
        this.length = 1
    }
    append(val) {
        const node = new Node(val)
        this.tail.next = node
        this.tail = node
        this.length++
    }
    prepend(val) {
        const node = new Node(val)
        node.next = this.head
        this.head = node
        this.length++
    }
    insertByIndex(index, val){
        // TODO
    }
}
const linkedist = new LinkedList(1)
linkedist.append(2)
linkedist.prepend(10)
console.log(linkedist)