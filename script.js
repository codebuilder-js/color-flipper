/*
    Armazenar referência da cor de fundo alterada
    Armazenar referência do botão
    ONCLICK altera a cor de fundo utilizando o valores estáticos da variável 
    Criar função que gera números aleatórios de 0 a 255
    ONCLICK altera a cor de fundo utilizando números aleatórios no RGB

    Fazer com hex e nomes nativos de cores
*/
const btnFlipper = document.querySelector('.btn-flipper');
const colorPlaceholder = document.querySelector('#color-placeholder');
const rgbName = document.querySelector('#rgb-name');

btnFlipper.addEventListener('click', changeBackground);

function changeBackground() {
    const red = randomRGB();
    const green = randomRGB();
    const blue = randomRGB();
    const rgb = `rgb(${red}, ${green}, ${blue})`;

    document.body.style.background = rgb;
    rgbName.textContent = rgb;
}

function randomRGB() {
    return Math.floor(Math.random() * 255);
}