// ==========================================================
// CONSTANTES
// ==========================================================

const imgSrc = './img/';

const cartasJogo = [
    {   id: 0001,
        nome:'Esqueleto', //filler
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 0, 
        resistencia: 0, 
        pv: 1,
        descricao:'Um morto vivo animado por magia', 
        poder: 0,
        imagem: 'esqueleto.png',
        alt: 'Um esqueleto humano, com ossos velhos cobertos de musgo, reanimado por magia. Usa botas e luvas de couro muito deterioradas. No braço direito carrega um escudo de madeira podre e no braço esquerdo uma espada enferrujada que ha muito tempo perdeu o fio.'
    },
    {   id: 0002,
        nome:'Zumbi Raivoso', //attacker
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um morto-vivo extremamente violento', 
        poder: 0,
        imagem:'zumbi-agressivo.png',
        alt: 'O Zumbi raivoso é um cadaver reanimado por magia aspecto brutal. Seus olhos tem orbitas brancas e sua pele esta coberta de chagas. Usa uma bermuda de tecido grosso e rasgado e seus punhos estão cobertos pelo sangue de suas vítimas'
    },
    {   id: 0003,
        nome:'Necromante Acolito', //Caster
        tipo: 'Monstro',
        tipo2: 'Necromante',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um jovem Necromante. Quando em jogo, pode ressucitar um morto-vivo do cemiterio', 
        poder: 1,
        imagem:'jovem-necromante.png',
        alt: 'Um jovem aprendiz de necromância que esbanja poder, que lhe escapa pelas mãos na forma de duas pequenas chamas. Paira ameaçadoramente no ar, usando uma túnica com pares de espinhos nos ombros e uma corrente amarrada a um crânio humano na cintura.'
    },
    {   id: 0004,
        nome:'Cavaleiro da Morte',  //Defender
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um poderoso cavaleiro morto-vivo', 
        poder: 0,
        imagem:'cavaleiro-da-morte.png',
        alt: 'Um esqueleto reanimado por magia trajando uma velha e pesada armadura negra com elmo. Seu elmo possui um par de asas nas laterais, suas costas são cobertas por uma capa que quase toca o chão, de sua cintura desce um tecido que cobre parte de suas pernas, sendo que estes itens todos tem a cor do sangue humano. Carrega duas espadas que gotejam sangue fresco no chão.'
    },
    {   id: 0005,
        nome:'Necromante Ancião', //Buffer
        tipo: 'Monstro',
        tipo2: 'Necromante',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 2,
        descricao:'Um velho necromante. Quando em jogo, pode ressucitar dois mortos-vivos do cemiterio.', 
        poder: 2,
        imagem:'velho-necromante.png',
        alt: 'Um mago necromante idoso que se apoia em um cajado. De suas mãos saem uma grande chama de poder. Sua cabeça esta coberta por um capuz e seu rosto esta sob as sombras, mas seus olhos brilham com o poder mágico. Em seu pescoço, um pequeno crânio humano esta pendurado em uma corrente. No topo de seu cajado há um crânio semi-humano com chifres curvos e chamas intensas de poder envolvem todo esta caveira demoníaca.'
    },
    {   id: 0006,
        nome:'Necromante Morto-vivo',//Debuffer
        tipo: 'Monstro',
        tipo2: 'Necromante',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um poderoso necromante que voltou da morte. Pode ressucitar três mortos-vivos do cemiterio.', 
        poder: 3,
        imagem:'necromante-morto-vivo.png',
        alt: 'Um poderoso esqueleto envolto por chamas mágicas flutua a meio metro do chão. Uma grande labareda mágica se projeta do chão até seu corpo, envolvendo e soltando fagulhas no ar. Usa apenas uma túnica púida sobre a caixa toráxica que brilha pela intensidade de seu poder.'
    },
    {   id: 0007,
        nome:'O Rei Maldito', //Boss
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Este rei perdido entre a vida e a morte é o senhor desta masmorra.', 
        poder: 0,
        imagem:'rei-maldito.png',
        alt: 'Um rei cadaver, com uma barba longa e cinzenta como teias de aranha, usando uma armadura prateada por cima de uma malha negra. Sobre sua cabeça esta uma coroa dourada cravejada de diamentes. Suas costas estão cobertas por uma capa da cor da realeza, e de sua cintura desce uma faixa do mesmo tecido. Em sua mão direita segura um escudo prateado e em sua mão esquerda esta uma espada brilhante de aspecto mágico.'
    },
]

const cartasJogoTeste = [
    {   id: 0006,
        nome:'Necromante Morto-vivo',//Debuffer
        tipo: 'Monstro',
        tipo2: 'Necromante',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um poderoso necromante que voltou da morte. Pode ressucitar três mortos-vivos do cemiterio.', 
        poder: 3,
        imagem:'necromante-morto-vivo.png'
    },
    {   id: 0001,
        nome:'Esqueleto', //filler
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 0, 
        resistencia: 0, 
        pv: 1,
        descricao:'Um morto vivo animado por magia', 
        poder: 0,
        imagem: 'esqueleto.png'
    },
    {   id: 0002,
        nome:'Zumbi Raivoso', //attacker
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um morto-vivo extremamente violento', 
        poder: 0,
        imagem:'zumbi-agressivo.png'
    },   
    {   id: 0004,
        nome:'Cavaleiro da Morte',  //Defender
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Um poderoso cavaleiro morto-vivo', 
        poder: 0,
        imagem:'cavaleiro-da-morte.png'
    },       
    {   id: 0007,
        nome:'O Rei Maldito', //Boss
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Este rei perdido entre a vida e a morte é o senhor desta masmorra.', 
        poder: 0,
        imagem:'rei-maldito.png'
    },
]

const cartasBonus = [
    //Bonus Positivo
    {   id: 0008,
        nome:'Arena do Poder', //Buff
        tipo: 'buff',
        tipo2: 'forca',
        descricao:'Teste sua habilidade. Em caso de sucesso, você ganha 1 ponto de força', 
        imagem: 'green--potion.png',
        alt: 'Uma sala circular com uma estátua no centro. Essa estatua representa um homem de pé, segurando um leão com o braço esquerdo e levantando sua espada aos céus como braço direito. É a representação de uma antiga divindade relacionada a força.'
    },
    {   id: 0009,
        nome:'Caminho da Habilidade', //Buff
        tipo: 'buff',
        tipo2: 'habilidade',
        descricao:'Teste sua habilidade. Em caso de sucesso, você ganha 1 ponto de Habilidade', 
        imagem: 'green--potion.png',
        alt: 'Um corredor se projeta a frente com esculturas em alto-relevo de raposas, coelhos e outros animais silvestres na parede. Aparentemente, essas imagens estão ligadas aos espíritos da floresta que circula a masmorra.'
    },
    {   id: 0010,
        nome:'Area da Resistencia', //Buff
        tipo: 'buff',
        tipo2: 'resistencia',
        descricao:'Teste sua habilidade. Em caso de sucesso, você ganha 1 ponto de Resistencia', 
        imagem: 'green--potion.png',
        alt: 'Um salão a estatua de uma jovem segurando um touro pelos chifres. A imagem representa uma divindade local ligada a resistência física e mental.'
    },
    {   id: 0011,
        nome:'Fonte da Vida', //Buff
        tipo: 'buff',
        tipo2: 'pv',
        descricao:'Teste sua habilidade. Em caso de sucesso, você ganha 1d6 ponto de Pontos de vida', 
        imagem: 'green--potion.png',
        alt: 'No centro desta sala se encontra uma fonte de águas cristalinas. No topo da fonte há uma estatua de uma mulher com as mãos espalmadas na altura da cintura. De suas mãos descem fios de águas claras e de aspecto revigorante.'
    },

    //Bonus Negativo
    {   id: 0012,
        nome:'Aura de Cansaço', //Buff
        tipo: 'debuff',
        tipo2: 'forca',
        descricao:'Teste sua habilidade. Em caso de falha, o Heroi perde 1 de força', 
        imagem: 'armadilha.png',
        alt: 'Esta área exala um aroma putrido e nauseante.'
    },
    {   id: 0013,
        nome:'Chão de espinhos', //Buff
        tipo: 'debuff',
        tipo2: 'habilidade',
        descricao:'Teste sua habilidade. Em caso de falha, o Heroi perde 1 de Habilidade', 
        imagem: 'armadilha.png',
        alt: 'O chão desse aposento está coberto de pequenos buracos que, ao detectarem a aproximação de alguém, projetam lâminas de quarenta centímetros em grande velocidade.'
    },
    {   id: 0014,
        nome:'Correntes da Corrupção', //Buff
        tipo: 'debuff',
        tipo2: 'resistencia',
        descricao:'Teste sua habilidade. Em caso de falha, o Heroi perde 1 de Resistencia', 
        imagem: 'armadilha.png',
        alt: 'As paredes dessa sala possuem sulcos profundos de onde são projetadas correntes de brilho mágico. Ao encostarem em seu alvo, as correntes emitem um brilho e desaparecem, mas seu peso ainda é sentido pela vítima.'
    },
    {   id: 0015,
        nome:'Vapores Venenosos', //Buff
        tipo: 'debuff',
        tipo2: 'pv',
        descricao:'Teste sua habilidade. Em caso de falha, o Heroi perde +1d6 de Pontos de vida', 
        imagem: 'armadilha.png',
        alt: 'Vapores pesados sobem de maneira sinuosa do chão deste recinto. O ar tem um cheiro ocre e pungente e pelos cantos pequenos roedores jazem mortos.'
    },
]

const delayTime = 3000;

var heroi = {nome:'Heroi', forca: 3, habilidade: 4, resistencia: 3, pv: 15}


//Variaveis de personagens

var heroiGame = heroi;
heroiGame.id = 'heroi';
var heroiPV = 15;
var inimigoPV = [];
var esteInimigo = {};
var estaPosicao = 0;

//Estados basicos das cartas
var deck = cartasJogo;

$.merge(deck, cartasBonus);
deck = embaralhaCartas(deck);
console.log('deck');
setTimeout(function(){
    deck = embaralhaCartas(deck);
},0);


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
// FUNÇÕES DE INICIO
// ==========================================================
$(document).ready(function($) {
  jogo();  
});

// ==========================================================
// FUNÇÕES DE APOIO
// ==========================================================

function cLog($text) {
    console.log($text);
}

function bonus($atributo, $bonus) {
    var bonus = $bonus;
    var classe;

    if (bonus == 1) {
        classe = 'mudandoValorPositivo';
        $('.showBts').html('<button class="bt testar1">Testar habilidade</button>');
        $('.showBts .testar1').click(function(event) {
            $(this).remove();
            setTimeout(function(){
                var jogada = calcularJogada(6);
                jogada = 1;
                if (jogada <= heroiGame.habilidade) {
                    //conseguiu a benção
                    $('.deckPlace').addClass('bencao');
                    atualizaAtributo($atributo, classe, $bonus);
                    logsTexto(textoDescritivo($atributo, $bonus));
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
        });
        
    }
    else {
        classe = 'mudandoValor';
        $('.showBts').html('<button class="bt testar">Testar habilidade</button>');
        $('.showBts .testar').click(function(event) {
            $(this).remove();
            setTimeout(function(){
                var jogada = calcularJogada(6);
                console.log('jogada  ='+jogada);
                if (jogada > heroiGame.habilidade) {
                    $('.deckPlace').addClass('atingido');
                    atualizaAtributo($atributo, classe, $bonus);
                    logsTexto(textoDescritivo($atributo, $bonus));
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
        });

        
    }


    

    //textoDescritivo($atributo, $bonus);
    function textoDescritivo($atributo, $bonus) {
        var $texto;
        switch ($atributo) {
            case 'forca':
                if ($bonus > 0) {
                    $texto = 'Heroi sente suas forças revigoradas';
                }
                else {
                    $texto = 'Heroi sente suas forças se esvaindo';
                }
                break;
            case 'habilidade':
                if ($bonus > 0) {
                    $texto = 'Heroi sente suas habilidades aumentando';
                }
                else {
                    $texto = 'Heroi sente suas habilidades diminuindo';
                }
                break;
            case 'resistencia':
                if ($bonus > 0) {
                    $texto = 'Heroi sente sua resistencia crescendo';
                }
                else {
                    $texto = 'Heroi sente sua resistencia diminuindo';
                }
                break;
            case 'pv':
                if ($bonus > 0) {
                    $texto = 'Heroi sente sua vida revigorada';
                }
                else {
                    $texto = 'Heroi sente suas feridas';
                }
                break;
        }
        return $texto;
    }

    function atualizaAtributo($atributo, $classe, $bonus) {
        switch ($atributo) {
            case 'pv':
                var valor = calcularJogada(6);
                if ($bonus != 1) {
                    valor = valor*-1;
                }
                heroiGame[$atributo] = heroiGame[$atributo]+valor;                
                break;
            default:
                heroiGame[$atributo] = heroiGame[$atributo]+$bonus;
                break;
        }
        $('.heroBar .barR .'+$atributo+' .valor').text(heroiGame[$atributo]).addClass($classe);
        setTimeout(function(){
            $('.heroBar .barR .'+$atributo+' .valor').removeClass($classe);
        },delayTime/3);    
    }
    

    
}

// ==========================================================
// FINS DE JOGO
// ==========================================================
//game over 
function gameOver() {
    cLog('gameover');
    $('body').append('<span id="bgModal"></span>');
    $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Fim de Jogo</div>');
    setTimeout(function(){
        $('#bgModal, #modal').addClass('complete');
    },delayTime/10);
}

function muito__bem() {
    cLog('gameover');
    $('body').append('<span id="bgModal"></span>');
    $('body').append('<div id="modal" class="gameover"><span class="text-gameover">Parabéns!<small>Você venceu a masmorra.</small></div>');
    setTimeout(function(){
        $('#bgModal, #modal').addClass('complete');
    },delayTime/10);
}
    
// Embaralha aleatóriamente as cartas
function embaralhaCartas(a) {
    cLog('embaralhaCartas');
    a.sort(function() { return 0.5 - Math.random() });
    $(a).each(function(i, el) {
        el.idCarta = 'carta-'+i;
    });
    return a;
}

// Calcula um numero de 1 a 100
function calcularJogada(variavel){
    var numeroAleatorio = Math.floor( (Math.random() * variavel) + 1);
    var resultado = numeroAleatorio;
    return resultado;
}

// Cria a carta na mesa
function carta($val) {
    var trechoHtml = 
    '<div class="card" id="" data-pos="" data-id="">'+
        '<div class="backCard" title="O verso da carta possui uma imagem que representa a masmorra"><span class="name">Card<br/>Dungeon</span></div>'+
        '<div class="frontCard" >'+
            '<h2 class="nome"></h2>'+
            '<span class="imagem" title=""></span>'+
            '<span class="cont-stats">'+
                '<span class="forca"><img src="'+imgSrc+'forca.png" alt="Força" /><span class="valor" title="Valor do atributo Força da carta"></span></span>'+
                '<span class="habilidade"><img src="'+imgSrc+'Habilidade.png" alt="Atributo Habilidade" /><span class="valor" title="Valor do atributo Habilidade da carta"></span></span>'+
                '<span class="resistencia"><img src="'+imgSrc+'Resistencia.png" alt="Atributo resistencia" /><span class="valor" title="Valor do atributo  Resistencia da carta"></span></span>'+
                '<span class="pv"><img src="'+imgSrc+'pv.png" alt="Atributo Pontos de Vida" /><span class="valor" title="Valor do atributo Pontos de vida da carta"></span></span>'+
            '</span>'+
            '<div class="tipo"><span class="tipo1"></span> - <span class="tipo2"></span></div>'+
            '<p class="descricao"></p>'+
        '</div>'+        
    '</div>';
    return trechoHtml;
}

function configuraHeroi() {
    cLog('configuraHeroi');
    var barra = $('.heroBar');
    barra.find('.forca .valor').html(heroiGame.forca);
    barra.find('.habilidade .valor').html(heroiGame.habilidade);
    barra.find('.resistencia .valor').html(heroiGame.resistencia);
    barra.find('.pv .valor').html(heroiGame.pv);
}

function mostraOpcoes($turno) {
    if ($turno == 'limpa') {
        $('.showBts').html('');
    }

    else if ($turno == 'ataque') {
        $('.showBts').html('<button class="bt ataque">Ataque</button><button class="bt exumar">Exumar</button>');
        $('.showBts .ataque').click(function(event) {
            $('.showBts').html('');
            turnosdecombate(emJogo[0]);
        });
        $('.showBts .exumar').click(function(event) {
            exumarCartaParaDeck();
        });

    }
    else if ($turno == 'ataqueMais') {
        $('.showBts').html('<button class="bt ataqueMais">Ataque+</button>');    
        
        $('.showBts .ataqueMais').click(function(event) {
            $(this).remove();
            estaPosicao = 0;

            console.log('emJogo.length em mostraOpcoes = '+emJogo.length);
            
            switch (emJogo.length) {
                case 1:
                        esteInimigo = {};
                        esteInimigo = emJogo[estaPosicao];
                        turnosdecombateMais(emJogo, emJogo[estaPosicao], estaPosicao);
                    break;
                default:
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
                    break;
            }
        });
    }
    else if ($turno == 'continuar') {
        $('.showBts').html('<button class="bt continuar">Continuar</button>'); 
        $('.showBts .continuar').click(function(event) {
            $(this).remove();
            irProCemiterio($('.card.pos-0'), 0);
        });
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

function poeAsCartas($deck) {
    // var i = 0;
    $($deck).each(function(i, el) {
        $('.deckPlace').append(carta());
        $('.card').addClass('entranojogo').addClass('nodeckcompra');
    });
    setTimeout(function(){
        $($deck).each(function(i, el) {
            var t_carta_na_mesa = i*((delayTime/$deck.length)/5);
            setTimeout(function(){
                $('.card:nth-of-type('+(i+1)+')')
                .css('top',i*-1+'px')
                .css('left',i*2+'px')
                .removeClass('entranojogo');
                switch (i == $deck.length-1) {
                case true:
                    setTimeout(function(){
                        logsTexto('Clique em uma carta para iniciar.');
                    },500);                    
                    break;
                }
            },t_carta_na_mesa);                  
        });        
    },500);
}

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
        switch (el.tipo) {
            case 'Monstro':
                inimigoPV.push({
                    pVida: el.pv,
                    nome: el.nome,
                    pos: i
                });
                poderesDeMonstro(el);
                // mostraOpcoes('ataqueMais');
                break;
            case 'buff':
                cLog('buff');
                bonus(el.tipo2,1);
                // mostraOpcoes('continuar');
                break;
            case 'debuff':
                cLog('debuff');
                bonus(el.tipo2,-1);
                // mostraOpcoes('continuar');
                break;
            default:
                console.log('Não monstro');
                break;
        }		
	});
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

function jogo() {
    configuraHeroi();
    poeAsCartas(deck);
    viraCartasDoDeck(deck, 1);
} 

// ==========================================================
// FUNÇÕES DE FRONT-END 
// ==========================================================
