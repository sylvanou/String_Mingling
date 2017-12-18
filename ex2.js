function multiply3(num) {
    if(num <= 3) return 3

    // If N is not a multiple of 3
    if(num % 3 !== 0){
        num = num - (num%3)
    }
    // If N is a multiple of 3

    return num + multiply3(num - 3)
}

console.log(multiply3(10))