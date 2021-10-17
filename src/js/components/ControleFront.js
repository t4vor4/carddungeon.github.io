import helpers from "./helpers";

export default {
    // Mais pra frente deve receber o objeto principal

    configuraHeroi(info) {
        const barra = $('.heroBar');
        barra.find('.forca .valor').html(info.heroi.forca);
        barra.find('.habilidade .valor').html(info.heroi.habilidade);
        barra.find('.resistencia .valor').html(info.heroi.resistencia);
        barra.find('.pv .valor').html(info.heroi.pv);
        return;
    },

    poeAsCartas(info) {
        const carta = this.carta;

        $(info.cartas.deck).each(function(i, el) {
            $('.deckPlace').append(carta(info));
            $('.card').addClass('entranojogo').addClass('nodeckcompra');
        });
        setTimeout(function(){
            $(info.cartas.deck).each(function(i, el) {
                var tempoCartaNaMesa = i*((info.delayTime/info.cartas.deck.length)/5);
                setTimeout(function(){
                    $(`.card:nth-of-type(${(i+1)})`)
                    .css('top',i*-1+'px')
                    .css('left',i*2+'px')
                    .removeClass('entranojogo');
                    if (i === info.cartas.deck.length-1) {
                        setTimeout(function(){
                            console.log('Clique em uma carta para iniciar.');
                        },500);                    
                    }
                }, tempoCartaNaMesa);
            });        
        },500);
    },

    carta(info) {
        const imgType = {
            forca: `${info.imgSrc}/forca.png`,
            habilidade: `${info.imgSrc}/Habilidade.png`,
            resistencia: `${info.imgSrc}/Resistencia.png`,
            pv: `${info.imgSrc}/pv.png`
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
    },

    viraCartasFront(info) {
        const configuraCarta = this.configuraCarta;

        const {cartas} = info;

        let qtd = cartas.emJogo.length;
        
        let topododeck = $(`.card:nth-of-type(${cartas.deck.length})`);

        $('.showText').text('');

        $('.baseCarta').hide();

        $('.deckPlace').data('qtd','qtd-'+qtd);

        for (qtd > cartas.emJogo.length; qtd--;) { 
            topododeck = $('.card:nth-of-type('+cartas.deck.length+')').removeClass('nodeckcompra').addClass('pos-'+qtd).data('pos',qtd);

            configuraCarta(topododeck, info);
            
        }
    },

    
    removeDuplos(array) {
       return array.filter( ( elem, index, array ) => {
           return array.indexOf( elem ) === index;
       });
    },

    mapTipos1(arr) {
        const tipos = arr.map((el) => el.tipo);
        return tipos;
    },

    calculaOpcoes(info) {
        const removeDuplos =  this.removeDuplos;
        const mapTipos1 = this.mapTipos1;

        let {emJogo} = info.cartas;

        return removeDuplos(mapTipos1(emJogo));
    },
    
    configuraCarta($carta, info) {
        var front = $carta.find('.frontCard');
        var este = info.cartas.emJogo[info.cartas.emJogo.length-1];
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
    },

    inimigoDefende(info) {
        const {inimigos, delayTime} = info;

        const $text = `${inimigos.esteInimigo.nome} defende o golpe.`
        this.displayTextAutoErase($text, delayTime);

        setTimeout(() => {
            this.mostraOpcoes('ataqueMais');
        }, delayTime*2);
    },

    displayTextAutoErase (string, delayTime) {
        $('.showText').text(string);
        setTimeout(function () {
            $('.showText').text('');
        }, delayTime * 3);
    },
    
    interacaoComCartas(info) {
        const inimigos = info.inimigos;

        const cartas = info.cartas;

        const opcoesAtuais = info.opcoesAtuais;

        inimigos.inimigoPV = [];
        
        $(info.cartas.emJogo).each(function(i,el){
            console.log('el: ', el)
        
            if (el.tipo === 'Monstro') {
                info.inimigos.inimigoPV.push({
                    pVida: el.pv,
                    nome: el.nome,
                    pos: i
                });

                info.opcoesAtuais.push('ataqueMais');
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
        return info;
    },

    filtraOpcoes(info) {
        const opcoes = this.calculaOpcoes(info);

        let novasOpcoes = [];
        
        for (let i = 0; i < opcoes.length; i++) {            
            if (opcoes[i] === 'Monstro') {
                novasOpcoes.push('ataqueMais');
            }
        }

        return novasOpcoes;
    },

    mostraOpcoes(info) {
        const buttonTemplate = helpers.buttonTemplate;

        const opcoes = typeof(info) !== 'string' ? this.filtraOpcoes(info) : info;

        let $html = '';

        for (let i = 0; i < opcoes.length; i++) {
            const $turno = opcoes[i];
            
            if ($turno === 'limpa') {
                $html = '';
                break;
            }

            if ($turno === 'ataque') {
                $html += `${buttonTemplate('Ataque', 'ataque')} ${buttonTemplate('Exumar', 'exumar')}`;
            }

            if ($turno === 'ataqueMais') {        
                $html += `${buttonTemplate('Ataque Mais', 'ataquemais')}`;
                
            }
            else if ($turno === 'continuar') {
                $html += `${buttonTemplate('Continuar', 'continuar')}`;
            }
        }

        console.log('$html: ',$html)

        $('.showBts').html($html);
    },
 
    danoEmInimigo(info, dano) {
        let {inimigos, delayTime} = info;

        let cartaInimigo = $('.card.pos-0');

        cartaInimigo.find('.pv .valor').text(inimigos.esteInimigo.pv).addClass('mudandoValor');

        setTimeout(function(){
            cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
        },delayTime/3);
    },

    retiraDoTopoDaMesa() {
        const $estacarta = $('.card.pos-0');

        $estacarta.addClass('cemiterio');

        setTimeout(function(){

            $estacarta.remove();

        }, 1000);
    },

    escolhaCarta() {
        $('.showText').text('Clique na carta para continuar');
        $('.baseCarta').show();
    },

    fimDeJogo() {
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
    }
}
