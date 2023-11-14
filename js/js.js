function calculateTotal(number) {
    let sum = 0;
    let a = 1;
    
    while (a <= number) {
        sum += a;
        a++;
    }
    
    return sum;
}