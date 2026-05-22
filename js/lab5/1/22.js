let sum = 0;

for (let i = 100; i <= 200; i++) {
    if (i % 17 === 0) {
        sum = sum + i;
    }
}

console.log(sum);