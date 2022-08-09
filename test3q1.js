/* Q1) Given an array A of N elements. Find the majority element in the array. A majority element in an array A of size N is an element that appears more than N/2 times in the array.
 
Example 1:
Input:
N = 3 
A[] = {1,2,3} 
Output:
-1
Explanation:
Since, each element in 
{1,2,3} appears only once so there 
is no majority element.

Example 2:
Input:
N = 5 
A[] = {3,1,3,3,2} 
Output:
3
Explanation:
Since, 3 is present more
than N/2 times, so it is 
the majority element.
 */

function findMajority(a, n) {
    let maxCount = 0;
    let res = 0

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (a[i] == a[j])
                count++;
        }

        if (count > maxCount) {
            maxCount = count;
            res = i;
        }
    }

    if (maxCount > n / 2)
        console.log(a[res]);
    else
        return -1
}


let a = [3, 1, 3, 3, 2];
let n = a.length;
findMajority(a, n);