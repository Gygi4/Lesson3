const fileSize = 0;
const isPremium = true;
let status = "Загружаем файл";

console.log(status);

// isAdmin === true (isAdmin), isAdmin === false (!isAdmin)
// const num: number = 148;
// const str: string = "Jo";
// 16e8

const status2 = `Размер файла ${fileSize} не равен 1000`;
const status3 = "Размер файла " + fileSize + " не равен 1000";

if (fileSize === 0) {
    console.log("Файл пуст");
} else if (fileSize > 5000 && !isPremium) {
    console.log("Слишком тяжелый");
} else {
    console.log("Загрузка...");
    status = "Файл был загружен";
}

console.log(status);

