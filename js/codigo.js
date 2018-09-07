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
        nome:'Esqueleto', //filler
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 1, 
        habilidade: 0, 
        resistencia: 0, 
        pv: 1,
        descricao:'Um morto vivo animado por magia', 
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
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'zumbi-agressivo.png'
    },
    {   id: 0003,
        nome:'Necromante Acolito', //Caster
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'jovem-necromante.png'
    },
    {   id: 0004,
        nome:'Cavaleiro da Morte',  //Defender
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'cavaleiro-da-morte.png'
    },
    {   id: 0005,
        nome:'Necromante Ancião', //Buffer
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 2,
        descricao:'Quando Necromante entra em jogo, ele invoca as 2 últimas cartas tipo morto-vivo do zumbis que foram para o cemiterio.', 
        imagem:'velho-necromante.png',
    },
    {   id: 0006,
        nome:'Debuffer', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'esqueleto.png'
    },
    {   id: 0007,
        nome:'Boss', 
        tipo: 'Monstro',
        tipo2: 'Morto-vivo',
        forca: 2, 
        habilidade: 1, 
        resistencia: 1,
        pv: 1,
        descricao:'Humanóides de pele verde, peludos e malvados', 
        imagem:'esqueleto.png'
    },
]

const delayTime = 1000;

var heroi = {nome:'Heroi', forca: 3, habilidade: 4, resistencia: 3, pv: 15}
var heroiGame = heroi;
heroiGame.id = 'heroi';
var vidaHeroi = 15;
var inimigoPV = [];
var esteInimigo = {};
var estaPosicao = 0;

var deck = embaralhaCartas(cartasJogo);
var cemiterio = [];
var emJogo = [];

var cartaAtual;
var topodoCemiterioLocais;
var topododeck = 0;

var cemiterioPos;
var cardzindex;

var ordem_de_ataque = [];


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
        '<div class="backCard"><span class="name">Card<br/>Dungeon</span></div>'+
        '<div class="frontCard" >'+
            '<h2 class="nome"></h2>'+
            //'<span class="imagem" style="background-image: url('+imgSrc+$val.imagem+');"></span>'+
            '<span class="imagem" ></span>'+
            '<span class="cont-stats">'+
                '<span class="forca"><img src="'+imgSrc+'forca.png" alt="Força" /><span class="valor"></span></span>'+
                '<span class="habilidade"><img src="'+imgSrc+'habilidade.png" alt="Força" /><span class="valor"></span></span>'+
                '<span class="resistencia"><img src="'+imgSrc+'resistencia.png" alt="Força" /><span class="valor"></span></span>'+
                '<span class="pv"><img src="'+imgSrc+'pv.png" alt="pv" /><span class="valor"></span></span>'+
            '</span>'+
            '<div class="tipo"><span class="tipo1"></span> - <span class="tipo2"></span></div>'+
            '<p class="descricao"></p>'+
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

function verificaTopodoDeck($deck) {
    var esteId = $deck.length;
    return $('#carta-'+esteId);
}

function verificaEmJogo() {
    return $('.card[data-id="'+emJogo[0].id+'"]');
}

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
    else if ($turno == 'ataqueMais') {
        // if (emJogo.length > 0) {
            $('.showBts').html('<button class="bt ataqueMais">Ataque+</button>');    
        // }
        
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
                        // console.log('esta posicao = '+estaPosicao);
                        esteInimigo = {};
                        esteInimigo = emJogo[posInimigo];
                        turnosdecombateMais(emJogo, esteInimigo, posInimigo);
                    });
                    break;
            }
        });
    }
}

function fakeCards($qtd) {
    // console.log($qtd);
    for (var i = $qtd - 1; i >= 0; i--) {
        $('.baseCarta').after(
            '<button class="fkCards fk-num-'+i+'" data-pos="'+i+'"></button>'
        );
    }
}

function exumarCartaParaDeck() {
    if (cemiterio.length > 0) {
        deck.push(cemiterio.pop());
        var estacarta = deck[deck.length-1];
        // console.log(estacarta);
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
	// var esteInimigo = $esteInimigo;
    var iniciativaInimigo = [];    

    //Iniciativa de vários personagens/cartas
    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
	ordem_de_ataque.push({iniac: iniciativaHeroi, nome: heroiGame.nome, pos: -1});  

    $(emJogo).each(function(i, el) {
    	var inimigo = emJogo[i];
    	iniciativaInimigo = parseInt(inimigo.habilidade)+calcularJogada(6);
    	ordem_de_ataque.push({iniac: iniciativaInimigo, nome: inimigo.nome, pos: i});    
    });

    //Ordena as iniciativas de modo crescente
    function SortByName(a, b){
	  var aIniac = a.iniac;
	  var bIniac = b.iniac; 
	  return ((aIniac < bIniac) ? -1 : ((aIniac > bIniac) ? 1 : 0));
	}
	ordem_de_ataque.sort(SortByName);

    combateMais(ordem_de_ataque, $esteInimigo, $posicao_inimigo);
}

function combateMais($ordem, $esteInimigo, $posicao) {
    // console.log('==================');
    // console.log('$esteInimigo');
    // console.log($esteInimigo);
    // console.log('==================');
    // console.log('$posicao');
    // console.log('==================');
	$($ordem).each(function(i, el) {
		var index = $ordem[i].pos;
        var inimigo = $esteInimigo;
        var posicao = (emJogo.length-1)-$posicao;
        // ordem_de_ataque.shift();
        switch (index) {
            case -1:
                // console.log('heroi');
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
        // danoFeito = ataque(inimigo,heroiGame);
        // danoFeito = 0;


        switch (inimigoPV[$posicao].pVida > 0) {
            case true:
                danoFeito = ataque(inimigo,heroiGame);
                switch (danoFeito > 0) {
                    case true:
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
                        },delayTime);
                        break;
                    default:
                        setTimeout(function() {
                            if (ordem_de_ataque.length == 0 && inimigoPV[$posicao].pVida > 0) {
                                mostraOpcoes('ataqueMais');
                            }
                        },delayTime);
                        break;
                }
                break;
            default:
                console.log('O '+inimigoPV[$posicao].nome+' esta morto');
                break;
        }
        
} 

function turnoJogadorMais($inimigo_atual, $posicao) {
    // var cartaInimigo = $('.card.pos-'+$posicao);
    var invertePos = (emJogo.length - 1) - estaPosicao;
    var cartaInimigo = $('.card.pos-'+ invertePos);
    // console.log('==================');
    // console.log($inimigo_atual);
    // console.log('==================');

    danoFeito = ataque(heroiGame, $inimigo_atual);
    // danoFeito = 100;



    // if (danoFeito > 0) {
    //     inimigoPV[$posicao].pVida = inimigoPV[$posicao].pVida-danoFeito;
    //     setTimeout(function(){
    //         cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
    //         setTimeout(function(){
    //             cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
    //         },delayTime);
    //         if (inimigoPV[$posicao].pVida <= 0) {
    //             logsTexto($inimigo_atual.nome+' foi derrotado.');
    //             irProCemiterio(cartaInimigo, $posicao); 
    //         }
    //         else if (ordem_de_ataque.length == 0 && emJogo.length > 1) {
    //             // console.log('mostraOpcoes(ataqueMais); turnoJogadorMais');
    //             mostraOpcoes('ataqueMais');
    //         }
    //     },delayTime);
    // }  
    // else {
    //     console.log('Não houve dano no heroi');
    // }




    switch (danoFeito > 0) {
        case true:
            inimigoPV[$posicao].pVida = inimigoPV[$posicao].pVida-danoFeito;
            setTimeout(function(){
                cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
                setTimeout(function(){
                    cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
                },delayTime);
                switch (inimigoPV[$posicao].pVida <= 0) {
                    case true:
                        logsTexto($inimigo_atual.nome+' foi derrotado.');
                        irProCemiterio(cartaInimigo, $posicao);
                        break;
                    default:
                        mostraOpcoes('ataqueMais');
                        break;
                }
            },delayTime);
            break;
        default:
            console.log('Não houve dano no heroi');
            mostraOpcoes('ataqueMais');
            break;
    }
} 

function poeAsCartas($deck) {
    var i = 0;
    $($deck).each(function(i, el) {
        $('.deckPlace').append(carta());
        $('.card').addClass('entranojogo').addClass('nodeckcompra');
    });
    setTimeout(function(){
        $($deck).each(function(i, el) {
           setTimeout(function(){
                // $('#carta-'+(i+1))
                $('.card:nth-of-type('+(i+1)+')')
                .css('top',i*-1+'px')
                .css('left',i*2+'px')
                .removeClass('entranojogo');
            },i*($deck.length*10));
        });   
    },500);

    // $('head').append('<style>.card.deFrente.ativo{z-index: '+deck.length+'}</style>');
}

function viraCartasDoDeck($deck,$qtd){
    var topododeck = $('.card:nth-of-type('+deck.length+')');
    var count = 0;
	$('.baseCarta').show().click(function(ev) {
        switch (count) {
            case 0:
                console.log(ev);
                var qtd = $qtd;
                if (deck.length < $qtd) {
                    qtd = deck.length;
                }
                $('.baseCarta').hide();

                console.log('qtd em viraCartasDoDeck');
                console.log(qtd);
                
                setTimeout(function(){
                   // $('.deckPlace').addClass('qtd-'+qtd);
                   $('.deckPlace').attr('data-qtd','qtd-'+qtd);
                    // console.log('emJogo.length no Vira Cartas');
                    // console.log(emJogo.length);

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

    function configuraCarta($carta) {
    	var front = $carta.find('.frontCard');
    	var este = emJogo[emJogo.length-1]
    	front.find('.nome').text(este.nome);
    	front.find('.nome').text(este.nome);
    	front.find('.imagem').css('background-image','url(./img/'+este.imagem+')');
    	front.find('.cont-stats .forca .valor').text(este.forca);
    	front.find('.cont-stats .habilidade .valor').text(este.habilidade);
    	front.find('.cont-stats .resistencia .valor').text(este.resistencia);
    	front.find('.cont-stats .pv .valor').text(este.pv);    	
    	front.find('.tipo .tipo1').text(este.tipo);
    	front.find('.tipo .tipo2').text(este.tipo2);
    	front.find('.descricao').text(este.descricao);
    	$carta.addClass('deFrente');
    }
}

function interacaoComCartas($obj) {
    inimigoPV = [];
	console.log('$obj em interacaoComCartas');
    console.log($obj);
	$($obj).each(function(i,el){
		// console.log(el);
		if (el.tipo == 'Monstro') {
			//Estabelece o sangue de cada inimigo
			inimigoPV.push({
				pVida: el.pv,
				nome: el.nome,
                pos: i
            });			
		}
		else {
			console.log('Não monstro');
		}

		mostraOpcoes('ataqueMais');
		
	});
	// console.log(inimigoPV);
}

function irProCemiterio($estacarta, $posicao) {
    $estacarta.addClass('cemiterio');
    setTimeout(function(){
        $estacarta.remove();
    },delayTime/2);

    switch (deck.length < 1) {
        case true:
            setTimeout(function(){
                gameOver();    
            }, delayTime);
            break;
        default:
            console.log('emJogo.length no swith delicia');
            console.log(emJogo.length);
            switch (emJogo.length) {
                case 1:
                    cemiterio.push(emJogo.pop());
                    $('.deckPlace').attr('data-qtd','');
                    setTimeout(function(){
                        // console.log('emJogo.length no swith delicia case 1');
                        // console.log(emJogo.length);
                        viraCartasDoDeck(deck, 1);
                    },0);
                    break;
                default:
                    console.log('emJogo.length no swith delicia case default');
                    console.log(emJogo.length);
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

    // console.log('Teste amigo');

    // console.log('deck');
    // console.log(deck);
    // console.log('cemiterio');
    // console.log(cemiterio);
    // console.log('emJogo');
    // console.log(emJogo);

    
        
   
   


}


function jogo() {

    configuraHeroi();
    poeAsCartas(deck);
    // viraCartaDoDeck(deck);
    viraCartasDoDeck(deck, 4);

} 
$(document).ready(function($) {
  jogo();  
});