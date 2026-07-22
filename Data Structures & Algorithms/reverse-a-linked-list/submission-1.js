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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let current = head;
        while (current !== null) {
            const next = current.next; // save the rest of the list
            current.next = prev;       // flip this node's arrow
            prev = current;            // advance both pointers
            current = next;
        }
        return prev; // old tail = new head
    }
}
