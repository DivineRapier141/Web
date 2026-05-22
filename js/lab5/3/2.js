let visitors = [15, 25, 10, 40, 50, 60, 5];
let minVisitors = visitors[0];
let maxVisitors = visitors[0];

for (let i = 1; i < visitors.length; i++) {
    if (visitors[i] < minVisitors) {
        minVisitors = visitors[i];
    }
    if (visitors[i] > maxVisitors) {
        maxVisitors = visitors[i];
    }
}

for (let i = 0; i < visitors.length; i++) {
    let dayNum = i + 1;
    
    if (visitors[i] < 20) {
        console.log("Менше 20 відвідувачів у день " + dayNum);
    }
    if (visitors[i] === minVisitors) {
        console.log("Мінімум відвідувачів у день " + dayNum);
    }
    if (visitors[i] === maxVisitors) {
        console.log("Максимум відвідувачів у день " + dayNum);
    }
}

let workDaysSum = visitors[0] + visitors[1] + visitors[2] + visitors[3] + visitors[4];
let weekendSum = visitors[5] + visitors[6];

console.log("У робочі дні: " + workDaysSum);
console.log("На вихідних: " + weekendSum);