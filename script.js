let plusBtn = document.querySelector("#plus");
let minusBtn = document.querySelector("#minus");
let divBtn = document.querySelector("#div");
let multBtn = document.querySelector("#mult");
let select = document.querySelector("select");
let showSt = document.querySelector(".show");
let resetSt = document.querySelector(".reset");
let min = 1;
let max = 9;
plusBtn.onclick = function () {
    let number1 = getRandomNumber(min, max);
    let number2 = getRandomNumber(min, max);
    let correct = number1 + number2;
    checkUserAnswer("+", number1, number2, correct);
};
minusBtn.onclick = function () {
    let number1 = getRandomNumber(min, max);
    let number2 = getRandomNumber(min, max);
    let correct = number1 - number2;
    checkUserAnswer("-", number1, number2, correct);
};
divBtn.onclick = function () {
    let number1 = getRandomNumber(min, max);
    let number2 = getRandomNumber(min, max);
    let correct = Math.round(number1 / number2);
    checkUserAnswer("/", number1, number2, correct);
};
multBtn.onclick = function () {
    let number1 = getRandomNumber(min, max);
    let number2 = getRandomNumber(min, max);
    let correct = number1 * number2;
    checkUserAnswer("*", number1, number2, correct);
};
function checkUserAnswer(symbol, number1, number2, correct) {
    let userAnswer = prompt(number1 + symbol + number2 + " = ");
    if (correct == userAnswer) {
        alert("Ты прав!");
    } else {
        alert("Ты не прав! " + number1 + symbol + number2 + " = " + correct);
    }
}
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
select.onchange = function () {
    let value = select.value;
    console.log(value);
    if (value == "easy") {
        min = 1;
        max = 9;
    } else if (value == "medium") {
        min = 10;
        max = 99;
    } else {
        min = 100;
        max = 999;
    }
};
// 1) Создать две новые переменные: correctAnswers и wrongAnswers 
// 2) Когда человек прав увеличивать correctAnswers
// 3) Когда человек ошибается увеличивать wrongAnswers
// 4) Когда человек нажимает на кнопку показать статистику, создавать alert команду с сообщением: 
// Правильных ответов: 
// Неправильных ответов:

