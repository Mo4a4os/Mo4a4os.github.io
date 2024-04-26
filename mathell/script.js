const selection = document.getElementById('selection')
const firstNum = document.getElementById('first')
const secondNum = document.getElementById('second')
const resultCalc = document.getElementById('result')
const addMoreBtn = document.getElementById('add-more')
const submit = document.getElementById('submit')
const calculatorMain = document.getElementById('calculator-main')
const ax = document.getElementById('ax')
const bx = document.getElementById('bx')
const cx = document.getElementById('cx')
const submitDisc = document.getElementById('submit-disc')
const discResult = document.getElementById('disc-result')
const selec1 = document.getElementById('selection-disc-1')
const selec2 = document.getElementById('selection-disc-2')

const calculate = (val1, val2, val3) => {
const ans = `${val1} ${val2} ${val3}`
    resultCalc.innerText = `Ответ: ${eval(ans)}`
    resultCalc.style.display = "inline-block";
}

const discrim = (a, b, c, sel1, sel2) => {
    if (sel1 === 'minusik') {
        b = b * -1
    }
      if (sel2 === "minusik") {
        c = c * -1
      }
  let d = (b * b) - (4 * a * c)
         


  if (d > 0){
discResult.innerText = `Ответ: ${((b * -1) + Math.sqrt(d)).toFixed(2) / (2 * a)}, ${((b * -1) - Math.sqrt(d)).toFixed() / (2 * a)}`
  } else if (d === 0){
discResult.innerHTML = `Ответ: ${(b * -1) / (2 * a)}`
  } else {
discResult.innerText = `Корней нет, так как дискриминант меньше нуля!`
  } 
  discResult.style.display = "inline-block"
}

