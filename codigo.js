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

// function carta($val) {
//     var trechoHtml = 
//     '<div class="card" id="'+$val.idCarta+'" data-id="'+$val.id+'">'+
//         '<div class="backCard"><span class="name">Card<br/>Dungeon</span></div>'+
//         '<div class="frontCard" >'+
//             '<h2 class="nome">'+$val.nome+'</h2>'+
//             //'<span class="imagem" style="background-image: url('+imgSrc+$val.imagem+');"></span>'+
//             '<span class="imagem" ></span>'+
//             '<span class="cont-stats">'+
//                 '<span class="forca"><img src="'+imgSrc+'forca.svg" alt="Força" /><span class="valor">'+$val.forca+'</span></span>'+
//                 '<span class="habilidade"><img src="'+imgSrc+'habilidade.svg" alt="Força" /><span class="valor">'+$val.habilidade+'</span></span>'+
//                 '<span class="resistencia"><img src="'+imgSrc+'armadura.svg" alt="Força" /><span class="valor">'+$val.resistencia+'</span></span>'+
//                 '<span class="pv"><img src="'+imgSrc+'resistencia.svg" alt="pv" /><span class="valor">'+$val.pv+'</span></span>'+
//             '</span>'+
//             '<div class="tipo">'+$val.tipo+' - '+$val.tipo2+'</div>'+
//             '<p class="descricao">'+$val.descricao+'</p>'+
//         '</div>'+
        
//     '</div>';
//     return trechoHtml;
// }

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
            $('.showBts').html('');

            $('.card .frontCard').click(function(event) {
				var esteInimigo = $(this).parent().attr('data-pos');
            	turnosdecombateMais(emJogo,esteInimigo);
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

// function jogadaIniciativa($inimigo) {
//     var inimigo = $inimigo;
//     var iniciativaInimigo = parseInt(inimigo.habilidade)+calcularJogada(6);
//     var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
//     // inimigo ganha
//     if ( iniciativaInimigo > iniciativaHeroi ) {
//         logsTexto(inimigo.nome+' ganhou a iniciativa');
//         return true;
//     }
//     // heroi ganha
//     else if (iniciativaInimigo <= iniciativaHeroi) {
//         logsTexto(heroiGame.nome+' ganhou a iniciativa');
//         return false;
//     } 
// }
//inimigoPV = parseInt($inimigo.resistencia)*5;

// function turnosdecombate($inimigo) {
//     var inimigo = $inimigo;
//     console.log('turnosdecombate');
//     var iniciativa = jogadaIniciativa(inimigo);    
//     combate(iniciativa,inimigo);
// }

function turnosdecombateMais($inimigo, $esteInimigo) {
	esteInimigo = $esteInimigo;
    var iniciativaInimigo = [];
    var ordem_de_ataque = [];

    //Iniciativa de vários personagens/cartas
    var iniciativaHeroi = parseInt(heroiGame.habilidade)+calcularJogada(6);
	ordem_de_ataque.push({iniac: iniciativaHeroi, nome: heroiGame.nome});  

    $($inimigo).each(function(i, el) {
    	var inimigo = $inimigo[i];
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

    console.log(ordem_de_ataque);


    //Agora eu tenho uma lista de sequencia de ataque baseado em resultado
    //das iniciativas dos personagens. 
    //Preciso fazer com que cada um lute com o heroi agora. Todos no mesmo turno.
    // :)	
    combateMais();
}

function logsTexto($texto) {
    $('.showText').html('<span class="texto">'+$texto+'</span>');
    console.log($texto);
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

// function viraCartaDoDeck($deck){
//     var topododeck = '#'+deck[deck.length-1].idCarta;
//     $(topododeck).click(function(event) {
//         emJogo.push(deck.pop());
//         $('.card[data-id="'+emJogo[0].id+'"]').removeClass('nodeckcompra').addClass('deFrente');
//         if (emJogo[0].tipo == 'Monstro') {
//             inimigoPV = emJogo[0].pv;
//             setTimeout(function(){
//                 logsTexto('Um '+emJogo[0].nome+' surge!');
//                 mostraOpcoes('ataque');
//             },delayTime*0.5);
//         }   
//         else {
//             console.log('Não era monstro');
//         }
//     });
// }

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
	console.log($obj);
	$($obj).each(function(i,el){
		// console.log(el);
		if (el.tipo == 'Monstro') {
			//Estabelece o sangue de cada inimigo
			inimigoPV.push({
				pVida: el.pv,
				nome: el.nome});			
		}
		else {
			console.log('Não monstro');
		}

		mostraOpcoes('ataqueMais');

		// $('.card.pos-'+i+' .frontCard').click(function(event) {
		// 	//ao clicar na carta
		// 	//aparece o menu de ações.
		// 	//depois de escolhida a ação, 
		// 	//o heroi e os monstros rodam 
		// 	//a iniciativa.
		// 	//depois da iniciativa
		// 	//todo mundo ataca...
		// 	mostraOpcoes('ataqueMais');
			
		// });


		
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
    viraCartasDoDeck(deck,2	);

} 
$(document).ready(function($) {
  jogo();  
});