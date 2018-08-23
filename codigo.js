// ==========================================================
// CONSTANTES
// ==========================================================

const locais = [
    {local: 'Casa', chanceDeZumbi: 1},
    {local: 'Ponto de onibus', chanceDeZumbi: 1},
    {local: 'Posto de gasolina', chanceDeZumbi: 2},
]

const imgSrc = './img/';

const cartasJogo = [
    {   id: 0001,
        nome:'filler', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 0, 
        resistencia: 0, 
        pv: 1,
        descricao:'Um morto vivo animado por magia', 
        imagem: 'esqueleto.jpg'
    },
    {   id: 0002,
        nome:'attacker', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },
    {   id: 0003,
        nome:'Caster', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },
    {   id: 0004,
        nome:'Defender', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },
    {   id: 0005,
        nome:'Healer', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },
    {   id: 0006,
        nome:'Necromante', //Buffer
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 2,
        descricao:'Quando Necromante entra em jogo, ele invoca as 2 últimas cartas tipo morto-vivo do zumbis que foram para o cemiterio.', 
        imagem:'orc.jpg',
    },
    {   id: 0007,
        nome:'Debuffer', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },
    {   id: 0008,
        nome:'Boss', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },



    // {
    //     nome:'Gnoll', 
    //     tipo: 'Monstro',
    //     forca: 2, 
    //     habilidade: 1, 
    //     resistencia: 2, 
    //     pv: 10,
    //     descricao:'Um guerreiro bestial armado e raivoso',
    //     imagem:'gnoll.jpg'
    // },
    // {
    //     nome:'Aranha Gigante', 
    //     tipo: 'Monstro',
    //     forca: 3, 
    //     habilidade: 3, 
    //     resistencia: 1, 
    //     pv: 5,
    //     descricao:'Uma aranha com terríevis garras e a imagem do mal', 
    //     imagem:'spider.jpg'
    // },
    // {        
    //     nome:'Dragão', 
    //     tipo: 'Monstro',
    //     forca: 3, 
    //     habilidade: 2, 
    //     resistencia: 4, 
    //     pv: 20,
    //     descricao:'Um poderoso lagarto com grandes asas, hálito de fogo e voraz, muito voraz.', 
    //     imagem:'dragon.jpg'
    // }
]

const delayTime = 700;

var heroi = {nome:'Heroi', forca: 3, habilidade: 4, resistencia: 3, pv: 15}
var heroiGame = heroi;
var vidaHeroi = 15;
var inimigoPV = 0;

var deck = embaralhaCartas(cartasJogo);
var cemiterio = [];
var emJogo = [];

var cartaAtual;
var topodoCemiterioLocais;
var topododeck = 0;

var cemiterioPos;
var cardzindex;


// ==========================================================
// FUNÇÕES DE APOIO
// ==========================================================

//game over 

function gameOver () {
    $('body').append('<span id="bgModal"></span>');
    $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Fim de Jogo</div>');
    setTimeout(function(){
        $('#bgModal, #modal').addClass('complete');
    },1000);
}
    
// Embaralha aleatóriamente as cartas
function embaralhaCartas(a) {
    a.sort(function() { return 0.5 - Math.random() });
    return a;
}

// Calcula um numero de 1 a 100
function calcularJogada(variavel){
    var numeroAleatorio = Math.floor( (Math.random() * variavel) + 1);
    var resultado = numeroAleatorio;
    return resultado;
}

// Cria a carta na mesa
function carta($val, $id) {
    // console.log($val);
    var trechoHtml = 
    '<div class="card" id="carta-'+$id+'" data-id="'+$val.id+'">'+
        '<div class="backCard"></div>'+
        '<div class="frontCard" >'+
            '<h2 class="nome">'+$val.nome+'</h2>'+
            //'<span class="imagem" style="background-image: url('+imgSrc+$val.imagem+');"></span>'+
            '<span class="imagem" ></span>'+
            '<span class="cont-stats">'+
                '<span class="forca"><img src="'+imgSrc+'forca.svg" alt="Força" /><span class="valor">'+$val.forca+'</span></span>'+
                '<span class="habilidade"><img src="'+imgSrc+'habilidade.svg" alt="Força" /><span class="valor">'+$val.habilidade+'</span></span>'+
                '<span class="resistencia"><img src="'+imgSrc+'armadura.svg" alt="Força" /><span class="valor">'+$val.resistencia+'</span></span>'+
                '<span class="pv"><img src="'+imgSrc+'resistencia.svg" alt="pv" /><span class="valor">'+$val.pv+'</span></span>'+
            '</span>'+
            '<div class="tipo">'+$val.tipo+' - '+$val.tipo2+'</div>'+
            '<p class="descricao">'+$val.descricao+'</p>'+
        '</div>'+
        
    '</div>';
    return trechoHtml;
}

function configuraHeroi() {
    var barra = $('.heroBar');
    barra.find('.forca .valor').html(heroiGame.forca);
    barra.find('.habilidade .valor').html(heroiGame.habilidade);
    barra.find('.resistencia .valor').html(heroiGame.resistencia);
    barra.find('.pv .valor').html(heroiGame.pv);
}

// function posicao_cemiterio () {
//     posicaoCemiterio = $('.baseCartaCemiterio').position();
//     return posicaoCemiterio;
// }

function verificaTopodoDeck() {
    var esteId = deck.length;
    return $('#carta-'+esteId);
}

function verificaEmJogo() {
    return $('.card[data-id="'+emJogo[0].id+'"]');
}

// function verificaTopodoCemiterio() {
//     var esteId = cemiterio[cemiterio.length-1].id;
//     return $('.card[data-id="'+esteId+'"]');
// }

function mostraOpcoes($turno) {
    if ($turno == 'limpa') {
        $('.showBts').html('');
    }

    else if ($turno == 'ataque') {
        // $('.showBts').html('<button class="bt ataque">Ataque</button>');
        $('.showBts').html('<button class="bt ataque">Ataque</button><button class="bt exumar">Exumar</button>');
        $('.showBts .ataque').click(function(event) {
            $('.showBts').html('');
            // turnosdecombate(deck[deck.length-1]);
            turnosdecombate(emJogo[0]);
        });
        $('.showBts .exumar').click(function(event) {
            exumarCartaParaDeck();
        });

    }
}
function exumarCartaParaDeck() {
    if (cemiterio.length > 0) {
        deck.push(cemiterio.pop());
        var $id = deck.length+1;
        var $carta = deck[deck.length-1];
        $('.deckPlace').append(carta($carta, $id));
        $('#carta-'+deck.length+2).addClass('nodeckcompra');
    }
}

function ataque($atacante, $defensor) {
    var dano;
    var fa = parseInt($atacante.forca)+calcularJogada(6);
    var fd = parseInt($defensor.resistencia)+calcularJogada(6);

    if (fd >= fa) {
        logsTexto('O '+$defensor.nome+' se defende do golpe');
        dano = 0;
        return dano;
    }
    else {
        dano = fa-fd;
        logsTexto('O '+$defensor.nome+' levou '+dano+' pontos de com o golpe de '+$atacante.nome);
        return dano;
    }    
}

function combate($iniciativa,$inimigo) {
    var iniciativa = $iniciativa;
    var inimigo = $inimigo;
    var cartaInimigo = verificaEmJogo();
    //turno

    if (vidaHeroi > 0 && inimigoPV > 0) {
        //Inimigo ganha a iniciativa
        if (iniciativa == true) {
            turnoInimigo(iniciativa);
        }
        //Heroi ganha a iniciativa
        else {
            turnoJogador(iniciativa);
        }     
    }

    var combateFim = 'combateFim';

    return combateFim;

    function turnoInimigo($iniciativa) {
            // logsTexto(inimigo.nome+' venceu a iniciativa');
            danoFeito = ataque(inimigo,heroiGame);
            if (danoFeito > 0) {
                vidaHeroi = vidaHeroi-danoFeito;
                setTimeout(function(){
                    $('.heroBar .pv .valor').text(vidaHeroi).addClass('mudandoValor');
                    setTimeout(function(){
                        $('.heroBar .pv .valor').removeClass('mudandoValor');
                    },delayTime);
                    if (vidaHeroi <= 0) {
                        logsTexto(heroiGame.nome+' foi derrotado.');
                        gameOver();                
                    }
                    else {
                        if ($iniciativa == true) {
                            setTimeout(function() {
                                turnoJogador(iniciativa);
                            },delayTime);    
                        }
                        else {
                            mostraOpcoes('ataque');
                        }
                    }
                },delayTime);
            }  
            else {
                console.log('Não houve dano no heroi');
                setTimeout(function() {
                    if ($iniciativa == true) {
                        setTimeout(function() {
                            turnoJogador(iniciativa);
                        },delayTime);    
                    }
                    else {
                        mostraOpcoes('ataque');
                    }
                },delayTime);                
            }
    } 

    function turnoJogador($iniciativa) {
            // logsTexto(inimigo.nome+' venceu a iniciativa');
            danoFeito = ataque(heroiGame, inimigo);
            if (danoFeito > 0) {
                inimigoPV = inimigoPV-danoFeito;
                setTimeout(function(){
                    cartaInimigo.find('.pv .valor').text(inimigoPV).addClass('mudandoValor');
                    setTimeout(function(){
                        cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
                    },delayTime);
                    if (inimigoPV <= 0) {
                        logsTexto(inimigo.nome+' foi derrotado.');
                        irProCemiterio(cartaInimigo); 
                    }
                    else {
                        if ($iniciativa != true) {
                            setTimeout(function() {
                                turnoInimigo(iniciativa);
                            },delayTime);    
                        }
                        else {
                            mostraOpcoes('ataque');
                        }
                    }
                },delayTime);
            }  
            else {
                console.log('Não houve dano no heroi');
                setTimeout(function() {
                    if ($iniciativa != true) {
                        setTimeout(function() {
                            turnoInimigo(iniciativa);
                        },delayTime);    
                    }
                    else {
                        mostraOpcoes('ataque');
                    }
                },delayTime);                
            }
    } 
}

function jogadaIniciativa($inimigo) {
    var inimigo = $inimigo;
    var iniciativaInimigo = parseInt(inimigo.habilidade)+calcularJogada(6);
    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
    // inimigo ganha
    if ( iniciativaInimigo > iniciativaHeroi ) {
        logsTexto(inimigo.nome+' ganhou a iniciativa');
        return true;
    }
    // heroi ganha
    else if (iniciativaInimigo <= iniciativaHeroi) {
        logsTexto(heroiGame.nome+' ganhou a iniciativa');
        return false;
    } 
}


//inimigoPV = parseInt($inimigo.resistencia)*5;

function turnosdecombate($inimigo) {
    var inimigo = $inimigo;
    console.log('turnosdecombate');
    var iniciativa = jogadaIniciativa(inimigo);    
    combate(iniciativa,inimigo);
    
}

function logsTexto($texto) {
    $('.showText').html('<span class="texto">'+$texto+'</span>');
    console.log($texto);
}




// ==========================================================



function poeAsCartas($deck) {
    var i = 0;
    $($deck).each(function(i, el) {
        $('.deckPlace').append(carta(el, i+1));
        $('.card').addClass('entranojogo').addClass('nodeckcompra');
    });
    setTimeout(function(){
        $($deck).each(function(i, el) {
           setTimeout(function(){
                $('#carta-'+(i+1))
                .css('top',i*-1+'px')
                .css('left',i*2+'px')
                .removeClass('entranojogo');
            },i*($deck.length*10));
        });   
    },500);

    $('head').append('<style>.card.deFrente.ativo{z-index: '+deck.length+'}</style>');
}

function viraCartaDoDeck($deck){
    var topododeck = $(verificaTopodoDeck());
    topododeck.click(function(event) {
        emJogo.push(deck.pop());
        console.log(emJogo);
        $('.card[data-id="'+emJogo[0].id+'"]').removeClass('nodeckcompra').addClass('deFrente');
        if (emJogo[0].tipo == 'Monstro') {
            inimigoPV = emJogo[0].pv;
            // console.log(inimigoPV);
            setTimeout(function(){
                logsTexto('Um '+emJogo[0].nome+' surge!');
                mostraOpcoes('ataque');
            },delayTime*0.5);
        }   
        else {
            console.log('Não era monstro');
        }
    });
}

function irProCemiterio($estacarta) {
    $estacarta.addClass('cemiterio');
    setTimeout(function(){
        $estacarta.remove();
    },3000);

    switch (deck.length == 0) {
        case true:
            gameOver();
            break;
        default:
            cemiterio.push(emJogo.pop());
            mostraOpcoes('limpa');
            viraCartaDoDeck(deck);
            break;
    }
}


function jogo() {

    configuraHeroi();
    poeAsCartas(deck);
    viraCartaDoDeck(deck);

} 
$(document).ready(function($) {
  jogo();  
});