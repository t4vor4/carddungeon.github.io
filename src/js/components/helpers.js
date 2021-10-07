export default  {
    shuffle_arr(a) {
        a.sort(() => Math.random() - 0.5);
        return a;
    },

    rollDice(max) {
        return 1 + Math.floor(Math.random()*max)
    }, 
    // Embaralha aleatóriamente as cartas
    embaralhaCartas(a) {
        console.log('embaralhaCartas');
        a.sort(function() { return 0.5 - Math.random() });
        $(a).each(function(i, el) {
            el.idCarta = 'carta-'+i;
        });
        return a;
    },

    // Calcula um numero de 1 a 100
    calcularJogada(variavel){
        var numeroAleatorio = Math.floor( (Math.random() * variavel) + 1);
        var resultado = numeroAleatorio;
        return resultado;
    },

    // Cria a carta na mesa
    carta($val) {
        const imgSrc = '../src/img';
        const trechoHtml = 
        `<div class="card" id="" data-pos="" data-id="">
            <div class="backCard" title="O verso da carta possui uma imagem que representa a masmorra"><span class="name">Card<br/>Dungeon</span></div>
            <div class="frontCard" >'+
                <h2 class="nome"></h2>
                <span class="imagem" title=""></span>
                <span class="cont-stats">
                    <span class="forca"><img src="${imgSrc}forca.png" alt="Força" /><span class="valor" title="Valor do atributo Força da carta"></span></span>
                    <span class="habilidade"><img src="${imgSrc}Habilidade.png" alt="Atributo Habilidade" /><span class="valor" title="Valor do atributo Habilidade da carta"></span></span>
                    <span class="resistencia"><img src="${imgSrc}Resistencia.png" alt="Atributo resistencia" /><span class="valor" title="Valor do atributo  Resistencia da carta"></span></span>
                    <span class="pv"><img src="${imgSrc}pv.png" alt="Atributo Pontos de Vida" /><span class="valor" title="Valor do atributo Pontos de vida da carta"></span></span>
                </span>
                <div class="tipo"><span class="tipo1"></span> - <span class="tipo2"></span></div>
                <p class="descricao"></p>
            </div>
        </div>`;
        return trechoHtml;
    },

    buttonTemplate (name, id) {
        return `<button class="bt ${id}" data-action='${id}'>${name}</button>`;
    }, 

    irProCemiterio($estacarta, $posicao) {
        $estacarta.addClass('cemiterio');

        setTimeout(function(){
            $estacarta.remove();
        },delayTime*0.5);

        if (deck.length < 1) {
            if (emJogo.length === 1) {
                setTimeout(function(){
                    this.muito__bem();    
                }, delayTime*0.5);
            } else {
                this.mandando_pra_cova();
            }
        } else {
            this.mandando_pra_cova();
        }
    },
    
  
    mandando_pra_cova() {
        if (emJogo.length === 1) {
            cemiterio.push(emJogo.pop());

            $('.deckPlace').attr('data-qtd','');

            setTimeout(function(){
                viraCartasDoDeck(deck, 1);
            },0);
        } else {
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
                $('.showBts').html(`${buttonTemplate('Ataque Mais', 'ataquemais')}`);
                console.log('mostraOpcoes(ataqueMais) em irProCemiterio');
            }, delayTime/2);
        }
    }
}