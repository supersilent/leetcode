/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    if (root === null) return null;
    let currSum = 0;

    function calcSum(node) {
        if (node.right !== null) {
            calcSum(node.right);
        }
        currSum += node.val;
        node.val = currSum;
        if (node.left !== null) {
            calcSum(node.left);
        }
    }
    calcSum(root);
    return root;
}


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(5);
root.left = new TreeNode(2);
root.right = new TreeNode(13);
console.log(convertBST(root));