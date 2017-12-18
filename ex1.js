// Sum 1 to N. Ex: if n is 4, add 1 + 2 + 3 + 4

function summation(num){
    // Ending point
    if(num === 1){
        return 1
    }
    // This is the recursive call
    return num + summation(--num)
    
}

console.log(summation(4))