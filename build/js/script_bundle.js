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

var _helpers = _interopRequireDefault(require("./helpers"));

var bonusEffects = /*#__PURE__*/function () {
  function bonusEffects($atributo, $bonus) {
    (0, _classCallCheck2["default"])(this, bonusEffects);

    if ($bonus === 1) {
      $('.showBts').html("".concat(_helpers["default"].buttonTemplate('Testar Habilidade', 'testar1')));
    } else {
      $('.showBts').html("".concat(_helpers["default"].buttonTemplate('Testar Habilidade', 'testar')));
    }
  }

  (0, _createClass2["default"])(bonusEffects, [{
    key: "testar",
    value: function testar(elemento) {
      elemento.remove();
      setTimeout(function () {
        var jogada = _helpers["default"].calcularJogada(6);

        console.log('jogada  =' + jogada);

        if (jogada > window.heroiGame.habilidade) {
          $('.deckPlace').addClass('atingido');
          this.atualizaAtributo($atributo, classe, $bonus); // logsTexto(textoDescritivo($atributo, $bonus));

          setTimeout(function () {
            $('.deckPlace').removeClass('atingido');
            irProCemiterio($('.card.pos-0'), 0);
          }, delayTime / 3);
        } else {
          logsTexto('O heroi passou pela armadilha');
          setTimeout(function () {
            irProCemiterio($('.card.pos-0'), 0);
          }, delayTime / 3);
        }
      }, 0);
    } //         $('document').on('click', '[data-action="testar"]', () => {
    //             $(this).remove();
    //             setTimeout(function(){
    //                 var jogada = calcularJogada(6);
    //                 console.log('jogada  ='+jogada);
    //                 if (jogada > heroiGame.habilidade) {
    //                     $('.deckPlace').addClass('atingido');
    //                     bonus.atualizaAtributo($atributo, classe, $bonus);
    //                     logsTexto(textoDescritivo($atributo, $bonus));
    //                     setTimeout(function(){
    //                         $('.deckPlace').removeClass('atingido');
    //                         irProCemiterio($('.card.pos-0'), 0);
    //                     },delayTime/3);
    //                 }
    //                 else {
    //                     logsTexto('O heroi passou pela armadilha');   
    //                     setTimeout(function(){
    //                         irProCemiterio($('.card.pos-0'), 0);
    //                     },delayTime/3);
    //                 }
    //             },0);
    //         });
    //         $('document').on('click', '[data-action="testar1"]', () => {
    //             $(this).remove();
    //             setTimeout(function(){
    //                 var jogada = calcularJogada(6);
    //                 jogada = 1;
    //                 if (jogada <= heroiGame.habilidade) {
    //                     //conseguiu a benção
    //                     $('.deckPlace').addClass('bencao');
    //                     bonus.atualizaAtributo($atributo, classe, $bonus);
    //                     logsTexto(textoDescritivo($atributo, $bonus));
    //                     setTimeout(function(){
    //                         $('.deckPlace').removeClass('bencao');
    //                         irProCemiterio($('.card.pos-0'), 0);
    //                     },delayTime/3);
    //                 }
    //                 else {
    //                     //conseguiu a benção
    //                     logsTexto('O heroi não conseguiu...'); 
    //                     setTimeout(function(){
    //                         irProCemiterio($('.card.pos-0'), 0);
    //                     },delayTime/3);
    //                 }
    //             },0);
    //         });
    //     }
    //     //textoDescritivo($atributo, $bonus);

  }], [{
    key: "textoDescritivo",
    value: function textoDescritivo($atributo, $bonus) {
      if ($atributo === 'forca') {
        return $bonus > 0 ? 'Heroi sente suas forças revigoradas' : 'Heroi sente suas forças se esvaindo';
      }

      if ($atributo === 'habilidade') {
        return $bonus > 0 ? 'Heroi sente suas habilidades aumentando' : 'Heroi sente suas habilidades diminuindo';
      }

      if ($atributo === 'resistencia') {
        return $bonus > 0 ? 'Heroi sente sua resistencia crescendo' : 'Heroi sente sua resistencia diminuindo';
      }

      if ($atributo === 'pv') {
        return $bonus > 0 ? 'Heroi sente sua vida revigorada' : 'Heroi sente suas feridas';
      }
    }
  }, {
    key: "atualizaAtributo",
    value: function atualizaAtributo($atributo, $classe, $bonus) {
      if ($atributo === 'pv') {
        var dano = calcularJogada(6);

        if ($bonus != 1) {
          dano = dano * -1;
        }

        heroiGame[$atributo] = heroiGame[$atributo] + dano;
      } else {
        heroiGame[$atributo] = heroiGame[$atributo] + $bonus;
      }

      $('.heroBar .barR .' + $atributo + ' .valor').text(heroiGame[$atributo]).addClass($classe);
      setTimeout(function () {
        $('.heroBar .barR .' + $atributo + ' .valor').removeClass($classe);
      }, delayTime / 3);
    } // }

  }]);
  return bonusEffects;
}();

exports["default"] = bonusEffects;

},{"./helpers":7,"@babel/runtime/helpers/classCallCheck":1,"@babel/runtime/helpers/createClass":2,"@babel/runtime/helpers/interopRequireDefault":3}],5:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

var _controleFront = _interopRequireDefault(require("./controleFront"));

var _default = {
  viraCartasBack: function viraCartasBack(info, $qtd) {
    var cartas = info.cartas;
    var qtd = $qtd;

    if (cartas.deck.length < $qtd) {
      qtd = cartas.deck.length;
    }

    for (qtd > cartas.emJogo.length; qtd--;) {
      cartas.emJogo.push(cartas.deck.pop());
    }

    info.cartas = cartas;
    return info;
  },
  ataqueComUmInimigo: function ataqueComUmInimigo(info) {
    var cartas = info.cartas,
        inimigos = info.inimigos;
    inimigos.esteInimigo = {};
    inimigos.esteInimigo = cartas.emJogo[0];
    info.inimigos = inimigos;
    return info; // this.inicioDoTurnoDeCombate(info, 0);
    // return info;
  },
  debounce: function debounce(func) {
    var _this = this;

    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
    var timer;
    return function () {
      if (!timer) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        func.apply(_this, args);
      }

      clearTimeout(timer);
      timer = setTimeout(function () {
        timer = undefined;
      }, timeout);
    };
  },
  ataqueComVariosInimigos: function ataqueComVariosInimigos(info) {
    console.log('Preciso montar a luta com mais de 1 inimigo');
    return info; // let {cartas, inimigos} = info;
    // let estaPosicao = 0;
    // $('.showBts').html('Escolha uma carta para atacar');
    // fakeCards(emJogo.length);
    // $('.fkCards').click(function(event) {
    //     var inimigoSelecionado = $(this).attr('data-pos');
    //     $('.fkCards').remove();
    //     var posInimigo = (emJogo.length - 1) - inimigoSelecionado;
    //     estaPosicao = posInimigo;
    //     esteInimigo = {};
    //     esteInimigo = emJogo[posInimigo];
    //     turnosdecombateMais(emJogo, esteInimigo, posInimigo);
    // });
  },
  novoCombate: function novoCombate(info) {
    var ataque = this.ataque;
    var heroi = info.heroi,
        inimigos = info.inimigos,
        cartas = info.cartas;
    var dano;
    var jogadaHeroi = 10; //heroi.habilidade + helpers.rollDice(6);

    var jogadaInimigo = 1; //inimigos.esteInimigo.habilidade + helpers.rollDice(6);

    if (jogadaHeroi >= jogadaInimigo) {
      // O heroi ataca o monstro
      dano = ataque(heroi, inimigos.esteInimigo);

      if (!dano) {
        inimigos.esteInimigo.pv = this.danoMortal(inimigos.esteInimigo.pv, dano);
      } else {
        _controleFront["default"].inimigoDefende(info);
      }

      info.inimigos = inimigos;

      if (inimigos.esteInimigo.pv) {
        _controleFront["default"].danoEmInimigo(info, dano);

        _controleFront["default"].mostraOpcoes(info);
      } else {
        cartas.cemiterio.push(cartas.emJogo.pop());
        info.cartas = cartas;

        _controleFront["default"].retiraDoTopoDaMesa();

        _controleFront["default"].escolhaCarta();
      }
    } else {
      // O mostro ataca o heroi
      dano = ataque(inimigos.esteInimigo, heroi);
      heroi.pv = this.danoMortal(heroi.pv, dano);
      info.heroi = heroi;
    }

    return info;
  },
  jogadaDeIniciativa: function jogadaDeIniciativa(info) {
    var heroi = info.heroi,
        cartas = info.cartas,
        apoio = info.apoio;

    var iniciativaHeroi = heroi.habilidade + _helpers["default"].calcularJogada(6);

    var ordemTemp = [];

    for (var i = 0; i < cartas.emJogo.length; i++) {
      var inimigo = cartas.emJogo[i];

      var iniciativaInimigo = inimigo.habilidade + _helpers["default"].calcularJogada(6);

      ordemTemp[i] = {
        iniac: iniciativaInimigo,
        nome: inimigo.nome,
        pos: i
      };
    }

    ordemTemp[ordemTemp.length] = {
      iniac: iniciativaHeroi,
      nome: heroi.nome,
      pos: -1
    };
    ordemTemp.sort(_helpers["default"].sortByName);
    info.apoio.ordem_de_ataque = ordemTemp;
    return info;
  },
  combateMais: function combateMais(info) {
    // $ordem, $esteInimigo, $posicao
    var apoio = info.apoio,
        cartas = info.cartas,
        inimigos = info.inimigos,
        estaPosicao = info.estaPosicao;
    console.log('apoio.ordem_de_ataque: ', apoio.ordem_de_ataque);
    apoio.ordem_de_ataque.forEach(function (inimigo) {
      console.log('inimigo: ', inimigo);
      var index = inimigo.pos;
      console.log('index: ', index);
      var posicao = cartas.emJogo.length - 1 - estaPosicao; // index = -1;

      if (index === -1) {
        apoio.atacanteAtual = 'jogador';
      } else {
        apoio.atacanteAtual = 'inimigo';
        estaPosicao = posicao; // this.turnoJogadorMais(inimigos.esteInimigo, estaPosicao);
        // this.turnoInimigoMais(cartas.emJogo[index], posicao);
      }

      apoio.ordem_de_ataque.shift();
    });
    info.apoio = apoio;
    info.estaPosicao = estaPosicao;
    return info;
  },
  turnoJogadorMais: function turnoJogadorMais(info, $posicao) {
    var inimigos = info.inimigos,
        cartas = info.cartas,
        estaPosicao = info.estaPosicao,
        heroi = info.heroi; // const invertePos = (cartas.emJogo.length - 1) - estaPosicao;
    // const cartaInimigo = $('.card.pos-'+ invertePos);

    var danoFeito = ataque(heroi, inimigos.esteInimigo);

    if (danoFeito > 0) {
      inimigos.inimigoPV[$posicao].pVida = inimigos.inimigoPV[$posicao].pVida - danoFeito; // cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
      // setTimeout(function(){
      // cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
      // },delayTime/3);

      if (inimigoPV[$posicao].pVida <= 0) {
        // logsTexto($inimigo_atual.nome+' foi derrotado.');
        // irProCemiterio(cartaInimigo, $posicao);
        console.log('Manda pro cemitério');
      } else {
        // setTimeout(function(){
        // mostraOpcoes('ataqueMais');
        // },delayTime);    
        console.log('Tem mais vida, Mostra ataque mais...');
      }
    }
  },
  turnoInimigoMais: function turnoInimigoMais(a, b) {
    console.log('turnoInimigoMais', a, b);
  },
  ataque: function ataque($atacante, $defensor) {
    var atk = $atacante.forca;
    var def = $defensor.resistencia;

    var forcaAtaque = atk + _helpers["default"].calcularJogada(6);

    var forcaDefesa = def + _helpers["default"].calcularJogada(6);

    if (forcaDefesa >= forcaAtaque) {
      return 0;
    } else {
      return forcaAtaque - forcaDefesa;
    }
  },
  danoMortal: function danoMortal(pv, dano) {
    pv -= dano;
    return pv >= 0 ? pv : 0;
  }
};
exports["default"] = _default;

},{"./controleFront":6,"./helpers":7,"@babel/runtime/helpers/interopRequireDefault":3}],6:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = _interopRequireDefault(require("./helpers"));

var _default = {
  // Mais pra frente deve receber o objeto principal
  configuraHeroi: function configuraHeroi(info) {
    var barra = $('.heroBar');
    barra.find('.forca .valor').html(info.heroi.forca);
    barra.find('.habilidade .valor').html(info.heroi.habilidade);
    barra.find('.resistencia .valor').html(info.heroi.resistencia);
    barra.find('.pv .valor').html(info.heroi.pv);
    return;
  },
  poeAsCartas: function poeAsCartas(info) {
    var carta = this.carta;
    $(info.cartas.deck).each(function (i, el) {
      $('.deckPlace').append(carta(info));
      $('.card').addClass('entranojogo').addClass('nodeckcompra');
    });
    setTimeout(function () {
      $(info.cartas.deck).each(function (i, el) {
        var tempoCartaNaMesa = i * (info.delayTime / info.cartas.deck.length / 5);
        setTimeout(function () {
          $(".card:nth-of-type(".concat(i + 1, ")")).css('top', i * -1 + 'px').css('left', i * 2 + 'px').removeClass('entranojogo');

          if (i === info.cartas.deck.length - 1) {
            setTimeout(function () {
              console.log('Clique em uma carta para iniciar.');
            }, 500);
          }
        }, tempoCartaNaMesa);
      });
    }, 500);
  },
  carta: function carta(info) {
    var imgType = {
      forca: "".concat(info.imgSrc, "/forca.png"),
      habilidade: "".concat(info.imgSrc, "/Habilidade.png"),
      resistencia: "".concat(info.imgSrc, "/Resistencia.png"),
      pv: "".concat(info.imgSrc, "/pv.png")
    };
    return "<div class=\"card\" id=\"\" data-pos=\"\" data-id=\"\">\n            <div class=\"backCard\" title=\"O verso da carta possui uma imagem que representa a masmorra\"><span class=\"name\">Card<br/>Dungeon</span></div>\n            <div class=\"frontCard\" >\n                <h2 class=\"nome\"></h2>\n                <span class=\"imagem\" title=\"\"></span>\n                <span class=\"cont-stats\">\n                    <span class=\"forca\"><img src=\"".concat(imgType.forca, "\" alt=\"For\xE7a\" /><span class=\"valor\" title=\"Valor do atributo For\xE7a da carta\"></span></span>\n                    <span class=\"habilidade\"><img src=\"").concat(imgType.habilidade, "\" alt=\"Atributo Habilidade\" /><span class=\"valor\" title=\"Valor do atributo Habilidade da carta\"></span></span>\n                    <span class=\"resistencia\"><img src=\"").concat(imgType.resistencia, "\" alt=\"Atributo resistencia\" /><span class=\"valor\" title=\"Valor do atributo  Resistencia da carta\"></span></span>\n                    <span class=\"pv\"><img src=\"").concat(imgType.pv, "\" alt=\"Atributo Pontos de Vida\" /><span class=\"valor\" title=\"Valor do atributo Pontos de vida da carta\"></span></span>\n                </span>\n                <div class=\"tipo\"><span class=\"tipo1\"></span> - <span class=\"tipo2\"></span></div>\n                <p class=\"descricao\"></p>\n            </div>\n        </div>");
  },
  viraCartasFront: function viraCartasFront(info) {
    var configuraCarta = this.configuraCarta;
    var cartas = info.cartas;
    var qtd = cartas.emJogo.length;
    var topododeck = $(".card:nth-of-type(".concat(cartas.deck.length, ")"));
    $('.showText').text('');
    $('.baseCarta').hide();
    $('.deckPlace').data('qtd', 'qtd-' + qtd);

    for (qtd > cartas.emJogo.length; qtd--;) {
      topododeck = $('.card:nth-of-type(' + cartas.deck.length + ')').removeClass('nodeckcompra').addClass('pos-' + qtd).data('pos', qtd);
      configuraCarta(topododeck, info);
    }
  },
  removeDuplos: function removeDuplos(array) {
    return array.filter(function (elem, index, array) {
      return array.indexOf(elem) === index;
    });
  },
  mapTipos1: function mapTipos1(arr) {
    var tipos = arr.map(function (el) {
      return el.tipo;
    });
    return tipos;
  },
  calculaOpcoes: function calculaOpcoes(info) {
    var removeDuplos = this.removeDuplos;
    var mapTipos1 = this.mapTipos1;
    var emJogo = info.cartas.emJogo;
    return removeDuplos(mapTipos1(emJogo));
  },
  configuraCarta: function configuraCarta($carta, info) {
    var front = $carta.find('.frontCard');
    var este = info.cartas.emJogo[info.cartas.emJogo.length - 1];
    console.log(este.tipo);
    front.find('.nome').text(este.nome);
    front.find('.nome').text(este.nome);
    front.find('.tipo .tipo1').text(este.tipo);
    front.find('.tipo .tipo2').text(este.tipo2);
    front.find('.descricao').text(este.descricao);

    if (este.tipo === 'buff') {
      front.find('.imagem').css('background-image', 'url(./img/' + este.imagem + ')').addClass('grande').attr('title', este.alt);
      front.find('.cont-stats').remove();
    }

    if (este.tipo === 'debuff') {
      front.find('.imagem').css('background-image', 'url(./img/' + este.imagem + ')').addClass('grande').attr('title', este.alt);
      front.find('.cont-stats').remove();
    }

    if (este.tipo === 'Monstro') {
      front.find('.imagem').attr('title', este.alt).css('background-image', 'url(./img/' + este.imagem + ')');
      front.find('.cont-stats .forca .valor').text(este.forca);
      front.find('.cont-stats .habilidade .valor').text(este.habilidade);
      front.find('.cont-stats .resistencia .valor').text(este.resistencia);
      front.find('.cont-stats .pv .valor').text(este.pv);
    }

    $carta.addClass('deFrente');
  },
  inimigoDefende: function inimigoDefende(info) {
    var _this = this;

    var inimigos = info.inimigos,
        delayTime = info.delayTime;
    var $text = "".concat(inimigos.esteInimigo.nome, " defende o golpe.");
    this.displayTextAutoErase($text, delayTime);
    setTimeout(function () {
      _this.mostraOpcoes('ataqueMais');
    }, delayTime * 2);
  },
  displayTextAutoErase: function displayTextAutoErase(string, delayTime) {
    $('.showText').text(string);
    setTimeout(function () {
      $('.showText').text('');
    }, delayTime * 3);
  },
  interacaoComCartas: function interacaoComCartas(info) {
    var inimigos = info.inimigos;
    var cartas = info.cartas;
    var opcoesAtuais = info.opcoesAtuais;
    inimigos.inimigoPV = [];
    $(info.cartas.emJogo).each(function (i, el) {
      console.log('el: ', el);

      if (el.tipo === 'Monstro') {
        info.inimigos.inimigoPV.push({
          pVida: el.pv,
          nome: el.nome,
          pos: i
        });
        info.opcoesAtuais.push('ataqueMais');
      } // switch (el.tipo) {
      //     case 'Monstro':
      //         inimigoPV.push({
      //             pVida: el.pv,
      //             nome: el.nome,
      //             pos: i
      //         });
      //         poderesDeMonstro(el);
      //         // mostraOpcoes('ataqueMais');
      //         break;
      //     case 'buff':
      //         console.log('buff');
      //         const buffBonus = new BonusEffects(el.tipo2,1);
      //         // mostraOpcoes('continuar');
      //         break;
      //     case 'debuff':
      //         console.log('debuff');
      //         const debuffBonus = new BonusEffects(el.tipo2,-1);
      //         // mostraOpcoes('continuar');
      //         break;
      //     default:
      //         console.log('Não monstro');
      //         break;
      // }		

    });
    return info;
  },
  filtraOpcoes: function filtraOpcoes(info) {
    var opcoes = this.calculaOpcoes(info);
    var novasOpcoes = [];

    for (var i = 0; i < opcoes.length; i++) {
      if (opcoes[i] === 'Monstro') {
        novasOpcoes.push('ataqueMais');
      }
    }

    return novasOpcoes;
  },
  mostraOpcoes: function mostraOpcoes(info) {
    var buttonTemplate = _helpers["default"].buttonTemplate;
    var opcoes = typeof info !== 'string' ? this.filtraOpcoes(info) : info;
    var $html = '';

    for (var i = 0; i < opcoes.length; i++) {
      var $turno = opcoes[i];

      if ($turno === 'limpa') {
        $html = '';
        break;
      }

      if ($turno === 'ataque') {
        $html += "".concat(buttonTemplate('Ataque', 'ataque'), " ").concat(buttonTemplate('Exumar', 'exumar'));
      }

      if ($turno === 'ataqueMais') {
        $html += "".concat(buttonTemplate('Ataque Mais', 'ataquemais'));
      } else if ($turno === 'continuar') {
        $html += "".concat(buttonTemplate('Continuar', 'continuar'));
      }
    }

    console.log('$html: ', $html);
    $('.showBts').html($html);
  },
  danoEmInimigo: function danoEmInimigo(info, dano) {
    var inimigos = info.inimigos,
        delayTime = info.delayTime;
    var cartaInimigo = $('.card.pos-0');
    cartaInimigo.find('.pv .valor').text(inimigos.esteInimigo.pv).addClass('mudandoValor');
    setTimeout(function () {
      cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
    }, delayTime / 3);
  },
  retiraDoTopoDaMesa: function retiraDoTopoDaMesa() {
    var $estacarta = $('.card.pos-0');
    $estacarta.addClass('cemiterio');
    setTimeout(function () {
      $estacarta.remove();
    }, 1000);
  },
  escolhaCarta: function escolhaCarta() {
    $('.showText').text('Clique na carta para continuar');
    $('.baseCarta').show();
  },
  fimDeJogo: function fimDeJogo() {
    switch (deck.length < 1) {
      case true:
        switch (emJogo.length == 1) {
          case true:
            setTimeout(function () {
              muito__bem();
            }, delayTime * 0.5);
            break;

          default:
            mandando_pra_cova();
            break;
        }

        break;

      default:
        mandando_pra_cova();
        break;
    }
  }
};
exports["default"] = _default;

},{"./helpers":7,"@babel/runtime/helpers/interopRequireDefault":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  shuffle_arr: function shuffle_arr(a) {
    a.sort(function () {
      return Math.random() - 0.5;
    });
    return a;
  },
  rollDice: function rollDice(max) {
    return 1 + Math.floor(Math.random() * max);
  },
  sortByName: function sortByName(a, b) {
    var aIniac = a.iniac;
    var bIniac = b.iniac;
    return aIniac < bIniac ? -1 : aIniac > bIniac ? 1 : 0;
  },
  // Embaralha aleatóriamente as cartas
  embaralhaCartas: function embaralhaCartas(a) {
    console.log('embaralhaCartas');
    a.sort(function () {
      return 0.5 - Math.random();
    });
    $(a).each(function (i, el) {
      el.idCarta = 'carta-' + i;
    });
    return a;
  },
  // Calcula um numero de 1 a 100
  calcularJogada: function calcularJogada(variavel) {
    var numeroAleatorio = Math.floor(Math.random() * variavel + 1);
    var resultado = numeroAleatorio;
    return resultado;
  },
  buttonTemplate: function buttonTemplate(name, id) {
    return "<button class=\"bt ".concat(id, "\" data-action='").concat(id, "'>").concat(name, "</button>");
  }
};
exports["default"] = _default;

},{}],8:[function(require,module,exports){
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
},{}],9:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _cards = _interopRequireDefault(require("./json/cards.json"));

var _BonusEffects = _interopRequireDefault(require("./components/BonusEffects"));

var _controleFront = _interopRequireDefault(require("./components/controleFront"));

var _helpers = _interopRequireDefault(require("./components/helpers"));

var _CoreRules = _interopRequireDefault(require("./components/CoreRules"));

var _this = void 0;

// ==========================================================
// Invocando Classes
// ==========================================================
// const controleFront = new ControlFront();
// const coreRules = new CoreRules();
var embaralhaCartas = _helpers["default"].embaralhaCartas,
    calcularJogada = _helpers["default"].calcularJogada; // ==========================================================
// CONSTANTES
// ==========================================================

var imgSrc = '../src/img';
var cartasJogo = _cards["default"].monsters;
var cartasBonus = _cards["default"].bonus; //Isso aqui deve vir nas configurações do jogo em JSON

var heroi = {
  id: 'heroi',
  nome: 'Heroi',
  forca: 3,
  habilidade: 4,
  resistencia: 3,
  pv: 15
}; // ==========================================================
// Obj GameInfo
// ==========================================================

var gameInfo = {
  delayTime: 3000,
  heroi: heroi,
  inimigos: {
    inimigoPV: [],
    esteInimigo: {}
  },
  estaPosicao: 0,
  imgSrc: '../src/img',
  cartas: {
    emJogo: [],
    cemiterio: [],
    deck: embaralhaCartas(cartasJogo),
    qtd: 0
  },
  apoio: {
    atacanteAtual: '',
    cartaAtual: '',
    topodoCemiterioLocais: '',
    topododeck: 0,
    cemiterioPos: '',
    cardzindex: '',
    ordem_de_ataque: []
  },
  opcoesAtuais: []
};
console.log('gameInfo: ', gameInfo); // ==========================================================
// FUNÇÕES DE INICIO
// ==========================================================

$(document).ready(function ($) {
  jogo();
});

function jogo() {
  _controleFront["default"].configuraHeroi(gameInfo);

  _controleFront["default"].poeAsCartas(gameInfo);

  console.log('gameInfo start: ', gameInfo);
} // ==========================================================
// FUNÇÕES DE APOIO
// ==========================================================
// function bonus($atributo, $bonus) {
//     var bonus = $bonus;
//     var classe;
//     if (bonus == 1) {
//         classe = 'mudandoValorPositivo';
//         $('.showBts').html(`${buttonTemplate('Testar Habilidade', 'testar1')}`);
//         // $('.showBts').html('<button class="bt testar1">Testar habilidade</button>');
//     }
//     else {
//         classe = 'mudandoValor';
//         $('.showBts').html(`${buttonTemplate('Testar Habilidade', 'testar')}`);
//         $('document').on('click', '[data-action="testar"]', () => {
//             $(this).remove();
//             setTimeout(function(){
//                 var jogada = calcularJogada(6);
//                 console.log('jogada  ='+jogada);
//                 if (jogada > heroiGame.habilidade) {
//                     $('.deckPlace').addClass('atingido');
//                     bonus.atualizaAtributo($atributo, classe, $bonus);
//                     logsTexto(textoDescritivo($atributo, $bonus));
//                     setTimeout(function(){
//                         $('.deckPlace').removeClass('atingido');
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//                 else {
//                     logsTexto('O heroi passou pela armadilha');   
//                     setTimeout(function(){
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//             },0);
//         });
//         $('document').on('click', '[data-action="testar1"]', () => {
//             $(this).remove();
//             setTimeout(function(){
//                 var jogada = calcularJogada(6);
//                 jogada = 1;
//                 if (jogada <= heroiGame.habilidade) {
//                     //conseguiu a benção
//                     $('.deckPlace').addClass('bencao');
//                     bonus.atualizaAtributo($atributo, classe, $bonus);
//                     logsTexto(textoDescritivo($atributo, $bonus));
//                     setTimeout(function(){
//                         $('.deckPlace').removeClass('bencao');
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//                 else {
//                     //conseguiu a benção
//                     logsTexto('O heroi não conseguiu...'); 
//                     setTimeout(function(){
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//             },0);
//         });
//     }
//     //textoDescritivo($atributo, $bonus);
//     function textoDescritivo($atributo, $bonus) {
//         var $texto;
//         switch ($atributo) {
//             case 'forca':
//                 if ($bonus > 0) {
//                     $texto = 'Heroi sente suas forças revigoradas';
//                 }
//                 else {
//                     $texto = 'Heroi sente suas forças se esvaindo';
//                 }
//                 break;
//             case 'habilidade':
//                 if ($bonus > 0) {
//                     $texto = 'Heroi sente suas habilidades aumentando';
//                 }
//                 else {
//                     $texto = 'Heroi sente suas habilidades diminuindo';
//                 }
//                 break;
//             case 'resistencia':
//                 if ($bonus > 0) {
//                     $texto = 'Heroi sente sua resistencia crescendo';
//                 }
//                 else {
//                     $texto = 'Heroi sente sua resistencia diminuindo';
//                 }
//                 break;
//             case 'pv':
//                 if ($bonus > 0) {
//                     $texto = 'Heroi sente sua vida revigorada';
//                 }
//                 else {
//                     $texto = 'Heroi sente suas feridas';
//                 }
//                 break;
//         }
//         return $texto;
//     }
//     function atualizaAtributo($atributo, $classe, $bonus) {
//         switch ($atributo) {
//             case 'pv':
//                 var valor = calcularJogada(6);
//                 if ($bonus != 1) {
//                     valor = valor*-1;
//                 }
//                 heroiGame[$atributo] = heroiGame[$atributo]+valor;                
//                 break;
//             default:
//                 heroiGame[$atributo] = heroiGame[$atributo]+$bonus;
//                 break;
//         }
//         $('.heroBar .barR .'+$atributo+' .valor').text(heroiGame[$atributo]).addClass($classe);
//         setTimeout(function(){
//             $('.heroBar .barR .'+$atributo+' .valor').removeClass($classe);
//         },delayTime/3);    
//     }
// }
// ==========================================================
// FINS DE JOGO
// ==========================================================
//game over 


function gameOver() {
  console.log('gameover');
  $('body').append('<span id="bgModal"></span>');
  $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Fim de Jogo</div>');
  setTimeout(function () {
    $('#bgModal, #modal').addClass('complete');
  }, delayTime / 10);
}

function muito__bem() {
  console.log('gameover');
  $('body').append('<span id="bgModal"></span>');
  $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Parabéns!<small>Você venceu a masmorra.</small></div>');
  setTimeout(function () {
    $('#bgModal, #modal').addClass('complete');
  }, delayTime / 10);
}

function configuraHeroi() {
  console.log('configuraHeroi');
  var barra = $('.heroBar');
  barra.find('.forca .valor').html(heroiGame.forca);
  barra.find('.habilidade .valor').html(heroiGame.habilidade);
  barra.find('.resistencia .valor').html(heroiGame.resistencia);
  barra.find('.pv .valor').html(heroiGame.pv);
} // function mostraOpcoes($turno) {
//     console.log('$turno: ', $turno);
//     if ($turno === 'limpa') {
//         $('.showBts').html('');
//     }
//     if ($turno === 'ataque') {
//         $('.showBts').html(`${buttonTemplate('Ataque', 'ataque')} ${buttonTemplate('Exumar', 'exumar')}`);
//     }
//     if ($turno === 'ataqueMais') {        
//         $('.showBts').html(`${buttonTemplate('Ataque Mais', 'ataquemais')}`);       
//     }
//     else if ($turno === 'continuar') {
//         $('.showBts').html(`${buttonTemplate('Continuar', 'continuar')}`);  
//     }
// }


function fakeCards($qtd) {
  for (var i = $qtd - 1; i >= 0; i--) {
    $('.baseCarta').after('<button class="fkCards fk-num-' + i + '" data-pos="' + i + '"></button>');
  }
} //Funcoes de jogo


function exumarCartaParaDeck() {
  if (cemiterio.length > 0) {
    deck.push(cemiterio.pop());
    var estacarta = deck[deck.length - 1];
    $('.deckPlace').append(carta(estacarta));
    setTimeout(function () {
      $('#' + estacarta.idCarta).addClass('nodeckcompra').css('top', -1 * deck.length + 'px').css('left', 2 * deck.length + 'px');
    }, 0);
  }
}

function ataque($atacante, $defensor) {
  var dano;
  var fa = parseInt($atacante.forca) + calcularJogada(6);
  var fd = parseInt($defensor.resistencia) + calcularJogada(6);

  if (fd >= fa) {
    logsTexto('O ' + $defensor.nome + ' se defende do golpe de ' + $atacante.nome);
    dano = 0;
    return dano;
  } else {
    dano = fa - fd;
    logsTexto('O ' + $defensor.nome + ' levou ' + dano + ' pontos de dano com o golpe de ' + $atacante.nome);
    return dano;
  }
}

function turnosdecombateMais($em_jogo, $esteInimigo, $posicao_inimigo) {
  var iniciativaInimigo = [];
  var iniciativaHeroi = parseInt(heroiGame.habilidade) + calcularJogada(6);
  ordem_de_ataque.push({
    iniac: iniciativaHeroi,
    nome: heroiGame.nome,
    pos: -1
  });
  $(emJogo).each(function (i, el) {
    var inimigo = emJogo[i];
    iniciativaInimigo = parseInt(inimigo.habilidade) + calcularJogada(6);
    ordem_de_ataque.push({
      iniac: iniciativaInimigo,
      nome: inimigo.nome,
      pos: i
    });
  });

  function SortByName(a, b) {
    var aIniac = a.iniac;
    var bIniac = b.iniac;
    return aIniac < bIniac ? -1 : aIniac > bIniac ? 1 : 0;
  }

  ordem_de_ataque.sort(SortByName);
  combateMais(ordem_de_ataque, $esteInimigo, $posicao_inimigo);
}

function combateMais($ordem, $esteInimigo, $posicao) {
  $($ordem).each(function (i, el) {
    var index = $ordem[i].pos;
    var inimigo = $esteInimigo;
    var posicao = emJogo.length - 1 - $posicao;

    switch (index) {
      case -1:
        setTimeout(function () {
          turnoJogadorMais(esteInimigo, estaPosicao);
          ordem_de_ataque.shift();
        }, delayTime * i);
        break;

      default:
        setTimeout(function () {
          turnoInimigoMais(emJogo[index], posicao);
          ordem_de_ataque.shift();
        }, delayTime * i);
        break;
    }

    console.log('ordem_de_ataque');
    console.log(ordem_de_ataque);
  });
}

function logsTexto($texto) {
  $('.showText').html('<span class="texto">' + $texto + '</span>');
  console.log($texto);
}

function turnoInimigoMais($inimigo, $posicao) {
  inimigo = $inimigo;
  var cartaInimigo = $('.card.pos-' + $posicao);

  switch (inimigoPV[$posicao].pVida > 0) {
    case true:
      danoFeito = ataque(inimigo, heroiGame); // danoFeito = 0;

      switch (danoFeito > 0) {
        case true:
          heroiPV = heroiPV - danoFeito;
          cartaInimigo.addClass('atacando');
          $('.deckPlace').addClass('atingido');
          setTimeout(function () {
            $('.deckPlace').removeClass('atingido');
            $('.heroBar .pv .valor').text(heroiPV).addClass('mudandoValor');
            setTimeout(function () {
              cartaInimigo.removeClass('atacando');
              $('.heroBar .pv .valor').removeClass('mudandoValor');
            }, delayTime / 4);

            if (heroiPV <= 0) {
              logsTexto(heroiGame.nome + ' foi derrotado.');
              gameOver();
            }
          }, delayTime / 5);
          break;

        default:
          setTimeout(function () {
            if (ordem_de_ataque.length == 0 && inimigoPV[$posicao].pVida > 0) {
              mostraOpcoes('ataqueMais');
            }
          }, delayTime / 4);
          break;
      }

      break;

    default:
      console.log('O ' + inimigoPV[$posicao].nome + ' esta morto');
      break;
  }
}

function turnoJogadorMais($inimigo_atual, $posicao) {
  var invertePos = emJogo.length - 1 - estaPosicao;
  var cartaInimigo = $('.card.pos-' + invertePos);
  danoFeito = ataque(heroiGame, $inimigo_atual); // danoFeito = 10;

  switch (danoFeito > 0) {
    case true:
      inimigoPV[$posicao].pVida = inimigoPV[$posicao].pVida - danoFeito;
      setTimeout(function () {
        cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
        setTimeout(function () {
          cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
        }, delayTime / 3);

        switch (inimigoPV[$posicao].pVida <= 0) {
          case true:
            logsTexto($inimigo_atual.nome + ' foi derrotado.');
            irProCemiterio(cartaInimigo, $posicao);
            break;

          default:
            setTimeout(function () {
              mostraOpcoes('ataqueMais');
            }, delayTime);
            break;
        }
      }, delayTime / 4);
      break;

    default:
      console.log('Não houve dano no heroi');
      setTimeout(function () {
        mostraOpcoes('ataqueMais');
      }, delayTime / 4);
      break;
  }
}

function poderesDeMonstro($el) {
  console.log('poderesDeMonstro');

  switch ($el.tipo2) {
    case 'Necromante':
      var delay_do_poder = delayTime / 3;
      var temp_arr = [];
      var ripley = 0;
      var count = 0;
      var y = $el.poder;

      for (var i = cemiterio.length; i > 0;) {
        //setTimeout(function(){
        var index = i - 1;

        if (y > 0) {
          if (cemiterio[index].tipo2 == 'Morto-vivo') {
            deck.push(cemiterio[index]);
            cemiterio.splice(index, 1);
            y--;
            count++;
          }

          i--;
        } else {
          i = 0;
        }

        ripley++; //},1*ripley)
      } // console.log('ripley = '+ripley);
      // console.log('=========================');
      // console.log('count = '+count);
      // console.log('=========================');
      // console.log('temp_arr');
      // console.log(temp_arr);
      // console.log('=========================');
      // setTimeout(function(){


      if (count > 0) {
        emJogo[0].tipo2 = 'Necromante Ativo';
        deck.push(emJogo.pop());
        count++;
        var poder = count;

        while (count > 0) {
          $('.deckPlace').append(carta());
          $('.card:last-of-type').addClass('nodeckcompra josias');
          count--;
        }

        setTimeout(function () {
          $('.card.pos-0').addClass('chamando-cartas');
          setTimeout(function () {
            $('.card.pos-0').remove();
            viraCartasDoDeck(deck, poder);
            $('.baseCarta').click();
          }, delay_do_poder * 2);
        }, delay_do_poder);
      } else {
        mostraOpcoes('ataqueMais');
      } // },ripley+5);


      break;

    default:
      mostraOpcoes('ataqueMais');
      break;
  }
} // function irProCemiterio($estacarta, $posicao) {
//     $estacarta.addClass('cemiterio');
//     setTimeout(function(){
//         $estacarta.remove();
//     },delayTime*0.5);
//     switch (deck.length < 1) {
//         case true:
//             switch (emJogo.length == 1) {
//                 case true:
//                     setTimeout(function(){
//                         muito__bem();    
//                     }, delayTime*0.5);
//                     break;
//                 default: 
//                     mandando_pra_cova();
//                     break;
//             }            
//             break;
//         default:
//          mandando_pra_cova();
//             break;
//     }
//     function mandando_pra_cova() {
//         switch (emJogo.length) {
//                 case 1:
//                     cemiterio.push(emJogo.pop());
//                     $('.deckPlace').attr('data-qtd','');
//                     setTimeout(function(){
//                         logsTexto('Clique na carta para jogar');
//                         viraCartasDoDeck(deck, 1);
//                     },0);
//                     break;
//                 default:
//                     var invertePos = (emJogo.length - 1) - estaPosicao;
//                     cemiterio.push(emJogo[estaPosicao]);
//                     emJogo.splice(estaPosicao, 1);
//                     $('.deckPlace').attr('data-qtd','');
//                     $('.deckPlace').attr('data-qtd','qtd-'+emJogo.length);
//                     for (var i = 3; i >= 0; i--) {
//                         $('.deckPlace .pos-'+i).removeClass('pos-'+i);
//                         // console.log(i);
//                     }
//                     setTimeout(function(){
//                         $('.deckPlace .deFrente').each(function(i, el) {
//                             $(this).addClass('pos-'+i);
//                             $(this).data('pos',i);
//                         });
//                         mostraOpcoes('ataqueMais');
//                         console.log('mostraOpcoes(ataqueMais) em irProCemiterio');
//                     }, delayTime/2);
//                     break;
//             }
//     }
// }
// ==========================================================
// AÇÕES BOTÕES
// ==========================================================


var $count = 0;
$(document).on('click', '.baseCarta', function (e) {
  // Base carta é um botão escondido...
  gameInfo = _CoreRules["default"].viraCartasBack(gameInfo, 1);
  console.log('bugHunt', gameInfo);

  _controleFront["default"].viraCartasFront(gameInfo);

  _controleFront["default"].mostraOpcoes(gameInfo);
});
$(document).on('click', '.bt', function (e) {
  var $this = $(e.target);
  var $action = $this.attr('data-action');

  _CoreRules["default"].debounce(function () {});

  $('.showBts').empty();

  if ($action === 'ataque') {
    // $('.showBts').html('');
    turnosdecombate(emJogo[0]);
  }

  if ($action === 'exumar') {
    exumarCartaParaDeck();
  }

  if ($action === 'ataquemais') {
    // $('.showBts').html('');
    $this.remove();
    gameInfo = gameInfo.cartas.emJogo.length ? _CoreRules["default"].ataqueComUmInimigo(gameInfo) : ataqueComVariosInimigos(gameInfo);
    gameInfo = _CoreRules["default"].novoCombate(gameInfo);
  }

  if ($action === 'continuar') {
    // $(this).remove();
    retiraDoTopoDaMesa();
  }

  if ($action === 'testar') {
    $(_this).remove();
    setTimeout(function () {
      var jogada = calcularJogada(6);
      console.log('jogada  =' + jogada);

      if (jogada > heroiGame.habilidade) {
        $('.deckPlace').addClass('atingido');

        _BonusEffects["default"].atualizaAtributo($atributo, classe, $bonus);

        setTimeout(function () {
          $('.deckPlace').removeClass('atingido');
          irProCemiterio($('.card.pos-0'), 0);
        }, delayTime / 3);
      } else {
        logsTexto('O heroi passou pela armadilha');
        setTimeout(function () {
          irProCemiterio($('.card.pos-0'), 0);
        }, delayTime / 3);
      }
    }, 0);
  }

  if ($action === 'testar1') {
    $(_this).remove();
    setTimeout(function () {
      var jogada = calcularJogada(6);
      jogada = 1;

      if (jogada <= heroiGame.habilidade) {
        //conseguiu a benção
        $('.deckPlace').addClass('bencao');

        _BonusEffects["default"].atualizaAtributo($atributo, classe, $bonus);

        setTimeout(function () {
          $('.deckPlace').removeClass('bencao');
          irProCemiterio($('.card.pos-0'), 0);
        }, delayTime / 3);
      } else {
        //conseguiu a benção
        logsTexto('O heroi não conseguiu...');
        setTimeout(function () {
          irProCemiterio($('.card.pos-0'), 0);
        }, delayTime / 3);
      }
    }, 0);
  }
}); // ==========================================================
// FUNÇÕES DE FRONT-END 
// ==========================================================

},{"./components/BonusEffects":4,"./components/CoreRules":5,"./components/controleFront":6,"./components/helpers":7,"./json/cards.json":8,"@babel/runtime/helpers/interopRequireDefault":3}]},{},[9]);
