class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

let BTN = new BinaryTreeNode(50)
let thirty = BTN.insertLeft(30)
thirty.insertRight(40)
let twenty = thirty.insertLeft(20)
twenty.insertLeft(10)


let eighty = BTN.insertRight(80)
eighty.insertLeft(70).insertLeft(69)
let ninety = eighty.insertRight(90)
ninety.insertLeft(85)
ninety.insertRight(100)

function isBinarySearchTree(treeRoot){
  const nodesAndBoundsStack = []
  nodesAndBoundsStack.push({
    node: treeRoot,
    lowerBound: Number.NEGATIVE_INFINITY,
    upperBound: Number.POSITIVE_INFINITY
  })

  while(nodesAndBoundsStack.length){
    const { node, lowerBound, upperBound } = nodesAndBoundsStack.pop()

    if(node.value <= lowerBound || node.value >= upperBound){
      return false
    }

    if(node.left){
      nodesAndBoundsStack.push({
        node: node.left,
        lowerBound,
        upperBound: node.value
      })
    }

    if(node.right){
      nodesAndBoundsStack.push({
        node: node.right,
        lowerBound: node.value,
        upperBound
      })
    }
  }
  return true
}

function findLargest(rootNode){

  if(!rootNode){
    throw new Error('Tree must have at least 1 node')
  }

  if(rootNode.right){
    return findLargest(rootNode.right)
  }

  return rootNode.value
}

function findSecondLargest(rootNode){
  if(!rootNode || (!rootNode.left && !rootNode.right)){
    throw new Error('Tree must have at least 2 nodes')
  }

  if(rootNode.left && !rootNode.right){
    return findLargest(rootNode.left)
  }

  if(rootNode.right && !rootNode.right.left && !rootNode.right.right){
    return rootNode.value
  }

  return findSecondLargest(rootNode.right)
}
console.log(BTN)
console.log("isBinarySearchTree:", isBinarySearchTree(BTN))
console.log("findLargest:", findLargest(BTN))
console.log("findSecondLargest:", findSecondLargest(BTN))
