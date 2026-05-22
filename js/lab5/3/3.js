let names = ["Олександр", "Марія", "Іван", "Софія", "Максим", "Іван", "Дмитро", "Юрій", "Артем", "Вася"];
let searchName = prompt("Введіть ім'я для пошуку:");
let countNames = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i] === searchName) {
        countNames = countNames + 1;
    }
}

console.log("Кількість входжень імені " + searchName + ": "+ countNames);