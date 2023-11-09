const estraiNumeroCasuale = function () {
    return Math.floor(Math.random() * 79) + 1
}

const selezionaNumero = function(numero) {
    const estratto = document.querySelector(`[data-number="${numero}"]`);
    if (estratto) {
        estratto.classList.add("selected");
    }
}


const estrazioneNumeri = function () {
    const tastoEstrai = document.getElementById("button")

    tastoEstrai.addEventListener("click", function () {
       const numeroEstratto = estraiNumeroCasuale()
        selezionaNumero(numeroEstratto)
    })
}


const creaTabellone = function () {
    const tabelloneContenitore = document.getElementById("container")
    for (let i = 1; i <= 79; i++) {
        const numeroContenitore = document.createElement("div")
        numeroContenitore.dataset.number = i

        const cellaNumero = document.createElement("h3")
        cellaNumero.innerText = i

        numeroContenitore.appendChild(cellaNumero)
        tabelloneContenitore.appendChild(numeroContenitore)
    }
}

creaTabellone()
estrazioneNumeri()

