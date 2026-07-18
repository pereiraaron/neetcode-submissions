/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let sentinel = new ListNode(0);
        sentinel.next = head;

        let left = sentinel;
        let right = head;

        for (let i = 0; i < n; i++) {
            right = right.next;
        }

        while (right) {
            right = right.next;
            left = left.next;
        }

        left.next = left.next.next;
        return sentinel.next;
    }
}
