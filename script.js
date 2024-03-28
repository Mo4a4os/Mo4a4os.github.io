const output = document.getElementById('output')
const submit = document.getElementById('submit')
const nameInput = document.getElementById('name-input')

const isPidor = (name) => {
   if (name === "даня") {
        output.innerText = "ПИДОРАС НАЙДЕН"
    } else if (name === "1488") {
        output.innerText =  "1488 ОООО ПАСХАЛКООООООООО, ВКЛЮЧАЙТЕ ВЕНТИЛЯТОРЫ!!! 卐卐卐卐卐卐卐卐卐卐卐卐卐卐卐"
    } else if (name === "хойщик") {
        output.innerText = "у чела них хойщик, надежды на то что он натурал, хм?"
    } else if (name === 'гаяз') {
    output.innerText = "я ахуенен и пиздат, зацените мой прикид"
    } else if (name === "1487" || name ==="1489" || name === "1448"){
   output.innerText = "пачти пасхалко ((("
    } else if (name === "52") {
        output.innerText = "52 (Алло) Да здравствует Санкт-Петербург (А), и это город наш (YEEI) \n Я каждый свой новый куплет валю как никогда (YEEI, а) \n Альбом, он чисто мой, никому его не продам (Он мой) \n Не думаю о том (YEEI), как хорошо было вчера (А-а; мне пох)"
    } else if (name === "1889") {
        output.innerText = "чо за уебок мне это сказал"
    }  else if (name ==="пидор" || name === "пидорас") {
        output.innerText = "Пидор"
    }  else if (name === "негрик" || name === "негр" || name === "негры") {
        output.innerText = "негры все пидорасы, ебанные блять"
    }  else if (name ==="мусораб ляди" || name === "мусора бляди" || name === "черный диплом") {
        output.innerText = "Это Брyклин, мусора — бляди \n Клал на закон — живу по понятиям \n Чёрным диплом, на улицах братья \n С 12-ти лет я уличный дядя"
    }  else if (name === "navi" || name === "нави") {
        output.innerText = "Нави проебут бля буду"
    }  else if (name === "джекпот" || name === "jackpot"){ 
        output.innerText = "И дело как попёрло, меня накрыло в пот (прёт) \n Хуяк! Хуяк! Ебать! Джекпот! \n Джекпот, джекпот! Хуй те в рот! \n Поцелуй мою залупу, залупу-лупу!"
    }  else if (name === "кракен" || name === "kraken") { 
        output.innerText = "https://dg4qun34abkrq7novcwk2os3vdtlvrbzxjcuqsyffe4jkldtjnsu7qqd.onion/ (Это если что реал ссылка на даркнет, лол)"
    } else {
        output.innerText = "Натурал"
    }
}


// 1488, хойщик, 1448, 52, 1889, пидор, негр, мусораб ляди, нави, джекпот, кракен