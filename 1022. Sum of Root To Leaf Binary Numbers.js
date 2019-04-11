/*
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
var sumRootToLeaf = function (root) {
    let result = 0;
    let binary = '';

    function helper(node) {
        binary += node.val.toString();
        if (!node.left && !node.right) {
            result += parseInt(binary, 2);
        }
        if (node.left) {
            helper(node.left)
        }
        if (node.right) {
            helper(node.right)
        }
        binary = binary.slice(0, binary.length - 1);
    }
    helper(root)

    return result;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(1);

root.left = new TreeNode(0);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(1);
root.right = new TreeNode(1);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);
console.log(root)
console.log(sumRootToLeaf(root));