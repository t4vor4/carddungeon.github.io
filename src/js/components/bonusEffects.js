import helpers from "./helpers";

export default class bonusEffects {
    constructor($atributo, $bonus) {
        if ($bonus === 1) {
            $('.showBts').html(`${helpers.buttonTemplate('Testar Habilidade', 'testar1')}`);
        } else {
            $('.showBts').html(`${helpers.buttonTemplate('Testar Habilidade', 'testar')}`);
        }
    }

    testar(elemento) {
        elemento.remove();

        setTimeout(function(){
            var jogada = helpers.calcularJogada(6);
            console.log('jogada  ='+jogada);

            if (jogada > window.heroiGame.habilidade) {
                $('.deckPlace').addClass('atingido');
                this.atualizaAtributo($atributo, classe, $bonus);
                // logsTexto(textoDescritivo($atributo, $bonus));
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
    }
       
//         $('document').on('click', '[data-action="testar"]', () => {
//             $(this).remove();
    
//             setTimeout(function(){
//                 var jogada = calcularJogada(6);
//                 console.log('jogada  ='+jogada);
//                 if (jogada > heroiGame.habilidade) {
//                     $('.deckPlace').addClass('atingido');
//                     bonus.atualizaAtributo($atributo, classe, $bonus);
//                     logsTexto(textoDescritivo($atributo, $bonus));
//                     setTimeout(function(){
//                         $('.deckPlace').removeClass('atingido');
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//                 else {
//                     logsTexto('O heroi passou pela armadilha');   
//                     setTimeout(function(){
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//             },0);
//         });
    
//         $('document').on('click', '[data-action="testar1"]', () => {
//             $(this).remove();
    
//             setTimeout(function(){
//                 var jogada = calcularJogada(6);
//                 jogada = 1;
//                 if (jogada <= heroiGame.habilidade) {
//                     //conseguiu a benção
//                     $('.deckPlace').addClass('bencao');
//                     bonus.atualizaAtributo($atributo, classe, $bonus);
//                     logsTexto(textoDescritivo($atributo, $bonus));
//                     setTimeout(function(){
//                         $('.deckPlace').removeClass('bencao');
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//                 else {
//                     //conseguiu a benção
//                     logsTexto('O heroi não conseguiu...'); 
//                     setTimeout(function(){
//                         irProCemiterio($('.card.pos-0'), 0);
//                     },delayTime/3);
//                 }
//             },0);
//         });
        
//     }


    

//     //textoDescritivo($atributo, $bonus);
    static textoDescritivo($atributo, $bonus) {
        if ($atributo === 'forca') {
            return $bonus > 0 ? 'Heroi sente suas forças revigoradas' : 'Heroi sente suas forças se esvaindo';
        }

        if ($atributo === 'habilidade') {
            return $bonus > 0 ? 'Heroi sente suas habilidades aumentando' : 'Heroi sente suas habilidades diminuindo';
        }

        if ($atributo === 'resistencia') {
            return $bonus > 0 ? 'Heroi sente sua resistencia crescendo' : 'Heroi sente sua resistencia diminuindo';
        }

        if ($atributo === 'pv') {
            return $bonus > 0 ? 'Heroi sente sua vida revigorada' : 'Heroi sente suas feridas';
        }
    }

    static atualizaAtributo($atributo, $classe, $bonus) {
        if ($atributo === 'pv') {
            let dano = calcularJogada(6);
            if ($bonus != 1) {
                dano = dano*-1;
            }
            heroiGame[$atributo] = heroiGame[$atributo]+dano;
        } else {
            heroiGame[$atributo] = heroiGame[$atributo]+$bonus;
        }
        

        $('.heroBar .barR .'+$atributo+' .valor').text(heroiGame[$atributo]).addClass($classe);
        setTimeout(function(){
            $('.heroBar .barR .'+$atributo+' .valor').removeClass($classe);
        },delayTime/3);    
    }
    

    
// }
}