// ==========================================================
// CONSTANTES
// ==========================================================

const locais = [
    {local: 'Casa', chanceDeZumbi: 1},
    {local: 'Ponto de onibus', chanceDeZumbi: 1},
    {local: 'Posto de gasolina', chanceDeZumbi: 2},
]

const cartasBaralho = [
    {carta: 'As', naipe: 'copas'},
    {carta: '2', naipe: 'copas'},
    {carta: '3', naipe: 'copas'},
    {carta: '4', naipe: 'copas'},
    {carta: '5', naipe: 'copas'},
    {carta: '6', naipe: 'copas'},
    {carta: '7', naipe: 'copas'},
    {carta: '8', naipe: 'copas'},
    {carta: '9', naipe: 'copas'},
    {carta: '10', naipe: 'copas'},
    {carta: 'J', naipe: 'copas'},
    {carta: 'Q', naipe: 'copas'},
    {carta: 'K', naipe: 'copas'}
]

const imgSrc = './img/';

const cartasJogo = [
    {   nome:'Esqueleto', 
        tipo: 'Monstro',
        forca:1, 
        habilidade: 1, 
        resistencia: 1, 
        armadura: 1, 
        poderDeFogo: 1, 
        pv: 5,
        descricao:'Um morto vivo animado por magia', 
        imagem: 'esqueleto.jpg'
    },
    {
        nome:'Orc', 
        tipo: 'Monstro',
        forca:1, 
        habilidade: 1, 
        resistencia: 1,
        armadura: 1,
        poderDeFogo: 1,
        pv: 5,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'orc.jpg'
    },
    {
        nome:'Gnoll', 
        tipo: 'Monstro',
        forca:2, 
        habilidade: 1, 
        resistencia: 1, 
        armadura: 1, 
        poderDeFogo: 1, 
        pv: 5,
        descricao:'Um guerreiro bestial armado e raivoso',
        imagem:'gnoll.jpg'
    },
    {
        nome:'Aranha Gigante', 
        tipo: 'Monstro',
        forca:3, 
        habilidade: 1, 
        resistencia: 1, 
        armadura: 1, 
        poderDeFogo: 1, 
        pv: 5,
        descricao:'Uma aranha com terríevis garras e a imagem do mal', 
        imagem:'spider.jpg'
    },
    {
        
        nome:'Dragão', 
        tipo: 'Monstro',
        forca:4, 
        habilidade: 1, 
        resistencia: 10, 
        armadura: 1, 
        poderDeFogo: 1, 
        pv: 5,
        descricao:'Um poderoso lagarto com grandes asas, hálito de fogo e voraz, muito voraz.', 
        imagem:'dragon.jpg'
    },
]

const heroi = {nome:'Heroi', forca: 5, habilidade: 5, resistencia: 5, armadura: 5, poderDeFogo: 5, pv: 25}


var deck = embaralhaCartas(cartasJogo);
var heroiGame = heroi;
var cemiterio = [];

var heroiPV = parseInt(heroiGame.resistencia)*5;
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
            '<span class="imagem" style="background-image: url('+imgSrc+$val.imagem+');"></span>'+
            '<span class="cont-stats">'+
                '<span class="forca"><img src="'+imgSrc+'forca.svg" alt="Força" /><span class="valor">'+$val.forca+'</span></span>'+
                '<span class="habilidade"><img src="'+imgSrc+'habilidade.svg" alt="Força" /><span class="valor">'+$val.habilidade+'</span></span>'+
                '<span class="resistencia"><img src="'+imgSrc+'resistencia.svg" alt="Força" /><span class="valor">'+$val.resistencia+'</span></span>'+
                '<span class="armadura"><img src="'+imgSrc+'armadura.svg" alt="Força" /><span class="valor">'+$val.armadura+'</span></span>'+
                '<span class="poderDeFogo"><img src="'+imgSrc+'poderDeFogo.svg" alt="Força" /><span class="valor">'+$val.poderDeFogo+'</span></span>'+
            '</span>'+
            '<p class="descricao">'+$val.descricao+'</p>'+
        '</div>'+
        
    '</div>';
    return trechoHtml;
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
            calculaIniciativa(deck[deck.length-1]);
        });    
    }
    else if ($turno == 'ataque') {
        $('.showBts').html('<button class="bt ataque">Ataque</button>');
    }    
}

function ataque($atacante, $defensor) {
    console.log('$atacante = '+$atacante.nome);
    console.log('$defensor = '+$defensor.nome);
    var fa = parseInt($atacante.habilidade)+parseInt($atacante.forca)+calcularJogada(6);
    var fd = parseInt($defensor.habilidade)+parseInt($defensor.armadura)+calcularJogada(6);
    console.log('fa '+fa);
    console.log('fd '+fd);
    if (fd >= fa) {
        console.log('O '+$defensor.nome+' se defende do golpe');
        logsTexto('O '+$defensor.nome+' se defende do golpe');
    }
    else {
        var dano = fa-fd;
        console.log('O '+$defensor.nome+' levou '+dano+' pontos de com o golpe de '+$atacante.nome);
        logsTexto('O '+$defensor.nome+' levou '+dano+' pontos de com o golpe de '+$atacante.nome);
        return dano;
    }
}


//inimigoPV = parseInt($inimigo.resistencia)*5;

function calculaIniciativa($inimigo) {
    var iniciativaInimigo = parseInt($inimigo.habilidade)+calcularJogada(6);
    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);

    if (heroiGame.pv > 0 && $inimigo.pv > 0) {
        if (iniciativaInimigo > iniciativaHeroi) {
            logsTexto($inimigo.nome+' venceu a iniciativa');
            heroiGame.pv = heroiGame.pv-ataque($inimigo,heroiGame);
            if (heroiGame.pv <= 0) {
                logsTexto(heroiGame.nome+' foi derrotado.');
                gameOver();                
            }
        }
        else if (iniciativaInimigo < iniciativaHeroi) {
            logsTexto(heroiGame.nome+' venceu a iniciativa');
            mostraOpcoes('ataque');
            $('.showBts .ataque').click(function(event) {
                $inimigo.pv = $inimigo.pv-ataque(heroiGame,$inimigo);
                if ($inimigo.pv <= 0) {
                    logsTexto($inimigo.nome+' foi derrotado.');
                    irProCemiterio(verificaTopodoDeck());
                }
            });
            
        }
        else {
            calculaIniciativa($inimigo);
        }    
    }
    
}

function logsTexto($texto) {
    $('.showText').prepend('<span class="texto">'+$texto+'</span>');
}




// ==========================================================

function configuraHeroi() {
    var barra = $('.heroBar');
    barra.find('.forca .valor').html(heroiGame.forca);
    barra.find('.habilidade .valor').html(heroiGame.habilidade);
    barra.find('.resistencia .valor').html(heroiGame.resistencia);
    barra.find('.armadura .valor').html(heroiGame.armadura);
    barra.find('.poderDeFogo .valor').html(heroiGame.poderDeFogo);
}

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
    var pCemiterio = $('.baseCartaCemiterio').position();
    var posicaoX =  parseInt($estacarta.css('left'));
    var posicaoY =  parseInt($estacarta.css('top'));
    $estacarta.
        css('left', (posicaoX+pCemiterio.left+30))
            .addClass('cemiterio')
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