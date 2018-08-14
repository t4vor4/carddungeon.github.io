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
    {nome:'Esqueleto', forca:'1', habilidade: '1', resistencia: '1', armadura: '1', poderDeFogo: '1', descricao:'Um morto vivo animado por magia', imagem: 'esqueleto.jpg'},
    {nome:'Orc', forca:'1', habilidade: '1', resistencia: '1', armadura: '1', poderDeFogo: '1', descricao:'Humanóides de pele verde, peludos e malvados', imagem:'orc.jpg'},
    {nome:'Gnoll', forca:'2', habilidade: '1', resistencia: '1', armadura: '1', poderDeFogo: '1', descricao:'Um guerreiro bestial armado e raivoso', imagem:'gnoll.jpg'},
    {nome:'Aranha Gigante', forca:'3', habilidade: '1', resistencia: '1', armadura: '1', poderDeFogo: '1', descricao:'Uma aranha com terríevis garras e a imagem do mal', imagem:'spider.jpg'},
    {nome:'Dragão', forca:'4', habilidade: '1', resistencia: '1', armadura: '1', poderDeFogo: '1', descricao:'Um poderoso lagarto com grandes asas, hálito de fogo e voraz, muito voraz.', imagem:'dragon.jpg'},
    // {nome:'Esqueleto 2', forca:'1', descricao:'Um morto vivo animado por magia', imagem: 'esqueleto.jpg'},
    // {nome:'Orc 2', forca:'1', descricao:'Humanóides de pele verde, peludos e malvados', imagem:'orc.jpg'},
    // {nome:'Gnoll 2', forca:'2', descricao:'Um guerreiro bestial armado e raivoso', imagem:'gnoll.jpg'},
    // {nome:'Aranha Gigante 2', forca:'3', descricao:'Uma aranha com terríevis garras e a imagem do mal', imagem:'spider.jpg'},
    // {nome:'Dragão 2', forca:'4', descricao:'Um poderoso lagarto com grandes asas, hálito de fogo e voraz, muito voraz.', imagem:'dragon.jpg'},
]

const heroi = {nome:'Heroi', forca: '5', habilidade: '5', resistencia: '5', armadura: '5', poderDeFogo: '5'}


var deck = embaralhaCartas(cartasJogo);
var cemiterio = [];

var topododeckLocais;
var topodoCemiterioLocais;

var cemiterioPos;
var cardzindex;


// ==========================================================
// FUNÇÕES DE APOIO
// ==========================================================

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
    console.log($val);
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

function mostraOpcoes() {
    $('.showBts').append('<button class="bt ataque"/>');
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
    var esteId = $deck.length;
    var topododeck = $('#carta-'+esteId);//deck[deck.length - 1];
    topododeck.click(function(event) {
        topododeck.addClass('deFrente');
        // irProCemiterio(topododeck);
        mostraOpcoes();
    });

    topododeck.find('.frontCard').click(function(event) {
        irProCemiterio(topododeck);
    });
}

function irProCemiterio($estacarta) {
    var pCemiterio = $('.baseCartaCemiterio').position();
    var posicaoX =  parseInt($estacarta.css('left'));
    var posicaoY =  parseInt($estacarta.css('top'));
    console.log(deck);
    $estacarta.
        css('left', (posicaoX+pCemiterio.left+30))
            .addClass('cemiterio')
            .removeClass('nodeckcompra')
            .css('z-index', cemiterio.length);

    switch (deck.length == 1) {
        case true:

            $('body').append('<span id="bgModal"></span>');
            $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Fim de Jogo</div>');
            setTimeout(function(){
                $('#bgModal, #modal').addClass('complete');
            },1000);

            break;
        default:
            cemiterio.push(deck.pop());    
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

    poeAsCartas(deck);
    viraCartaDoDeck(deck);

} 
$(document).ready(function($) {
  jogo();  
});