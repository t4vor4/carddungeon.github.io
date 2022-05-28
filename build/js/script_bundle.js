(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],2:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],3:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
},{}],4:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Stage = /*#__PURE__*/function () {
  function Stage(gameState) {
    (0, _classCallCheck2["default"])(this, Stage);
    this.base(gameState);
  }

  (0, _createClass2["default"])(Stage, [{
    key: "base",
    value: function base(gameState) {
      var heroi = gameState.chars.hero;
      var characterInfo = this.characterInfo(heroi);
      var stage = this.stage();
      var actionArea = this.actionArea();
      var $html = "\n            <div class=\"stage\">\n                ".concat(characterInfo, "\n                ").concat(stage, "\n                ").concat(actionArea, "\n            </div>\n        ");
      $('.content').append($html);
    }
  }, {
    key: "characterInfo",
    value: function characterInfo(heroi) {
      return "\n            <header class=\"heroi\"> \n                <div class=\"heroi__row\">\n                    <div class=\"heroi__face\">\n                    </div>\n                    <div class=\"heroi_content\">\n                        <span class=\"heroi__nome\">".concat(heroi.nome, "</span>/<small class=\"heroi__classe\">").concat(heroi.tipo2, "</small>\n                        <span class=\"heroi__lifeBar\">\n                            <span class=\"heroi__lifeBar__inner\" style=\"width: 90%;\"></span>\n                        </span>\n                    </div>\n                    <button class=\"heroi__btn heroi__btn--status myModal__btn\" data-for=\"heroiStatus\" title=\"Status\"></button>\n                    <button class=\"heroi__btn heroi__btn--config myModal__btn\" data-for=\"heroiConfig\" title=\"Configura\xE7\xF5es\"></button>\n                </div>\n                \n                <div class=\"myModal\" id=\"heroiStatus\">\n                    <button class=\"myModal__close\">X</button>\n                    <div class=\"myModal__body infoStatus\">\n                        <div class=\"infoStatus__row infoStatus__row--1\">\n                            <h2>Informa\xE7\xF5es</h2>\n                            <div class=\"infoStatus__charPhoto\"></div>\n                            <div class=\"infoStatus__nameClass\">\n                                <div class=\"infoStatus__name\">").concat(heroi.nome, "</div>\n                                <div class=\"infoStatus__class\">").concat(heroi.tipo2, "</div>\n                            </div>\n                        </div>\n                        <div class=\"infoStatus__row infoStatus__row--2\">\n                            <h2>Status</h2>\n                            <div class=\"infoStatus__content\">\n                                <span class=\"heroi__point\">\n                                    <h3 class=\"heroi__point__desc\"><i class=\"heroi__point__icon heroi__point__icon--forca\"></i> For\xE7a</h3> <span class=\"heroi__point__value\">").concat(heroi.forca, "</span>\n                                </span>\n                                <span class=\"heroi__point\">\n                                    <h3 class=\"heroi__point__desc\"><i class=\"heroi__point__icon heroi__point__icon--hab\"></i> Habilidade</h3> <span class=\"heroi__point__value\">").concat(heroi.habilidade, "</span>\n                                </span>\n                                <span class=\"heroi__point\">\n                                    <h3 class=\"heroi__point__desc\"><i class=\"heroi__point__icon heroi__point__icon--res\"></i> Resist\xEAncia</h3> <span class=\"heroi__point__value\">").concat(heroi.resistencia, "</span>\n                                </span>\n                                <span class=\"heroi__point\">\n                                    <h3 class=\"heroi__point__desc\"><i class=\"heroi__point__icon heroi__point__icon--pv\"></i> Vida</h3> <span class=\"heroi__point__value\">").concat(heroi.pv, "</span>\n                                </span>\n                            </div>\n                        </div>\n                        <div class=\"infoStatus__row infoStatus__row--3\">\n                            <h2>Historia</h2>\n                            <div class=\"infoStatus__history\">\n                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iste, consequuntur quod suscipit non sit aliquid quia autem architecto?\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"myModal\" id=\"heroiConfig\">\n                    <button class=\"myModal__close\">X</button>\n                    <div class=\"myModal__body config\">\n                        <h2>Configura\xE7\xF5es</h2>\n                        \n\n                    </div>\n                </div>\n            </header>\n        ");
    }
  }, {
    key: "stage",
    value: function stage() {
      return "\n            <div class=\"mainStage\">\n            </div>\n        ";
    }
  }, {
    key: "actionArea",
    value: function actionArea() {
      return "\n            <div class=\"footer actionArea\">\n            </div>\n        ";
    }
  }]);
  return Stage;
}();

exports["default"] = Stage;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Função de inicio do jogo.
 */
var GamePrincipal = /*#__PURE__*/function () {
  function GamePrincipal(cards) {
    (0, _classCallCheck2["default"])(this, GamePrincipal);
    this.game = {};
    this.chars = {}; // card deck

    this.game.gameDeck = this.embaralhaDeck(cards.items);
    this.game.inGameCards = [];
    this.game.discardPile = []; // Hero stats and equip

    this.chars.baseHero = cards.herois[0];
    this.chars.hero = this.chars.baseHero;
    this.chars.hero.bag = [];
    this.chars.hero.equipedItems = []; // Enemy

    this.chars.enemy = {};
  }
  /**
   * Função de embaralhar as cartas de um deck(array)
   * @param {*} array 
   * @returns 
   */


  (0, _createClass2["default"])(GamePrincipal, [{
    key: "embaralhaDeck",
    value: function embaralhaDeck(array) {
      return array.sort(function () {
        return Math.random() - 0.5;
      });
    }
    /**
     * Função para mover cartas de um deck(array) para outro
     * @param {*} de 
     * @param {*} para 
     */

  }, {
    key: "moverCartaEntreDecks",
    value: function moverCartaEntreDecks(de, para) {
      de.length && para.push(de.pop());
    }
    /**
     * Função que retira uma carta do array Deck de Compra e coloca no array Em jogo
     */

  }, {
    key: "viraCarta",
    value: function viraCarta() {
      this.moverCartaEntreDecks(this.game.gameDeck, this.game.inGameCards);
    }
    /**
     * Função que retira uma carta do array Em jogo e coloca no array Deck de Compra
     */

  }, {
    key: "devolveCarta",
    value: function devolveCarta() {
      this.moverCartaEntreDecks(this.game.inGameCards, this.game.gameDeck);
    }
    /**
     * Função que retira uma carta do array Em jogo e coloca no array Cemiterio
     */

  }, {
    key: "descartaCarta",
    value: function descartaCarta() {
      this.moverCartaEntreDecks(this.game.inGameCards, this.game.discardPile);
    }
    /**
     * Função que retira uma carta do array Cemiterio e coloca devolta no array Em Jogo
     */

  }, {
    key: "cartaDoCemiterioParaEmJogo",
    value: function cartaDoCemiterioParaEmJogo() {
      this.moverCartaEntreDecks(this.game.discardPile, this.game.inGameCards);
    }
    /**
     * Função que retira uma carta do array Cemiterio e coloca devolta no array Deck de Compra
     */

  }, {
    key: "cartaDoCemiterioParaDeck",
    value: function cartaDoCemiterioParaDeck() {
      this.moverCartaEntreDecks(this.game.discardPile, this.game.gameDeck);
    }
    /**
     * Função que retira uma carta do array Inimigo e coloca devolta no array Em Jogo
     */

  }, {
    key: "imigoEntraEmJogo",
    value: function imigoEntraEmJogo() {
      this.chars.enemy = this.game.inGameCards[0];
    }
    /**
     * Função que retira uma carta do array Deck de Compra e coloca devolta no array de Bolsa de Itens
     */

  }, {
    key: "pegaItem",
    value: function pegaItem() {
      this.chars.hero.bag.length < 4 && this.moverCartaEntreDecks(this.game.inGameCards, this.chars.hero.bag);
    }
    /**
     * Função que retira item da bolsa de itens e coloca no array Equipado.
     * @param {*} index 
     */

  }, {
    key: "equipItem",
    value: function equipItem(index) {
      if (this.chars.hero.bag.length) {
        this.chars.hero.equipedItems.push(this.chars.hero.bag[index]);
        this.chars.hero.bag.splice(index, 1);
      }

      var tempMods = {};
      this.chars.hero.equipedItems.forEach(function (item) {
        for (var stat in item.effect) {
          var modifier = item.effect[stat];
          tempMods[stat] ? tempMods[stat] += modifier : tempMods[stat] = modifier;
        }
      });

      for (var stat in tempMods) {
        var modifier = tempMods[stat];

        if (this.chars.baseHero[stat] + modifier > 0) {
          this.chars.hero[stat] = this.chars.baseHero[stat] + modifier;
        } else {
          this.chars.hero[stat] = 0;
        }
      }
    }
    /**
     * Função de teste
     */

  }, {
    key: "pegaItemTest",
    value: function pegaItemTest() {
      for (var index = 0; index < 3; index++) {
        this.chars.hero.bag.push(this.game.gameDeck.pop());
      }
    }
  }]);
  return GamePrincipal;
}();

exports["default"] = GamePrincipal;
;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Modal = /*#__PURE__*/function () {
  function Modal() {
    (0, _classCallCheck2["default"])(this, Modal);
    this.openModal();
    this.closeModal();
  }

  (0, _createClass2["default"])(Modal, [{
    key: "openModal",
    value: function openModal() {
      $(document).on('click', '.myModal__btn', function (e) {
        var $id = $(e.currentTarget).data('for');
        var $target = $("#".concat($id));
        if ($target.length) $("#".concat($id)).show();
      });
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      $(document).on('click', '.myModal__close', function (e) {
        $(e.currentTarget).closest('.myModal').hide();
      });
    }
  }]);
  return Modal;
}();

exports["default"] = Modal;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],7:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Classe com funções de controle de combate
 */
var Combate = /*#__PURE__*/function () {
  function Combate() {
    (0, _classCallCheck2["default"])(this, Combate);
  }

  (0, _createClass2["default"])(Combate, [{
    key: "dado",
    value:
    /**
     * Função que simula uma jogada de dados
     * @param {*} n 
     * @returns 
     */
    function dado(n) {
      return Math.floor(Math.random() * n) + 1;
    }
    /**
     * Jodada de ataque entre Heroi e Monstro
     * @param {*} h 
     * @param {*} m 
     * @returns 
     */

  }, {
    key: "jogadaDeAtaque",
    value: function jogadaDeAtaque(h, m) {
      return h.habilidade + this.dado(6) >= m.habilidade + this.dado(6);
    }
    /**
     * Calcula o dano que o defensor recebe do atacante.
     * @param {*} atacante 
     * @param {*} defensor 
     * @returns 
     */

  }, {
    key: "jogadaDano",
    value: function jogadaDano(atacante, defensor) {
      return defensor.pv - atacante.forca;
    }
    /**
     * Ativa efeito visual relativo ao dano causado do Atacante ao Defensor
     * @param {*} atacante 
     * @param {*} defensor 
     */

  }, {
    key: "efeitoDano",
    value: function efeitoDano(atacante, defensor) {
      console.log("".concat(atacante.nome, " acerta um golpe em ").concat(defensor.nome));
    }
    /**
     * Ativa efeito visual relativo a morte de um personagem
     * @param {*} morto 
     * @returns 
     */

  }, {
    key: "msgMorte",
    value: function msgMorte(morto) {
      return console.log("O ".concat(morto.nome, " morreu. :(")); // aqui devera tirar o monstro do deck ou algo assim...
    }
    /**
     * Resolução do dano causado pelo Atacante ao Defensor, que pode resultar em Morte ou Dano
     * @param {*} atacante 
     * @param {*} defensor 
     */

  }, {
    key: "resolucaoAttack",
    value: function resolucaoAttack(atacante, defensor) {
      defensor.pv = this.jogadaDano(atacante, defensor);

      if (defensor.pv <= 0) {
        this.msgMorte(defensor);
      } else {
        this.efeitoDano(atacante, defensor);
      }
    }
    /**
     * Função que define a sequencia de ataque.
     * @param {*} heroi 
     * @param {*} monster 
     */

  }, {
    key: "sequenciaAtack",
    value: function sequenciaAtack(heroi, monster) {
      var h = heroi;
      var m = monster;
      var attacker = this.jogadaDeAtaque(h, m);

      if (attacker) {
        this.resolucaoAttack(h, m);
      } else {
        this.resolucaoAttack(m, h);
      }
    }
  }]);
  return Combate;
}();

exports["default"] = Combate;

},{"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],8:[function(require,module,exports){
module.exports={
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
    ],
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
    "items": [
        {
            "id": "0016",
            "nome": "Espada",
            "tipo": "Item",
            "tipo2": "equip",
            "effect": {"forca": 1},
            "descricao": "Uma espada", 
            "equiped": false
        },
        {
            "id": "0017",
            "nome": "Espada Grande",
            "tipo": "Item",
            "tipo2": "equip",
            "effect": {"forca": 2, "habilidade": -1},
            "descricao": "Uma espada grande",
            "equiped": false
        },
        {
            "id": "0018",
            "nome": "Botas de Agilidade",
            "tipo": "Item",
            "tipo2": "equip",
            "effect": {"habilidade": 1},
            "descricao": "Botas finas e bem trabalhadas",
            "equiped": false
        }
        ,
        {
            "id": "0019",
            "nome": "Pão de forma",
            "tipo": "Item",
            "tipo2": "instant",
            "effect": {"pv": 5},
            "descricao": "Um pão para uma refeição simples",
            "equiped": false
        }
    ],
    "herois": [
        {
            "id": 0,
            "nome": "Heroi",
            "tipo": "Heroi",
            "tipo2": "Cavaleiro",
            "forca": 1,
            "habilidade": 1,
            "resistencia": 1,
            "pv": 10
        }
    ]
}
},{}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cards = _interopRequireDefault(require("./json/cards.json"));

var _sequenciaAttack = _interopRequireDefault(require("./components/sequenciaAttack"));

var _gameStateConstructor = _interopRequireDefault(require("./components/gameStateConstructor"));

var _gameStage = _interopRequireDefault(require("./components/gameStage"));

var _modal = _interopRequireDefault(require("./components/modal"));

// console.log(Cards);
var gameStates = new _gameStateConstructor["default"](_cards["default"]);
var combate = new _sequenciaAttack["default"]();
var montaEstagio = new _gameStage["default"](gameStates);
var modals = new _modal["default"]();
modals.openModal();
modals.closeModal(); // renderiza um botao de teste

var testButton = function testButton(type) {
  var $html = "<button action=\"".concat(type, "\">").concat(type, "</button>");
  var content = document.querySelector('.content');
  content.innerHTML += $html;
  return;
};

var init = function init() {
  console.log(gameStates); // testButton('viraCarta');
  // testButton('pegaItem');
  // testButton('equipItem');
  // testButton('descartaCarta');
};

window.onload = init();

},{"./components/gameStage":4,"./components/gameStateConstructor":5,"./components/modal":6,"./components/sequenciaAttack":7,"./json/cards.json":8,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[9]);
