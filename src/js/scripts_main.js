import Cards from './json/cards.json';
import Combate from './components/sequenciaAttack';
import GamePrincipal from './components/gameStateConstructor';
import MontaEstagio from './components/gameStage';

// console.log(Cards);

var gameStates = new GamePrincipal(Cards); 
var combate = new Combate();
var montaEstagio = new MontaEstagio(gameStates);



// renderiza um botao de teste
const testButton = type => {
    const $html = `<button action="${type}">${type}</button>`;

    const content = document.querySelector('.content');    
    
    content.innerHTML += $html;
    
    return;
}

const init = () => {
    console.log(gameStates);

    // testButton('viraCarta');

    // testButton('pegaItem');

    // testButton('equipItem');

    
    // testButton('descartaCarta');
};

window.onload = init();