import Cards from './json/cards.json';
import xongas from './components/sequenciaAttack';

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


// const dado = n =>  Math.floor(Math.random() * n) + 1;

// const jogadaDeAtaque = (h, m) => h.habilidade+dado(6) >= m.habilidade+dado(6);

// const jogadaDano = (atacante, defensor) => defensor.pv - atacante.forca;

// const efeitoDano = (atacante, defensor) => console.log(`${atacante.nome} acerta um golpe em ${defensor.nome}`);

// const msgMorte = morto => console.log(`O ${morto.nome} morreu. :(`);

// const resolucaoAttack = (atacante, defensor) => {
//     defensor.pv = jogadaDano(atacante, defensor);
//     if (defensor.pv <= 0) {
//         msgMorte(defensor);
//     } else {
//         efeitoDano(atacante, defensor);
//     }
// }

// const sequenciaAtack = async (heroi, monster) => {
//     let h = heroi;
//     let m = monster;

//     const attacker = await jogadaDeAtaque(h,m);

//     if (attacker) {
//         resolucaoAttack(h, m);
//     } else {
//         resolucaoAttack(m, h);
//     }
// }
function clickButton (cb) {
    document.addEventListener('click', e => {
        const action = e.target.getAttribute('action');

        if (!!action) {
            console.log("🚀 ~ file: scripts_main.js ~ line 45 ~ clickButton ~ action", action)
            
            cb && cb();
        }
        else {
            console.log('vazio')
        }
    });
}



const testButton = _ => {
    const $html = `<button action="atack">Ataque</button>`;

    const content = document.querySelector('.content');    
    
    content.innerHTML = $html;
    
    return;
}

const init = () => {
    // jogadaDeAtaque();
    clickButton( _ => xongas.sequenciaAtack(heroi, monster) );
    testButton();
};

window.onload = init();