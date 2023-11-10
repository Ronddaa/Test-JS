function findNumber(start, end, divisor) {
    let total = 0;
    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            total += i;
        }
    }
    return total;
}

console.log(findNumber(8, 17, 3));
console.log(findNumber(16, 35, 7));
console.log(findNumber(2, 6, 5));
console.log(findNumber(6, 9, 4));