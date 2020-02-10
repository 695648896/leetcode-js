/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 操场跑圈，快的会追上慢的
    let slow = head
    let fast = head
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(fast == slow){
            return true
        }
    }
    return false
};
// @lc code=end

// Accepted
// 17/17 cases passed (80 ms)
// Your runtime beats 59.17 % of javascript submissions
// Your memory usage beats 50.46 % of javascript submissions (36.8 MB)