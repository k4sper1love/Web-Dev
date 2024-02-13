function getMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;
    for (let num in arr){
        partialSum += num;
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < 0) partialSum = 0;
    }
    return maxSum;
}