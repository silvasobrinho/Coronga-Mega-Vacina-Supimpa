let palavrasVacinadas = ['coronavirus', 'coronavírus', 'corona virus', 'corona vírus', 'covid-19', 'covid19', 'covid', 'corona']
var elementsInsideBody = [...document.body.getElementsByTagName('*')];

function findAndReplace() {
    elementsInsideBody.forEach(element => {
        element.childNodes.forEach(child => {
            if (child.nodeType === 3) {
                child.nodeValue = substitui(child.nodeValue)
            }
        });

    });
}

function substitui(palavraNavegador) {
    for (var i = 0; i < palavrasVacinadas.length; i++) {
        regex = new RegExp(palavrasVacinadas[i], "gi");
        palavraNavegador = palavraNavegador.replace(regex, ' 💉 ')
    }
    return palavraNavegador;

}

window.onload = findAndReplace();