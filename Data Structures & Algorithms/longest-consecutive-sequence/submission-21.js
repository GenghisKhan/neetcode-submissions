class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums?.length) return 0;
        const seq = [];
        const numsSet = new Set(nums);
        let index = 0;
        for (const num of numsSet) {
            console.log(num);
            const startSeq = !numsSet.has(num - 1);
            if (startSeq) {
                let count = seq[num] || 1;
                let currNum = num;
                do {
                    if (currNum > num && index + 1 <= numsSet.size) {
                        count++;
                    }
                    currNum = currNum + 1;
                } while (numsSet.has(currNum));
                seq.push(count);
            }
            index++;
        }
        console.log(seq);
        return Math.max(...seq) || 0;
    }
}
