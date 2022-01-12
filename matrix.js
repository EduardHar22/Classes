"use strict"

function matrix(arr){
    let n = arr.length;
    let sum = 0;
    for(let i = 0; i < n / 2; i++){
        for(let j = 0; j < n / 2; j++){
            let x = i;
            let x2 = n - i - 1;
            let y = j;
            let y2 = n - j - 1;
            sum += Math.max(
                arr[x][y],
                arr[x][y2],
                arr[x2][y],
                arr[x2][y2]
            );
        }
    }
    return sum;
};
console.log(matrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43], 
    [62, 98, 114, 108]
]))