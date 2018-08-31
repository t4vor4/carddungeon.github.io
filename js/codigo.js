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

const delayTime = 700;

var heroi = {nome:'Heroi', forca: 3, habilidade: 4, resistencia: 3, pv: 15}
var heroiGame = heroi;
heroiGame.id = 'heroi';
var vidaHeroi = 15;
var inimigoPV = [];

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
    	$('.showBts').html('<button class="bt ataqueMais">Ataque+</button>');
        $('.showBts .ataqueMais').click(function(event) {
        	if (emJogo.length == 1) {
        		$('.showBts').html('Escolha a carta para atacar');	
        	} 
        	else {
        		$('.showBts').html('Escolha uma carta para atacar');
        	}          
            $('.card .frontCard').click(function(event) {
				var inimigoSelecionado = $(this).parent().attr('data-pos');
				var posInimigo = (emJogo.length - 1) - inimigoSelecionado;
				// console.log(posInimigo);
				var esteInimigo = emJogo[posInimigo];
				// console.log(esteInimigo);
            	turnosdecombateMais(emJogo, esteInimigo, posInimigo);
			});
        });
    }
}

function exumarCartaParaDeck() {
    if (cemiterio.length > 0) {
        deck.push(cemiterio.pop());
        var estacarta = deck[deck.length-1];
        console.log(estacarta);
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
        logsTexto('O '+$defensor.nome+' se defende do golpe');
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
	var esteInimigo = $esteInimigo;
    var iniciativaInimigo = [];
    var ordem_de_ataque = [];

    //Iniciativa de vários personagens/cartas
    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
	ordem_de_ataque.push({iniac: iniciativaHeroi, nome: heroiGame.nome, pos: -1});  

    $($em_jogo).each(function(i, el) {
    	var inimigo = $em_jogo[i];
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

    // console.log('$esteInimigo');
    // console.log($esteInimigo);
    // console.log('==================');
    // console.log('$posicao');
    // console.log('==================');
	$($ordem).each(function(i, el) {
		var index = $ordem[i].pos;
        switch (index) {
            case -1:
                console.log('heroi');
                turnoJogadorMais($esteInimigo,(emJogo.length-1)-$posicao);
                break;
            default:
                console.log(emJogo[index]);
                //turnoInimigoMais(emJogo[index]);
                break;
        }

	});
}

function logsTexto($texto) {
    $('.showText').html('<span class="texto">'+$texto+'</span>');
    console.log($texto);
}

function turnoInimigoMais($inimigo) {
        inimigo = $inimigo;
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
                // else {
                //     if ($iniciativa == true) {
                //         setTimeout(function() {
                //             turnoJogador(iniciativa);
                //         },delayTime);    
                //     }
                //     else {
                //         mostraOpcoes('ataque');
                //     }
                // }
            },delayTime);
        }  
        else {
            console.log('Não houve dano no heroi');
            setTimeout(function() {
                // if ($iniciativa == true) {
                //     setTimeout(function() {
                //         turnoJogador(iniciativa);
                //     },delayTime);    
                // }
                // else {
                //     mostraOpcoes('ataque');
                // }
            },delayTime);                
        }
} 

function turnoJogadorMais($inimigo_atual,$posicao) {
        // logsTexto(inimigo.nome+' venceu a iniciativa');
        // console.log($inimigo_atual);
        // console.log('===============');
        // console.log(emJogo);
        // console.log(inimigoPV[$posicao]);

        var cartaInimigo = $('.card.pos-'+$posicao);
        //danoFeito = ataque(heroiGame, inimigo);
        console.log(inimigoPV[$posicao].pVida);
        danoFeito = ataque(heroiGame, $inimigo_atual);
        if (danoFeito > 0) {
            inimigoPV[$posicao].pVida = inimigoPV[$posicao].pVida-danoFeito;
            setTimeout(function(){
                cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
                setTimeout(function(){
                    cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
                },delayTime);
                if (inimigoPV <= 0) {
                    logsTexto(inimigo.nome+' foi derrotado.');
                    irProCemiterio(cartaInimigo); 
                }
            },delayTime);
        }  
        else {
            console.log('Não houve dano no heroi');
        }
} 

// function turnoInimigo($iniciativa) {
//         danoFeito = ataque(inimigo,heroiGame);
//         if (danoFeito > 0) {
//             vidaHeroi = vidaHeroi-danoFeito;
//             setTimeout(function(){
//                 $('.heroBar .pv .valor').text(vidaHeroi).addClass('mudandoValor');
//                 setTimeout(function(){
//                     $('.heroBar .pv .valor').removeClass('mudandoValor');
//                 },delayTime);
//                 if (vidaHeroi <= 0) {
//                     logsTexto(heroiGame.nome+' foi derrotado.');
//                     gameOver();                
//                 }
//                 else {
//                     if ($iniciativa == true) {
//                         setTimeout(function() {
//                             turnoJogador(iniciativa);
//                         },delayTime);    
//                     }
//                     else {
//                         mostraOpcoes('ataque');
//                     }
//                 }
//             },delayTime);
//         }  
//         else {
//             console.log('Não houve dano no heroi');
//             setTimeout(function() {
//                 if ($iniciativa == true) {
//                     setTimeout(function() {
//                         turnoJogador(iniciativa);
//                     },delayTime);    
//                 }
//                 else {
//                     mostraOpcoes('ataque');
//                 }
//             },delayTime);                
//         }
// } 

function turnoJogador($inimigo_atual) {
        // logsTexto(inimigo.nome+' venceu a iniciativa');
        console.log('$inimigo_atual');
        // console.log(emJogo[$inimigo_atual]);
        //danoFeito = ataque(heroiGame, inimigo);
        // if (danoFeito > 0) {
        //     inimigoPV = inimigoPV-danoFeito;
        //     setTimeout(function(){
        //         cartaInimigo.find('.pv .valor').text(inimigoPV).addClass('mudandoValor');
        //         setTimeout(function(){
        //             cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
        //         },delayTime);
        //         if (inimigoPV <= 0) {
        //             logsTexto(inimigo.nome+' foi derrotado.');
        //             irProCemiterio(cartaInimigo); 
        //         }
        //         else {
        //             if ($iniciativa != true) {
        //                 setTimeout(function() {
        //                     turnoInimigo(iniciativa);
        //                 },delayTime);    
        //             }
        //             else {
        //                 mostraOpcoes('ataque');
        //             }
        //         }
        //     },delayTime);
        // }  
        // else {
        //     console.log('Não houve dano no heroi');
        //     setTimeout(function() {
        //         if ($iniciativa != true) {
        //             setTimeout(function() {
        //                 turnoInimigo(iniciativa);
        //             },delayTime);    
        //         }
        //         else {
        //             mostraOpcoes('ataque');
        //         }
        //     },delayTime);                
        // }
} 




// ==========================================================



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

	$('.baseCarta').click(function(ev) {
    	var qtd = $qtd;
    	$('.baseCarta').hide();
    	$('.deckPlace').addClass('qtd-'+qtd);
	        
        for (qtd > emJogo.length; qtd--;) { 
        	topododeck = $('.card:nth-of-type('+deck.length+')').removeClass('nodeckcompra').addClass('pos-'+qtd).attr('data-pos',qtd);
            emJogo.push(deck.pop());
			configuraCarta(topododeck);
        }

        interacaoComCartas(emJogo);

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
	// console.log($obj);
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

function irProCemiterio($estacarta) {
    $estacarta.addClass('cemiterio');
    setTimeout(function(){
        $estacarta.remove();
    },500);

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
    // viraCartaDoDeck(deck);
    viraCartasDoDeck(deck, 4);

} 
$(document).ready(function($) {
  jogo();  
});