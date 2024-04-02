const input = document.getElementById('input')
const submit = document.getElementById('submit')
const output = document.getElementById('output')
const clearInput = document.getElementById('clear-input')
const defaultRule = document.getElementById('default-rules')

input.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
 addRule(input.value)
  }
})

let i = 0

function addRule (rule) {
i++
output.innerText += `\n${i}. ${rule}`
}

function clearInp () {
    output.innerText = ""
    i = 0
}

function rulesDefault () {
  output.innerText = "1. Breakfast 8:30-9:30\n2. Lunch 12:30-14:30\n3. Hot water every half hour\n4. Noise is prohibited from 22:00 to 8:00\n5. It is forbidden to disturb neighbors while eating or at night\n6. It is forbidden to use the pool, no earlier than 8 am, after 10 pm \n7. It is forbidden to bring strangers into the hotel or into your room\n8. If you need medical assistance, you can contact the 24-hour help center\n9. If you notice strange objects, bags, backpacks, suitcases, contact the hotel staff \n10. If you notice a suspicious person with a weapon, a strange and large bag that you have not seen before, tell the hotel staff about him \n11. If you notice that a person feels unwell, contact a hotel staff"
  i = 11
}


clearInput.addEventListener('click', clearInp())