function solution(A, K) {
    // Implement your solution here
    while(K !== 0){
    let last = A.pop();
    A.unshift(last);
    K--;
    }
    return A
}
console.log(solution([3,4,5,6], 2))
// let A = [3.4,5,6,7]
// let lastElement = A.pop();
// console.log(lastElement)
// A.unshift(lastElement)
// console.log(A)