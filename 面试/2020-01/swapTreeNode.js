//
// 树左右节点交换
//      1
//    2   3
//  4  5 6  7
//  =>
//      1
//    3   2
//  7  6 5  4
//


function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function swapTreeNode(rootNode) {
  if (!rootNode) {
    return;
  }

  const tmp = rootNode.left;
  rootNode.left = rootNode.right;
  rootNode.right = tmp;
  swapTreeNode(rootNode.left);
  swapTreeNode(rootNode.right);
  return rootNode;
}

const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
    },
    right: {
      val: 7,
    }
  }
};

console.log(JSON.stringify(tree, null, 2));
console.log(JSON.stringify(swapTreeNode(tree), null, 2));
