let isWorking = true;

while (isWorking) {
    let num = prompt("Введіть число:");
    if (num !== null) {
        alert(num * num);
        isWorking = confirm("Продовжити введення?");
    } else {
        isWorking = false;
    }
}