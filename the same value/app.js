const numbers = [5, 2, 9, 243, 728, 5];

let sum = 0;

numbers.forEach(element => {
    sum = sum + element    
});

console.log(sum);

console.log(numbers.reduce((a, b) => a + b))