const buyText1 = document.getElementById('buy1')
const buyBtn1 = document.getElementById('buy-btn1')
const buyText2 = document.getElementById('buy2')
const buyBtn2 = document.getElementById('buy-btn2')
const buyText3 = document.getElementById('buy3')
const buyBtn3 = document.getElementById('buy-bt3')

function buyChange1 () {
    buyText1.innerText = "Добавлено в корзину"
}

function buyChange2 () {
    buyText2.innerText = "Добавлено в корзину"
}

function buyChange3 () {
    buyText3.innerText = "Добавлено в корзину"
}

buyBtn1.addEventListener('click', buyChange1())
buyBtn2.addEventListener('click', buyChange2())
buyBtn3.addEventListener('click', buyChange3())

