document.getElementById('hide-menu-btn').addEventListener('click', function () {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});


const resultText = document.getElementById('result')
const btn1 = document.getElementById('1btn')
const btn2 = document.getElementById('2btn')
const btn3 = document.getElementById('3btn')
const questionNum = document.getElementById('questionNum')

const questions = ["Первый вопрос: Даня пидор?\n 1) Да\n 2) Нет\n 3) А может ты пидор?", "Второй вопрос: ZOV SVO ZOV 1488?\n 1) НАШ СЛОНЯРА\n 2) Эммм, нет... ты чего?\n 3) Да", "Третий вопрос: Бля я заебался это делать\n 1) ХАХАХАХ ИДИ НАХУЙ, РАБОТАЙ СЫН Ш\n 2) Отдохни, ты много работал\n 3) А что, моя вина?", "Четвертый вопрос: Что значит 52?\n 1) 52! ДА ЗДРАВСТВУЕТ СПБ, И ЭТОТ ГОРОД НАШ!!!\n 2) Хз\n 3) Количество хуев в моей жопе", "Пятый вопрос (я щас вскроюсь нахуй.): Какой самый лучши вид пизды?\n 1) Персик\n 2) Щавель\n 3) Капкан (загугли что это)", 'Шестой вопрос: Насколько ты оцениваешь работу psychodox?\n 1) 10/10\n 2) 0/10\n 3) 5/10']

const hideBtn = document.getElementById('hide-menu-btn')



let qu = 0
let ocenka = 0

function changeQuestion() {
    if (qu < 6) {
        questionNum.innerText = questions[qu]
        qu++
    } else {
           btn1.style.display = "none";
           btn2.style.display = "none";
           btn3.style.display = "none";
if (ocenka < 0) {
           questionNum.innerText = `Ваша оценка: ${ocenka}. Ты ебанный попуск, иди нахуй`
    } else if (ocenka < 4) {
        questionNum.innerText = `Ваша оценка: ${ocenka}. Ну такое, но все равно более менее`

    }else {
        questionNum.innerText = `Ваша оценка: ${ocenka}. ЕБАТЬ ТЫ СИГМА НАХУЙ RESPECT SIGMA MOMENT, ДАЙ ОТСОСУ`
    }}
}


function changeQuestion1() {
    if (qu < 6) {
        questionNum.innerText = questions[qu]
        qu++
        ocenka++
    } else {
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";  
    if (ocenka < 0) {
        questionNum.innerText = `Ваша оценка: ${ocenka}. Ты ебанный попуск, иди нахуй`
    } else if (ocenka < 4) {
        questionNum.innerText = `Ваша оценка: ${ocenka}. Ну такое, но все равно более менее`

    }else {
        questionNum.innerText = `Ваша оценка: ${ocenka}. ЕБАТЬ ТЫ СИГМА НАХУЙ RESPECT SIGMA MOMENT, ДАЙ ОТСОСУ`
    }}
}

function changeQuestion2() {
    if (qu < 6) {
        questionNum.innerText = questions[qu]
        qu++
        ocenka--
    } else {
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        if (ocenka < 0) {
        questionNum.innerText = `Ваша оценка: ${ocenka}. Ты ебанный попуск, иди нахуй`
    } else if (ocenka < 4) {
        questionNum.innerText = `Ваша оценка: ${ocenka}. Ну такое, но все равно более менее`

    }else {
        questionNum.innerText = `Ваша оценка: ${ocenka}. ЕБАТЬ ТЫ СИГМА НАХУЙ RESPECT SIGMA MOMENT, ДАЙ ОТСОСУ`
    }}
}
