// 创建二叉树对象
function TreeCode() {
  let BiTree = function (ele) {
    this.data = ele;
    this.lChild = null;
    this.rChild = null;
  };

  this.createTree = function () {
    let biTree = new BiTree('A');
    biTree.lChild = new BiTree('B');
    biTree.rChild = new BiTree('C');
    biTree.lChild.lChild = new BiTree('D');
    biTree.lChild.lChild.lChild = new BiTree('G');
    biTree.lChild.lChild.rChild = new BiTree('H');
    biTree.rChild.lChild = new BiTree('E');
    biTree.rChild.rChild = new BiTree('F');
    biTree.rChild.lChild.rChild = new BiTree('I');
    return biTree;
  };
}

//前序遍历
function ProOrderTraverse(biTree) {
  if (biTree == null) return;
  console.log(biTree.data);
  ProOrderTraverse(biTree.lChild);
  ProOrderTraverse(biTree.rChild);
}

//中序遍历
function InOrderTraverse(biTree) {
  if (biTree == null) return;
  InOrderTraverse(biTree.lChild);
  console.log(biTree.data);
  InOrderTraverse(biTree.rChild);
}

//后续遍历
function PostOrderTraverse(biTree) {
  if (biTree == null) return;
  PostOrderTraverse(biTree.lChild);
  PostOrderTraverse(biTree.rChild);
  console.log(biTree.data);
}

let myTree = new TreeCode();
console.log(myTree.createTree());

console.log('前序遍历');
ProOrderTraverse(myTree.createTree());

console.log('中序遍历');
InOrderTraverse(myTree.createTree());

console.log('后续遍历');
PostOrderTraverse(myTree.createTree());
