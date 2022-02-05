(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _this = void 0;

var _default = {
  dado: function dado(n) {
    return Math.floor(Math.random() * n) + 1;
  },
  jogadaDeAtaque: function jogadaDeAtaque(h, m) {
    return h.habilidade + _this.dado(6) >= m.habilidade + _this.dado(6);
  },
  jogadaDano: function jogadaDano(atacante, defensor) {
    return defensor.pv - atacante.forca;
  },
  efeitoDano: function efeitoDano(atacante, defensor) {
    return console.log("".concat(atacante.nome, " acerta um golpe em ").concat(defensor.nome));
  },
  msgMorte: function msgMorte(morto) {
    return console.log("O ".concat(morto.nome, " morreu. :("));
  },
  resolucaoAttack: function resolucaoAttack(atacante, defensor) {
    defensor.pv = _this.jogadaDano(atacante, defensor);

    if (defensor.pv <= 0) {
      _this.msgMorte(defensor);
    } else {
      _this.efeitoDano(atacante, defensor);
    }
  },
  sequenciaAtack: function sequenciaAtack(heroi, monster) {
    var x = _this.jogadaDeAtaque;
    var h = heroi;
    var m = monster;
    attacker = x(h, m);

    if (attacker) {
      _this.resolucaoAttack(h, m);
    } else {
      _this.resolucaoAttack(m, h);
    }
  }
};
exports["default"] = _default;

},{}],3:[function(require,module,exports){
module.exports={
    "bonus": [
        {
            "id": "0008",
            "nome": "Arena do Poder",
            "tipo": "buff",
            "tipo2": "forca",
            "descricao": "Teste sua habilidade. Em caso de sucesso, você ganha 1 ponto de força",
            "imagem": "green--potion.png",
            "alt": "Uma sala circular com uma estátua no centro. Essa estatua representa um homem de pé, segurando um leão com o braço esquerdo e levantando sua espada aos céus como braço direito. É a representação de uma antiga divindade relacionada a força."
        },
        {
            "id": "0009",
            "nome": "Caminho da Habilidade",
            "tipo": "buff",
            "tipo2": "habilidade",
            "descricao": "Teste sua habilidade. Em caso de sucesso, você ganha 1 ponto de Habilidade",
            "imagem": "green--potion.png",
            "alt": "Um corredor se projeta a frente com esculturas em alto-relevo de raposas, coelhos e outros animais silvestres na parede. Aparentemente, essas imagens estão ligadas aos espíritos da floresta que circula a masmorra."
        },
        {
            "id": "0010",
            "nome": "Area da Resistencia",
            "tipo": "buff",
            "tipo2": "resistencia",
            "descricao": "Teste sua habilidade. Em caso de sucesso, você ganha 1 ponto de Resistencia",
            "imagem": "green--potion.png",
            "alt": "Um salão a estatua de uma jovem segurando um touro pelos chifres. A imagem representa uma divindade local ligada a resistência física e mental."
        },
        {
            "id": "0011",
            "nome": "Fonte da Vida",
            "tipo": "buff",
            "tipo2": "pv",
            "descricao": "Teste sua habilidade. Em caso de sucesso, você ganha 1d6 ponto de Pontos de vida",
            "imagem": "green--potion.png",
            "alt": "No centro desta sala se encontra uma fonte de águas cristalinas. No topo da fonte há uma estatua de uma mulher com as mãos espalmadas na altura da cintura. De suas mãos descem fios de águas claras e de aspecto revigorante."
        },
        {
            "id": "0012",
            "nome": "Aura de Cansaço",
            "tipo": "debuff",
            "tipo2": "forca",
            "descricao": "Teste sua habilidade. Em caso de falha, o Heroi perde 1 de força",
            "imagem": "armadilha.png",
            "alt": "Esta área exala um aroma putrido e nauseante."
        },
        {
            "id": "0013",
            "nome": "Chão de espinhos",
            "tipo": "debuff",
            "tipo2": "habilidade",
            "descricao": "Teste sua habilidade. Em caso de falha, o Heroi perde 1 de Habilidade",
            "imagem": "armadilha.png",
            "alt": "O chão desse aposento está coberto de pequenos buracos que, ao detectarem a aproximação de alguém, projetam lâminas de quarenta centímetros em grande velocidade."
        },
        {
            "id": "0014",
            "nome": "Correntes da Corrupção",
            "tipo": "debuff",
            "tipo2": "resistencia",
            "descricao": "Teste sua habilidade. Em caso de falha, o Heroi perde 1 de Resistencia",
            "imagem": "armadilha.png",
            "alt": "As paredes dessa sala possuem sulcos profundos de onde são projetadas correntes de brilho mágico. Ao encostarem em seu alvo, as correntes emitem um brilho e desaparecem, mas seu peso ainda é sentido pela vítima."
        },
        {
            "id": "0015",
            "nome": "Vapores Venenosos",
            "tipo": "debuff",
            "tipo2": "pv",
            "descricao": "Teste sua habilidade. Em caso de falha, o Heroi perde +1d6 de Pontos de vida",
            "imagem": "armadilha.png",
            "alt": "Vapores pesados sobem de maneira sinuosa do chão deste recinto. O ar tem um cheiro ocre e pungente e pelos cantos pequenos roedores jazem mortos."
        }
    ],
    "monsters": [
        {
            "id": 1,
            "nome": "Esqueleto",
            "tipo": "Monstro",
            "tipo2": "Morto-vivo",
            "forca": 1,
            "habilidade": 0,
            "resistencia": 0,
            "pv": 1,
            "descricao": "Um morto vivo animado por magia",
            "poder": 0,
            "imagem": "esqueleto.png",
            "alt": "Um esqueleto humano, com ossos velhos cobertos de musgo, reanimado por magia. Usa botas e luvas de couro muito deterioradas. No braço direito carrega um escudo de madeira podre e no braço esquerdo uma espada enferrujada que ha muito tempo perdeu o fio."
        },
        {
            "id": 2,
            "nome": "Zumbi Raivoso",
            "tipo": "Monstro",
            "tipo2": "Morto-vivo",
            "forca": 1,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 1,
            "descricao": "Um morto-vivo extremamente violento",
            "poder": 0,
            "imagem": "zumbi-agressivo.png",
            "alt": "O Zumbi raivoso é um cadaver reanimado por magia aspecto brutal. Seus olhos tem orbitas brancas e sua pele esta coberta de chagas. Usa uma bermuda de tecido grosso e rasgado e seus punhos estão cobertos pelo sangue de suas vítimas"
        },
        {
            "id": 3,
            "nome": "Necromante Acolito",
            "tipo": "Monstro",
            "tipo2": "Necromante",
            "forca": 2,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 1,
            "descricao": "Um jovem Necromante. Quando em jogo, pode ressucitar um morto-vivo do cemiterio",
            "poder": 1,
            "imagem": "jovem-necromante.png",
            "alt": "Um jovem aprendiz de necromância que esbanja poder, que lhe escapa pelas mãos na forma de duas pequenas chamas. Paira ameaçadoramente no ar, usando uma túnica com pares de espinhos nos ombros e uma corrente amarrada a um crânio humano na cintura."
        },
        {
            "id": 4,
            "nome": "Cavaleiro da Morte",
            "tipo": "Monstro",
            "tipo2": "Morto-vivo",
            "forca": 2,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 1,
            "descricao": "Um poderoso cavaleiro morto-vivo",
            "poder": 0,
            "imagem": "cavaleiro-da-morte.png",
            "alt": "Um esqueleto reanimado por magia trajando uma velha e pesada armadura negra com elmo. Seu elmo possui um par de asas nas laterais, suas costas são cobertas por uma capa que quase toca o chão, de sua cintura desce um tecido que cobre parte de suas pernas, sendo que estes itens todos tem a cor do sangue humano. Carrega duas espadas que gotejam sangue fresco no chão."
        },
        {
            "id": 5,
            "nome": "Necromante Ancião",
            "tipo": "Monstro",
            "tipo2": "Necromante",
            "forca": 2,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 2,
            "descricao": "Um velho necromante. Quando em jogo, pode ressucitar dois mortos-vivos do cemiterio.",
            "poder": 2,
            "imagem": "velho-necromante.png",
            "alt": "Um mago necromante idoso que se apoia em um cajado. De suas mãos saem uma grande chama de poder. Sua cabeça esta coberta por um capuz e seu rosto esta sob as sombras, mas seus olhos brilham com o poder mágico. Em seu pescoço, um pequeno crânio humano esta pendurado em uma corrente. No topo de seu cajado há um crânio semi-humano com chifres curvos e chamas intensas de poder envolvem todo esta caveira demoníaca."
        },
        {
            "id": 6,
            "nome": "Necromante Morto-vivo",
            "tipo": "Monstro",
            "tipo2": "Necromante",
            "forca": 2,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 1,
            "descricao": "Um poderoso necromante que voltou da morte. Pode ressucitar três mortos-vivos do cemiterio.",
            "poder": 3,
            "imagem": "necromante-morto-vivo.png",
            "alt": "Um poderoso esqueleto envolto por chamas mágicas flutua a meio metro do chão. Uma grande labareda mágica se projeta do chão até seu corpo, envolvendo e soltando fagulhas no ar. Usa apenas uma túnica púida sobre a caixa toráxica que brilha pela intensidade de seu poder."
        },
        {
            "id": 7,
            "nome": "O Rei Maldito",
            "tipo": "Monstro",
            "tipo2": "Morto-vivo",
            "forca": 2,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 1,
            "descricao": "Este rei perdido entre a vida e a morte é o senhor desta masmorra.",
            "poder": 0,
            "imagem": "rei-maldito.png",
            "alt": "Um rei cadaver, com uma barba longa e cinzenta como teias de aranha, usando uma armadura prateada por cima de uma malha negra. Sobre sua cabeça esta uma coroa dourada cravejada de diamentes. Suas costas estão cobertas por uma capa da cor da realeza, e de sua cintura desce uma faixa do mesmo tecido. Em sua mão direita segura um escudo prateado e em sua mão esquerda esta uma espada brilhante de aspecto mágico."
        }
    ]
}
},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cards = _interopRequireDefault(require("./json/cards.json"));

var _sequenciaAttack = _interopRequireDefault(require("./components/sequenciaAttack"));

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
  poder: 0
};
var heroi = {
  id: 0,
  nome: "Heroi",
  tipo: "Heroi",
  tipo2: "Cavaleiro",
  forca: 1,
  habilidade: 1,
  resistencia: 1,
  pv: 10
}; // const dado = n =>  Math.floor(Math.random() * n) + 1;
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

function clickButton(cb) {
  document.addEventListener('click', function (e) {
    var action = e.target.getAttribute('action');

    if (!!action) {
      console.log("🚀 ~ file: scripts_main.js ~ line 45 ~ clickButton ~ action", action);
      cb && cb();
    } else {
      console.log('vazio');
    }
  });
}

var testButton = function testButton(_) {
  var $html = "<button action=\"atack\">Ataque</button>";
  var content = document.querySelector('.content');
  content.innerHTML = $html;
  return;
};

var init = function init() {
  // jogadaDeAtaque();
  clickButton(function (_) {
    return _sequenciaAttack["default"].sequenciaAtack(heroi, monster);
  });
  testButton();
};

window.onload = init();

},{"./components/sequenciaAttack":2,"./json/cards.json":3,"@babel/runtime/helpers/interopRequireDefault":1}]},{},[4]);
