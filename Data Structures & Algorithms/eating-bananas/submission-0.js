class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let rate = Math.max(...piles);
        let lowestRate = rate;
        let left = 1;
        let right = rate;
        while (left <= right) {
            rate = Math.floor((left + right) / 2);
            let sum = 0;
            for (let i = 0; i < piles.length; i++) {
                sum += Math.ceil(piles[i] / rate);
            }
            if (sum <= h) {
                right = rate - 1;
                lowestRate = Math.min(lowestRate, rate);
            } else {
                left = rate + 1;
            }
        }
        return lowestRate;
    }
}
