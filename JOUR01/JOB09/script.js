function tri(numbers, order) {
    if (order === 'asc') {
        return numbers.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return numbers.sort((a, b) => b - a);
    } else {
        throw new Error("Order must be 'asc' or 'desc'");
    }
}

const numbers = [5, 2, 8, 1, 9];
console.log(tri(numbers, 'asc')); // [1, 2, 5, 8, 9]
console.log(tri(numbers, 'desc')); // [9, 8, 5, 2, 1]