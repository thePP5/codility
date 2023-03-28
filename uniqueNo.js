function solution(A) {
    const occurrences = {};

    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        if (num in occurrences) {
            occurrences[num]++;
        } else {
            occurrences[num] = 1;
        }
    }

    for (let i = 0; i < A.length; i++) {
        const num = A[i];
        if (occurrences[num] === 1) {
            return num;
        }
    }

    return -1;
}


console.log(solution([4, 10, 5, 4, 2, 10]))
