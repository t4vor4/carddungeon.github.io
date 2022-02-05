import Cards from './json/cards.json';
import attackSequence from './components/sequenciaAttack';

// console.log(Cards)

var monster = {
    id: 1,
    nome: "Esqueleto",
    tipo: "Monstro",
    tipo2: "Morto-vivo",
    forca: 1,
    habilidade: 0,
    resistencia: 0,
    pv: 10,
    descricao: "Um morto vivo animado por magia",
    poder: 0,
};

var heroi = {
    id: 0,
    nome: "Heroi",
    tipo: "Heroi",
    tipo2: "Cavaleiro",
    forca: 1,
    habilidade: 1,
    resistencia: 1,
    pv: 10,
}

function clickButton (action, cb) {
    document.addEventListener('click', e => {
        const $action = e.target.getAttribute('action');

        if (!!$action) {
            console.log("🚀 ~ file: scripts_main.js ~ line 45 ~ clickButton ~ action", action)
            
            cb && cb();
        }
        else {
            console.log('vazio')
        }
    });
}



const testButton = _ => {
    const $html = `<button action="attack">Ataque</button>`;

    const content = document.querySelector('.content');    
    
    content.innerHTML = $html;
    
    return;
}

const init = () => {
    // jogadaDeAtaque();
    clickButton('attack',  _ => attackSequence.sequenciaAtack(heroi, monster) );
    testButton();
};

window.onload = init();