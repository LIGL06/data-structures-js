class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);
        if (!this.root) this.root = newNode;
        else this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode){
        if(newNode.data < node.data) {
            if(!node.left) return node.left = newNode;
            return this.insertNode(node.left, newNode);
        } else {
            if(!node.right) return node.right = newNode;
            return this.insertNode(node.right, newNode);
        }
    }

    avgOnRoot(node){
        let data = {};
        let result = [];
        let index = 0;
        if(!node.root) return 'no data';
        if(node.left) result.push(node.left.data);
        if(node.right) result.push(node.right.data);

    }


}