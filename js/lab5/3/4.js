let prizes = [];
for (let i = 0; i < 10; i++) {
    prizes.push(Math.floor(Math.random() * 1001) - 500);
}

let usedIndexes = [];
let totalWin = 0;
let isPlaying = true;

while (isPlaying && usedIndexes.length < prizes.length) {
    let choice = prompt("Виберіть номер комірки від 0 до 9:");

    if (choice === null) {
        isPlaying = false;
    } else {
        let index = Number(choice);
        
        if (usedIndexes.includes(index)) {
            alert("Ви вже відкривали цю комірку!");
        } else if (index >= 0 && index < prizes.length) {
            usedIndexes.push(index);
            totalWin = totalWin + prizes[index];
            alert("У цій комірці було: " + prizes[index] + "\nВаш поточний виграш: " + totalWin);
        } else {
            alert("Немає такого номера.");
        }
    }
}

alert("Гра закінчена. Фінальний виграш: " + totalWin);