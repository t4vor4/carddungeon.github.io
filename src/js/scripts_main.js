import cards from "./json/cards.json";
import helpers from "./components/helpers";
import BonusEffects from "./components/BonusEffects";
import ControlFront from "./components/controleFront";

// ==========================================================
// Invocando Classes
// ==========================================================
const controleFront = new ControlFront();


// ==========================================================
// CONSTANTES
// ==========================================================

//const imgSrc = './img/';
const imgSrc = '../src/img';

const gameInfo = {};

const {
    embaralhaCartas,
    calcularJogada,
    buttonTemplate
} = helpers;

const cartasJogo = cards.monsters;
const cartasBonus = cards.bonus;

// console.log(cartasJogo, cartasBonus);


const delayTime = 3000;

//Isso aqui deve vir nas configurações do jogo em JSON
const heroi = {
    id: 'heroi',
    nome:'Heroi', 
    forca: 3, 
    habilidade: 4, 
    resistencia: 3, 
    pv: 15
}

//Variaveis de personagens

var heroiGame = heroi;

gameInfo.heroi = heroi;

window.heroiGame = heroi;

// heroiGame.id = 'heroi';

gameInfo.delayTime = 3000;
gameInfo.heroi.heroiPV = 15;
gameInfo.inimigoPV = [];
gameInfo.esteInimigo = {};
gameInfo.estaPosicao = 0;

var heroiPV = 15;
var inimigoPV = [];
var esteInimigo = {};
var estaPosicao = 0;

//Estados basicos das cartas
window.deck = cartasJogo;


// $.merge(deck, cartasBonus);
gameInfo.deck = embaralhaCartas(cartasJogo);
console.log('gameInfo: ', gameInfo);
// console.log('deck');
// setTimeout(function(){
//     deck = embaralhaCartas(deck);
// },0);



var emJogo = [];
var cemiterio = [];

//Variaveis de apoio
var cartaAtual;
var topodoCemiterioLocais;
var topododeck = 0;
var cemiterioPos;
var cardzindex;
var ordem_de_ataque = [];

// ==========================================================
// Obj GameInfo
// ==========================================================
gameInfo.deck = embaralhaCartas(cartasJogo);
gameInfo.emJogo = [];
gameInfo.cemiterio = [];
gameInfo.ordem_de_ataque = [];





// ==========================================================
// FUNÇÕES DE INICIO
// ==========================================================
$(document).ready(function($) {
  jogo(); 
});

// ==========================================================
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
    setTimeout(function(){
        $('#bgModal, #modal').addClass('complete');
    },delayTime/10);
}

function muito__bem() {
    console.log('gameover');
    $('body').append('<span id="bgModal"></span>');
    $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Parabéns!<small>Você venceu a masmorra.</small></div>');
    setTimeout(function(){
        $('#bgModal, #modal').addClass('complete');
    },delayTime/10);
}
    
function configuraHeroi() {
    console.log('configuraHeroi');
    var barra = $('.heroBar');
    barra.find('.forca .valor').html(heroiGame.forca);
    barra.find('.habilidade .valor').html(heroiGame.habilidade);
    barra.find('.resistencia .valor').html(heroiGame.resistencia);
    barra.find('.pv .valor').html(heroiGame.pv);
}

function mostraOpcoes($turno) {
    console.log('$turno: ', $turno);
    if ($turno === 'limpa') {
        $('.showBts').html('');
    }
    
    if ($turno === 'ataque') {
        $('.showBts').html(`${buttonTemplate('Ataque', 'ataque')} ${buttonTemplate('Exumar', 'exumar')}`);
    }
    
    if ($turno === 'ataqueMais') {        
        $('.showBts').html(`${buttonTemplate('Ataque Mais', 'ataquemais')}`);       
        
    }
    else if ($turno === 'continuar') {
        $('.showBts').html(`${buttonTemplate('Continuar', 'continuar')}`);  
    }
}

function fakeCards($qtd) {
    for (var i = $qtd - 1; i >= 0; i--) {
        $('.baseCarta').after(
            '<button class="fkCards fk-num-'+i+'" data-pos="'+i+'"></button>'
        );
    }
}

//Funcoes de jogo
function exumarCartaParaDeck() {
    if (cemiterio.length > 0) {
        deck.push(cemiterio.pop());

        var estacarta = deck[deck.length-1];
        $('.deckPlace').append(carta(estacarta));
        setTimeout(function(){
            $('#'+estacarta.idCarta).addClass('nodeckcompra')
                .css('top',(-1*deck.length)+'px')
                .css('left',(2*deck.length)+'px');
        },0);        
    }
}

function ataque($atacante, $defensor) {
    var dano;
    var fa = parseInt($atacante.forca)+calcularJogada(6);
    var fd = parseInt($defensor.resistencia)+calcularJogada(6);

    if (fd >= fa) {
        logsTexto('O '+$defensor.nome+' se defende do golpe de '+$atacante.nome);
        dano = 0;
        return dano;
    }
    else {
        dano = fa-fd;
        logsTexto('O '+$defensor.nome+' levou '+dano+' pontos de dano com o golpe de '+$atacante.nome);
        return dano;
    }    
}

function turnosdecombateMais($em_jogo, $esteInimigo, $posicao_inimigo) {
    var iniciativaInimigo = [];    

    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
	ordem_de_ataque.push({iniac: iniciativaHeroi, nome: heroiGame.nome, pos: -1});  

    $(emJogo).each(function(i, el) {
    	var inimigo = emJogo[i];
    	iniciativaInimigo = parseInt(inimigo.habilidade)+calcularJogada(6);
    	ordem_de_ataque.push({iniac: iniciativaInimigo, nome: inimigo.nome, pos: i});    
    });

    function SortByName(a, b){
	  var aIniac = a.iniac;
	  var bIniac = b.iniac; 
	  return ((aIniac < bIniac) ? -1 : ((aIniac > bIniac) ? 1 : 0));
	}
	ordem_de_ataque.sort(SortByName);

    combateMais(ordem_de_ataque, $esteInimigo, $posicao_inimigo);
}

function combateMais($ordem, $esteInimigo, $posicao) {
	$($ordem).each(function(i, el) {
		var index = $ordem[i].pos;
        var inimigo = $esteInimigo;
        var posicao = (emJogo.length-1)-$posicao;
        switch (index) {
            case -1:
                setTimeout(function(){
                    turnoJogadorMais(esteInimigo, estaPosicao);
                    ordem_de_ataque.shift();
                }, delayTime*i);                
                break;
            default:
                setTimeout(function(){
                    turnoInimigoMais(emJogo[index], posicao);
                    ordem_de_ataque.shift();
                }, delayTime*i);                
                break;
        }
        console.log('ordem_de_ataque');
        console.log(ordem_de_ataque);
	});
}

function logsTexto($texto) {
    $('.showText').html('<span class="texto">'+$texto+'</span>');
    console.log($texto);
}

function turnoInimigoMais($inimigo, $posicao) {
        inimigo = $inimigo;
        var cartaInimigo = $('.card.pos-'+$posicao);
        switch (inimigoPV[$posicao].pVida > 0) {
            case true:
                danoFeito = ataque(inimigo,heroiGame);
                // danoFeito = 0;
                switch (danoFeito > 0) {
                    case true:
                        heroiPV = heroiPV-danoFeito;
                        cartaInimigo.addClass('atacando');
                        $('.deckPlace').addClass('atingido');
                        setTimeout(function(){                            
                            $('.deckPlace').removeClass('atingido');
                            $('.heroBar .pv .valor').text(heroiPV).addClass('mudandoValor');
                            setTimeout(function(){
                                cartaInimigo.removeClass('atacando');                                
                                $('.heroBar .pv .valor').removeClass('mudandoValor');
                            },delayTime/4);
                            if (heroiPV <= 0) {
                                logsTexto(heroiGame.nome+' foi derrotado.');
                                gameOver();
                            }
                        },delayTime/5);
                        break;
                    default:
                        setTimeout(function() {
                            if (ordem_de_ataque.length == 0 && inimigoPV[$posicao].pVida > 0) {
                                mostraOpcoes('ataqueMais');
                            }
                        },delayTime/4);
                        break;
                }
                break;
            default:
                console.log('O '+inimigoPV[$posicao].nome+' esta morto');
                break;
        }
} 

function turnoJogadorMais($inimigo_atual, $posicao) {
    var invertePos = (emJogo.length - 1) - estaPosicao;
    var cartaInimigo = $('.card.pos-'+ invertePos);
    danoFeito = ataque(heroiGame, $inimigo_atual);
    // danoFeito = 10;
    switch (danoFeito > 0) {
        case true:
            inimigoPV[$posicao].pVida = inimigoPV[$posicao].pVida-danoFeito;
            setTimeout(function(){
                cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
                setTimeout(function(){
                    cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
                },delayTime/3);
                switch (inimigoPV[$posicao].pVida <= 0) {
                    case true:
                        logsTexto($inimigo_atual.nome+' foi derrotado.');
                        irProCemiterio(cartaInimigo, $posicao);
                        break;
                    default:
                        setTimeout(function(){
                            mostraOpcoes('ataqueMais');    
                        },delayTime);                        
                        break;
                }
            },delayTime/4);
            break;
        default:
            console.log('Não houve dano no heroi');
            setTimeout(function(){
                mostraOpcoes('ataqueMais');    
            },delayTime/4);
            break;
    }
} 

function poderesDeMonstro($el) {
    console.log('poderesDeMonstro');
    switch ($el.tipo2) {
        case 'Necromante':
            var delay_do_poder = delayTime/3;
            var temp_arr = [];
            var ripley = 0;
            var count = 0;
            var y = $el.poder;

            for (var i = cemiterio.length; i > 0; ) {
                //setTimeout(function(){
                    var index = i-1;
                    if (y > 0) {
                        if (cemiterio[index].tipo2 == 'Morto-vivo') {
                            deck.push(cemiterio[index]);
                            cemiterio.splice(index, 1);
                            y--;
                            count++;
                        }
                        i--;
                    }
                    else {
                        i = 0;
                    }               
                    ripley++;
                //},1*ripley)
            }

            // console.log('ripley = '+ripley);
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
                    setTimeout(function(){
                        $('.card.pos-0').addClass('chamando-cartas');
                        setTimeout(function(){
                            $('.card.pos-0').remove();
                            viraCartasDoDeck(deck, poder);
                            $('.baseCarta').click();
                        },delay_do_poder*2);
                    },delay_do_poder);
                }
                else {
                    mostraOpcoes('ataqueMais');
                }
                
            // },ripley+5);

            
            break;

        default: 
            mostraOpcoes('ataqueMais');
            break;
    }
}

function irProCemiterio($estacarta, $posicao) {
    $estacarta.addClass('cemiterio');
    setTimeout(function(){
        $estacarta.remove();
    },delayTime*0.5);

    switch (deck.length < 1) {
        case true:
            switch (emJogo.length == 1) {
                case true:
                    setTimeout(function(){
                        muito__bem();    
                    }, delayTime*0.5);
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

    function mandando_pra_cova() {
        switch (emJogo.length) {
                case 1:
                    cemiterio.push(emJogo.pop());
                    $('.deckPlace').attr('data-qtd','');
                    setTimeout(function(){
                        logsTexto('Clique na carta para jogar');
                        viraCartasDoDeck(deck, 1);
                    },0);
                    break;
                default:
                    var invertePos = (emJogo.length - 1) - estaPosicao;
                    cemiterio.push(emJogo[estaPosicao]);
                    emJogo.splice(estaPosicao, 1);
                    $('.deckPlace').attr('data-qtd','');
                    $('.deckPlace').attr('data-qtd','qtd-'+emJogo.length);
                    for (var i = 3; i >= 0; i--) {
                        $('.deckPlace .pos-'+i).removeClass('pos-'+i);
                        // console.log(i);
                    }
                    setTimeout(function(){
                        $('.deckPlace .deFrente').each(function(i, el) {
                            $(this).addClass('pos-'+i);
                            $(this).data('pos',i);
                        });
                        mostraOpcoes('ataqueMais');
                        console.log('mostraOpcoes(ataqueMais) em irProCemiterio');
                    }, delayTime/2);
                    break;
            }
    }
}

// ==========================================================
// Funcoes de Front
// Apagar todas depois de colocar em ControleFront.js
// ==========================================================
function viraCartasDoDeck($deck,$qtd){
    var topododeck = $('.card:nth-of-type('+deck.length+')');
    var count = 0;
	$('.baseCarta').show().click(function(ev) {
        $('.showText').text('');
        switch (count) {
            case 0:
                var qtd = $qtd;
                if (deck.length < $qtd) {
                    qtd = deck.length;
                }
                $('.baseCarta').hide();
                setTimeout(function(){
                    $('.deckPlace').attr('data-qtd','qtd-'+qtd);
                    for (qtd > emJogo.length; qtd--;) { 
                        topododeck = $('.card:nth-of-type('+deck.length+')').removeClass('nodeckcompra').addClass('pos-'+qtd).attr('data-pos',qtd);
                        emJogo.push(deck.pop());
                        console.log('emJogo', emJogo[0].tipo)
                        configuraCarta(topododeck);
                    }
                    interacaoComCartas(emJogo);
                },0)
                break;
        }
        count++;
	});	
}

function configuraCarta($carta) {
    var front = $carta.find('.frontCard');
    var este = emJogo[emJogo.length-1];
    console.log(este.tipo);
    front.find('.nome').text(este.nome);
    front.find('.nome').text(este.nome);
    front.find('.tipo .tipo1').text(este.tipo);
    front.find('.tipo .tipo2').text(este.tipo2);
    front.find('.descricao').text(este.descricao);
    switch (este.tipo) {
        case 'buff':
            front.find('.imagem').css('background-image','url(./img/'+este.imagem+')').addClass('grande').attr('title',este.alt);
            front.find('.cont-stats').remove();
            break;
        case 'debuff':
            front.find('.imagem').css('background-image','url(./img/'+este.imagem+')').addClass('grande').attr('title',este.alt);
            front.find('.cont-stats').remove();
            break;
        default:
            front.find('.imagem').attr('title',este.alt).css('background-image','url(./img/'+este.imagem+')');
            front.find('.cont-stats .forca .valor').text(este.forca);
            front.find('.cont-stats .habilidade .valor').text(este.habilidade);
            front.find('.cont-stats .resistencia .valor').text(este.resistencia);
            front.find('.cont-stats .pv .valor').text(este.pv);
            break;
    }
    $carta.addClass('deFrente');
}

function interacaoComCartas($obj) {
    inimigoPV = [];
	$($obj).each(function(i,el){
        console.log('el: ', el)
        if (el.tipo === 'Monstro') {
            inimigoPV.push({
                pVida: el.pv,
                nome: el.nome,
                pos: i
            });
            poderesDeMonstro(el);
            mostraOpcoes('ataqueMais');
        }
        // switch (el.tipo) {
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
}

function jogo() {
    configuraHeroi();
    
    // controleFront.poeAsCartas(deck, delayTime);
    controleFront.poeAsCartas(gameInfo);
    controleFront.viraCartasDoDeck(gameInfo, 1);
} 

// ==========================================================
// AÇÕES BOTÕES
// ==========================================================

$(document).on('click', '.bt', (e) => {
    console.log($(this));
    console.log('e.target', e.target)
    const $action = $(e.target).attr('data-action');
    console.log('click', $action)

    // if ($action === 'className') {

    // }

    if ($action === 'ataque') {
        $('.showBts').html('');
        turnosdecombate(emJogo[0]);
    }

    if ($action === 'exumar') {
        exumarCartaParaDeck();
    }

    if ($action === 'ataquemais') {
        $(this).remove();
    
        estaPosicao = 0;
        console.log('emJogo.length em mostraOpcoes = '+emJogo.length);

        if(emJogo.length) {
            esteInimigo = {};
            esteInimigo = emJogo[estaPosicao];
            turnosdecombateMais(emJogo, emJogo[estaPosicao], estaPosicao);
            return;
        } else {
            $('.showBts').html('Escolha uma carta para atacar');
            fakeCards(emJogo.length);
            $('.fkCards').click(function(event) {
                var inimigoSelecionado = $(this).attr('data-pos');
                $('.fkCards').remove();
                var posInimigo = (emJogo.length - 1) - inimigoSelecionado;
                estaPosicao = posInimigo;
                esteInimigo = {};
                esteInimigo = emJogo[posInimigo];
                turnosdecombateMais(emJogo, esteInimigo, posInimigo);
            });
        }
    }

    if ($action === 'continuar') {
        $(this).remove();
        irProCemiterio($('.card.pos-0'), 0);
    }
    
    if ($action === 'testar') {
        $(this).remove();

        setTimeout(function(){
            var jogada = calcularJogada(6);
            console.log('jogada  ='+jogada);

            if (jogada > heroiGame.habilidade) {

                $('.deckPlace').addClass('atingido');
                BonusEffects.atualizaAtributo($atributo, classe, $bonus);
                setTimeout(function(){
                    $('.deckPlace').removeClass('atingido');
                    irProCemiterio($('.card.pos-0'), 0);
                },delayTime/3);
            }
            else {
                logsTexto('O heroi passou pela armadilha');   
                setTimeout(function(){
                    irProCemiterio($('.card.pos-0'), 0);
                },delayTime/3);
            }
        },0);
    }

    if ($action === 'testar1') {
        $(this).remove();

        setTimeout(function(){
            var jogada = calcularJogada(6);
            jogada = 1;
            if (jogada <= heroiGame.habilidade) {
                //conseguiu a benção
                $('.deckPlace').addClass('bencao');
                BonusEffects.atualizaAtributo($atributo, classe, $bonus);
                setTimeout(function(){
                    $('.deckPlace').removeClass('bencao');
                    irProCemiterio($('.card.pos-0'), 0);
                },delayTime/3);
            }
            else {
                //conseguiu a benção
                logsTexto('O heroi não conseguiu...'); 
                setTimeout(function(){
                    irProCemiterio($('.card.pos-0'), 0);
                },delayTime/3);
            }
        },0);
    }
    


});

// ==========================================================
// FUNÇÕES DE FRONT-END 
// ==========================================================
