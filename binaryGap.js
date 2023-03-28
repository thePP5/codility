function solution(N) {
    let currentGap = 0;
    let maxGap = 0;
    // Implement your solution here
    let biVal = N.toString(2)
 
    for(let i of biVal){
       // console.log(i)
        if(i === '0'){
            currentGap++;
        }
        else{
            maxGap = Math.max(currentGap,maxGap);
            currentGap = 0; //reset the number of gaps in order to count more another gap
        }

    }
    console.log(maxGap)
    return maxGap;
}

solution(1041)