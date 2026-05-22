let sum = 0;
let count = 0;

while (sum <= 100) {
    let n = prompt("Введіть число:");
    sum = sum + Number(n);
    count = count + 1;
}

console.log(count);