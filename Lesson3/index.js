// git config --global user.email "test@gmail.com"
// git config --global user.name "TestName"
// 1. git init
// 2. git add .
// 3. git commit -m "Init"
// 4. git push

const files = ["cat.jpg", "dog.png", "doc.docx", "Virus.exe", "document.pdf"];

for (const file of files) {
    if (file === "cat.jpg") {
        continue;
    }

    if (file === "Virus.exe") {
        console.log("АЛАРМ! Вирус найден!");
        break;
    }

    console.log(`Файл проверен: ${file}`);
}

// files.push("music.mp3");

// for (const file of files) {
//     console.log(file);
// }

// for (let i = 0; i < 5; i++) {
//     console.log("Отжимание номер " + i);
// }

// let fuel = 100; // топливо

// while (fuel > 0) {
//     console.log("Едем " + "Топлива осталось: " + fuel);
//     fuel -= 10; // fuel = fuel - 10;
// }

// console.log("Приехали");

// for (СТАРТ; ФИНИШ; ШАГ);

