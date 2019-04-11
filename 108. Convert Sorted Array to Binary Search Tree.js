/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    const midVal = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[midVal]);
    if (midVal !== 0) {
        node.left = sortedArrayToBST(nums.slice(0, midVal));
    }
    if (midVal !== nums.length - 1) {
        node.right = sortedArrayToBST(nums.slice(midVal + 1));
    }


    return node;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));