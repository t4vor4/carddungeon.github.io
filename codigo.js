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
    {   nome:'Esqueleto', 
        tipo: 'Monstro',
        forca:1, 
        habilidade: 2, 
        resistencia: 1, 
        pv: 5,
        descricao:'Um morto vivo animado por magia', 
        imagem: 'esqueleto.jpg'
    },
    {
        nome:'Orc', 
        tipo: 'Monstro',
        forca: 1, 
        habilidade: 2, 
        resistencia: 2,
        pv: 10,
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
    //     forca: 4, 
    //     habilidade: 5, 
    //     resistencia: 4, 
    //     pv: 20,
    //     descricao:'Um poderoso lagarto com grandes asas, hálito de fogo e voraz, muito voraz.', 
    //     imagem:'dragon.jpg'
    // },
]

var heroi = {nome:'Heroi', forca: 3, habilidade: 4, resistencia: 3, pv: 15}


var deck = embaralhaCartas(cartasJogo);
var heroiGame = heroi;
var cemiterio = [];

var vidaHeroi = 15;
var inimigoPV = 0;

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
    '<div class="card" id="carta-'+$id+'">'+
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

function posicao_cemiterio () {
    posicaoCemiterio = $('.baseCartaCemiterio').position();
    return posicaoCemiterio;
}

function verificaTopodoDeck() {
    var esteId = deck.length;
    return $('#carta-'+esteId);
}

function mostraOpcoes($turno) {
    console.log($turno);
    if ($turno == 'limpa') {
        $('.showBts').html('');
    }
    if ($turno == 'iniciativa') {
        $('.showBts').html('<button class="bt iniciativa">Iniciativa</button>');
        $('.showBts .iniciativa').click(function(event) {
            turnosdecombate(deck[deck.length-1]);
        });    
    }
    else if ($turno == 'ataque') {
        $('.showBts').html('<button class="bt ataque">Ataque</button>');
    }    
}

function ataque($atacante, $defensor) {
    var dano;
    var fa = parseInt($atacante.forca)+calcularJogada(6);
    var fd = parseInt($defensor.resistencia)+calcularJogada(6);
    if (fd >= fa) {
        console.log('O '+$defensor.nome+' se defende do golpe');
        logsTexto('O '+$defensor.nome+' se defende do golpe');
        dano = 0;
        return dano;
    }
    else {
        dano = fa-fd;
        console.log('O '+$defensor.nome+' levou '+dano+' pontos de com o golpe de '+$atacante.nome);
        logsTexto('O '+$defensor.nome+' levou '+dano+' pontos de com o golpe de '+$atacante.nome);
        return dano;
    }    
}

function combate($iniciativa,$inimigo) {
    var iniciativa = $iniciativa;
    var inimigo = $inimigo;
    var cartaInimigo = verificaTopodoDeck();
    if (vidaHeroi > 0 && inimigoPV > 0) {
        //Inimigo ganha a iniciativa
        if (iniciativa == true) {
            logsTexto(inimigo.nome+' venceu a iniciativa');

            danoFeito = ataque(inimigo,heroiGame);

            if (danoFeito > 0) {
                vidaHeroi = vidaHeroi-danoFeito;
                $('.heroBar .pv .valor').text(vidaHeroi).addClass('mudandoValor');
                // $('.heroBar .pv .valor').removeClass('mudaValor');
                setTimeout(function(){
                	$('.heroBar .pv .valor').removeClass('mudandoValor');
                },500);
                if (vidaHeroi <= 0) {
                    logsTexto(heroiGame.nome+' foi derrotado.');
                    gameOver();                
                }
                else {
                    mostraOpcoes('iniciativa');
                }
            }            
        }
        //Heroi ganha a iniciativa
        else {
            logsTexto(heroiGame.nome+' venceu a iniciativa');
            mostraOpcoes('ataque');
            $('.showBts .ataque').click(function(event) {

                danoFeito = ataque(heroiGame,inimigo)
                if (danoFeito > 0) {                    
                    inimigoPV = inimigoPV-danoFeito;    
                    cartaInimigo.find('.pv .valor').text(inimigoPV).addClass('mudandoValor');
                    setTimeout(function(){
                    	cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
                    },500);                	
                    if (inimigoPV <= 0) {
                        logsTexto(inimigo.nome+' foi derrotado.');
                        irProCemiterio(verificaTopodoDeck());
                    }
                    else {
                        mostraOpcoes('iniciativa');
                    }
                }
                else {
                    console.log('Não houve dano');
                }
                
            });
            
        }       
    }
}

function jogadaIniciativa($inimigo) {
    var inimigo = $inimigo;
    var iniciativaInimigo = parseInt(inimigo.habilidade)+calcularJogada(6);
    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
    // inimigo ganha
    if ( iniciativaInimigo > iniciativaHeroi ) {
        return true;
    }
    // heroi ganha
    else if (iniciativaInimigo <= iniciativaHeroi) {
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
    // $('.showText').prepend('<span class="texto">'+$texto+'</span>');
    $('.showText').html('<span class="texto">'+$texto+'</span>');
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
}

function viraCartaDoDeck($deck){
    var topododeck = $(verificaTopodoDeck());
    topododeck.click(function(event) {
        if ( $(this).hasClass('nodeckcompra')) {
            topododeck.addClass('deFrente').addClass('topododeck');
            if ( deck[deck.length-1].tipo == 'Monstro' ) {
                inimigoPV = deck[deck.length-1].pv;
                console.log(inimigoPV);
                mostraOpcoes('iniciativa');                
            }
            else {
                console.log('Não era monstro');    
            }
        }
    });

    // topododeck.find('.frontCard').click(function(event) {
    //     if ( $(this).parent().hasClass('nodeckcompra')) {
    //         irProCemiterio(topododeck);
    //     }
    //     else {
    //         console.log('pixaim');
    //     }
    // });
}

function irProCemiterio($estacarta) {
    // var pCemiterio = $('.baseCartaCemiterio').position();
    // var posicaoX =  parseInt($estacarta.css('left'));
    // var posicaoY =  parseInt($estacarta.css('top'));
    // $estacarta.
    //     css('left', (posicaoX+pCemiterio.left+30))
    //         .addClass('cemiterio')
    //         .removeClass('nodeckcompra')
    //         .css('z-index', cemiterio.length);

    $estacarta.addClass('cemiterio')
            .removeClass('nodeckcompra')
            .css('z-index', cemiterio.length);

    switch (deck.length == 1) {
        case true:
            gameOver();
            break;
        default:
            cemiterio.push(deck.pop());
            mostraOpcoes('limpa');
            viraCartaDoDeck(deck);
            break;
    }
    
    // if (deck.length == 0) {
    //     cemiterio.push(deck.pop());    
    //     viraCartaDoDeck(deck);
    // }
    // else {
    //     $('body').append('<span id="bgModal"></span>');
    //     $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Fim de Jogo</div>');
    //     setTimeout(function(){
    //         $('#bgModal, #modal').addClass('complete');
    //     },100);
    // }
}


function jogo() {

    configuraHeroi();
    poeAsCartas(deck);
    viraCartaDoDeck(deck);

} 
$(document).ready(function($) {
  jogo();  
});