
/* Q3) Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.
 
Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2:

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 */


class Node{
    constructor(data){
        this.data = data;
        this.next= null;

    }
}

class LL{
    constructor(){
        this.head=null;
        this.tail=null;
    }
    takeinput(ele){
        var newnode = new Node(ele)
        if(this.head == null){
            this.head=newnode
            this.tail=newnode
        }
        else{
            this.tail.next=newnode;
            this.tail=this.tail.next;
        }
    }
    fitail(){
        let tails = this.head;
        while(tails.next!=null){
            tails=tails.next;
        }
        tails.next=this.head.next
    }
    cycle(){
        let remhead = this .head
        let first = this.head
        if(first == null ){
            return false
        }
        while(first!=null){
            first = first.next.next;
            remhead= remhead.next;
            if(remhead == first){
                return true
            }
        }
        if(first==null){
            return false
        }
    }
    printll(){
        var temp =this.head;
        var str = " ";
        while(temp){
            str+=temp.data+" ";
            temp= temp.next;
        }
        console.log(str)
    }
}

var ll = new LL();
ll.takeinput(3)
ll.takeinput(2)
ll.takeinput(0)
ll.takeinput(-4)
//ll.printll();
ll.fitail()
console.log(ll.cycle());