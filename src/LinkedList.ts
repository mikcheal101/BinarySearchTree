import LinkedListNode from "./LinkedListNode";

class LinkedList {
    private head: LinkedListNode;
    private size: number;

    constructor() {
        this.size = 1;
        this.head = new LinkedListNode("head");
    }

    /**
     * Method to search for a node by its value
     * @param value any - the value to search for
     * @returns currentNode LinkedListNode | null - the found node or null
     */
    public FindNode = (value: any): LinkedListNode | null => {
        let currentNode: LinkedListNode | null = this.head;
        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };

    /**
     * Method to get the previous node
     * @param value any
     * @returns currentNode LinkedListNode | null - found node or null
     */
    public FindPrevious = (value: any): LinkedListNode | null => {
        let currentNode: LinkedListNode | null = this.head;
        while (currentNode && currentNode.next !== value) {
            currentNode = currentNode.next;
        }
        return currentNode;
    };

    /**
     * Method to insert data into the linked list
     * @param value any - the item to be stored in the node
     * @param item any - the item which the new node would be created after
     */
    public Insert = (value: any, item: any) => {
        let newNode: LinkedListNode = new LinkedListNode(value);
        let nextNode: LinkedListNode | null = this.FindNode(item);
        if (nextNode) {
            newNode.next = nextNode.next;
            nextNode.next = newNode;
            this.size++;
        }
    };

    /**
     * Method to list the members of the linked list
     */
    public Display = () => {
        let currentNode: LinkedListNode = this.head;
        while (currentNode.next) {
            console.log(currentNode.next.value);
            currentNode = currentNode.next;
        }
    }

    /**
     * Method to get the size of the LinkedList
     * @returns 
     */
    public GetSize = () => this.size;
}

export default LinkedList;
