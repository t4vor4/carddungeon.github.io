
export default class ControlFront {
    // Mais pra frente deve receber o objeto principal

    constructor () {}

    poeAsCartas(info) {
        const carta = this.carta;

        $(info.deck).each(function(i, el) {
            $('.deckPlace').append(carta());
            $('.card').addClass('entranojogo').addClass('nodeckcompra');
        });
        setTimeout(function(){
            $(info.deck).each(function(i, el) {
                var tempo_carta_na_mesa = i*((info.delayTime/info.deck.length)/5);
                setTimeout(function(){
                    $('.card:nth-of-type('+(i+1)+')')
                    .css('top',i*-1+'px')
                    .css('left',i*2+'px')
                    .removeClass('entranojogo');
                    if (i === info.deck.length-1) {
                        setTimeout(function(){
                            console.log('Clique em uma carta para iniciar.');
                        },500);                    
                    }
                }, tempo_carta_na_mesa);
            });        
        },500);
    }

    carta($val) {
        const imgSrc = '../src/img';

        const imgType = {
            forca: `${imgSrc}/forca.png`,
            habilidade: `${imgSrc}/Habilidade.png`,
            resistencia: `${imgSrc}/Resistencia.png`,
            pv: `${imgSrc}/pv.png`
        }

        return `<div class="card" id="" data-pos="" data-id="">
            <div class="backCard" title="O verso da carta possui uma imagem que representa a masmorra"><span class="name">Card<br/>Dungeon</span></div>
            <div class="frontCard" >
                <h2 class="nome"></h2>
                <span class="imagem" title=""></span>
                <span class="cont-stats">
                    <span class="forca"><img src="${imgType.forca}" alt="Força" /><span class="valor" title="Valor do atributo Força da carta"></span></span>
                    <span class="habilidade"><img src="${imgType.habilidade}" alt="Atributo Habilidade" /><span class="valor" title="Valor do atributo Habilidade da carta"></span></span>
                    <span class="resistencia"><img src="${imgType.resistencia}" alt="Atributo resistencia" /><span class="valor" title="Valor do atributo  Resistencia da carta"></span></span>
                    <span class="pv"><img src="${imgType.pv}" alt="Atributo Pontos de Vida" /><span class="valor" title="Valor do atributo Pontos de vida da carta"></span></span>
                </span>
                <div class="tipo"><span class="tipo1"></span> - <span class="tipo2"></span></div>
                <p class="descricao"></p>
            </div>
        </div>`;
    }
    
    viraCartasDoDeck(info, $qtd){
        var topododeck = $('.card:nth-of-type('+info.deck.length+')');
        var count = 0;

        var configuraCarta = this.configuraCarta;
        const interacaoComCartas = this.interacaoComCartas;

        $('.baseCarta').show().click(function(ev) {
            $('.showText').text('');
            if (count === 0){
                var qtd = $qtd;

                if (info.deck.length < $qtd) {
                    qtd = info.deck.length;
                }

                $('.baseCarta').hide();

                setTimeout(function(){
                    $('.deckPlace').attr('data-qtd','qtd-'+qtd);

                    for (qtd > info.emJogo.length; qtd--;) { 
                        topododeck = $('.card:nth-of-type('+info.deck.length+')').removeClass('nodeckcompra').addClass('pos-'+qtd).attr('data-pos',qtd);

                        info.emJogo.push(info.deck.pop());

                        console.log('emJogo', info.emJogo[0].tipo)

                        configuraCarta(topododeck, info);

                    }
                    interacaoComCartas(info);
                },0)
            }
            count++;
        });	
    }
    
    configuraCarta($carta, info) {
        var front = $carta.find('.frontCard');
        var este = info.emJogo[info.emJogo.length-1];
        console.log(este.tipo);
        front.find('.nome').text(este.nome);
        front.find('.nome').text(este.nome);
        front.find('.tipo .tipo1').text(este.tipo);
        front.find('.tipo .tipo2').text(este.tipo2);
        front.find('.descricao').text(este.descricao);

        if (este.tipo === 'buff') {
            front.find('.imagem').css('background-image','url(./img/'+este.imagem+')').addClass('grande').attr('title',este.alt);
            front.find('.cont-stats').remove();
        }

        if (este.tipo === 'debuff') {
            front.find('.imagem').css('background-image','url(./img/'+este.imagem+')').addClass('grande').attr('title',este.alt);
                front.find('.cont-stats').remove();
        }

        if (este.tipo === 'Monstro') {
            front.find('.imagem').attr('title',este.alt).css('background-image','url(./img/'+este.imagem+')');
            front.find('.cont-stats .forca .valor').text(este.forca);
            front.find('.cont-stats .habilidade .valor').text(este.habilidade);
            front.find('.cont-stats .resistencia .valor').text(este.resistencia);
            front.find('.cont-stats .pv .valor').text(este.pv);
        }

        $carta.addClass('deFrente');
    }
    
    interacaoComCartas(info) {
        info.inimigoPV = [];
        $(info.emJogo).each(function(i,el){
            console.log('el: ', el)
            if (el.tipo === 'Monstro') {
                info.inimigoPV.push({
                    pVida: el.pv,
                    nome: el.nome,
                    pos: i
                });
                // poderesDeMonstro(el);
                // mostraOpcoes('ataqueMais');
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

}
