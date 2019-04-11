/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let maxDim = 0;

  function calcDim(root) {
    if (!root) return 0;
    let dim = 0;
    if (root.right) {
      dim += 1 + calDepth(root.right);
    }
    if (root.left) {
      dim += 1 + calDepth(root.left);
    }

    function calDepth(node) {
      let depth = 0;
      function helper(node, curr) {
        if (curr > depth) {
          depth = curr;
        }

        if (node.right) {
          helper(node.right, curr + 1);
        }
        if (node.left) {
          helper(node.left, curr + 1);
        }
      }
      helper(node, 0);

      return depth;
    }
    return dim;
  }

  function iterateThroughTree(root) {
    if (!root) return;
    if (calcDim(root) > maxDim) {
      maxDim = calcDim(root);
    }
    if (root.right) {
      iterateThroughTree(root.right);
    }
    if (root.left) {
      iterateThroughTree(root.left);
    }
  }
  iterateThroughTree(root);

  return maxDim;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right = new TreeNode(3);

console.log(diameterOfBinaryTree(root));
