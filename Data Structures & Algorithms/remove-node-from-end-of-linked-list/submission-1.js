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

        let size = 0;
        while (head) {
            head = head.next;
            size++;
        }

        let previousPosition = size - n;

        let current = sentinel;

        for (let i = 0; i < previousPosition; i++) {
            current = current.next;
        }

        current.next = current.next.next;

        return sentinel.next;
    }
}
