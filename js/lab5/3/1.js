let grades = [5, 4, 5, 4, 5];
let sumGrades = 0;

for (let i = 0; i < grades.length; i++) {
    sumGrades = sumGrades + grades[i];
}

let avgGrade = sumGrades / grades.length;
console.log("Середній бал: " + avgGrade);

if (grades.includes(2)) {
    console.log("Двійочник");
} else if (grades.includes(3)) {
    console.log("Трійочник");
} else if (grades.includes(4)) {
    console.log("Хорошист");
} else {
    console.log("Відмінник");
}