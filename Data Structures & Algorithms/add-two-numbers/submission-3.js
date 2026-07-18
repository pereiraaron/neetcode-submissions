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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let res = dummy;
        let total = 0;
        let carry = 0;

        while (l1 || l2 || carry) {
            total = carry;
            if (l1) {
                total += l1.val;
                l1 = l1.next;
            }

            if (l2) {
                total += l2.val;
                l2 = l2.next;
            }

            const num = total % 10;
            carry = Math.floor(total / 10);
            dummy.next = new ListNode(num);
            dummy = dummy.next;
        }
        return res.next;
    }
}
