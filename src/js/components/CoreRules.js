import helpers from "./helpers";

import controleFront from "./controleFront";

export default {

    viraCartasBack: (info, $qtd) => {
        let { cartas } = info;

        let qtd = $qtd;

        if (cartas.deck.length < $qtd) {
            qtd = cartas.deck.length;
        }

        for (qtd > cartas.emJogo.length; qtd--;) { 
            cartas.emJogo.push(cartas.deck.pop());
        }
        
        info.cartas = cartas;
    
        return info;        

    }, 
    ataqueComUmInimigo(info) {
        let {cartas, inimigos} = info;
        
        inimigos.esteInimigo = {};
        inimigos.esteInimigo = cartas.emJogo[0];

        info.inimigos = inimigos;

        return info;

        // this.inicioDoTurnoDeCombate(info, 0);
        
        // return info;

    },

    debounce(func, timeout = 300){
        let timer;
        return (...args) => {
            if (!timer) {
                func.apply(this, args);
              }
              clearTimeout(timer);
              timer = setTimeout(() => {
                timer = undefined;
              }, timeout);
        };
    },

    ataqueComVariosInimigos(info) {
        console.log('Preciso montar a luta com mais de 1 inimigo');
        return info;
        // let {cartas, inimigos} = info;

        // let estaPosicao = 0;
        
        // $('.showBts').html('Escolha uma carta para atacar');
        
        // fakeCards(emJogo.length);
        
        // $('.fkCards').click(function(event) {
        //     var inimigoSelecionado = $(this).attr('data-pos');
        //     $('.fkCards').remove();
        //     var posInimigo = (emJogo.length - 1) - inimigoSelecionado;
        //     estaPosicao = posInimigo;
        //     esteInimigo = {};
        //     esteInimigo = emJogo[posInimigo];
        //     turnosdecombateMais(emJogo, esteInimigo, posInimigo);
        // });
    },

    novoCombate(info) {
        const ataque = this.ataque;

        let {heroi, inimigos, cartas} = info;

        let dano;

        const jogadaHeroi = 10//heroi.habilidade + helpers.rollDice(6);

        const jogadaInimigo = 1//inimigos.esteInimigo.habilidade + helpers.rollDice(6);

        if ( jogadaHeroi >= jogadaInimigo ) {
            // O heroi ataca o monstro
            dano = ataque(heroi, inimigos.esteInimigo);

            if (!dano) {
                inimigos.esteInimigo.pv = this.danoMortal(inimigos.esteInimigo.pv, dano);
            } else {
                controleFront.inimigoDefende(info);
            }

            info.inimigos = inimigos;

            if (inimigos.esteInimigo.pv) {
                controleFront.danoEmInimigo(info, dano);

                controleFront.mostraOpcoes(info);

            } else {
                cartas.cemiterio.push(cartas.emJogo.pop());
                
                info.cartas = cartas;
                
                controleFront.retiraDoTopoDaMesa();

                controleFront.escolhaCarta();
            }

        } else {
            // O mostro ataca o heroi
            dano = ataque(inimigos.esteInimigo, heroi);

            heroi.pv = this.danoMortal(heroi.pv, dano);
            
            info.heroi = heroi;
        }

        return info;
    },

    jogadaDeIniciativa(info) {
        var {heroi, cartas, apoio} = info;
    
        const iniciativaHeroi = heroi.habilidade + helpers.calcularJogada(6);

        let ordemTemp = [];

        
        for (let i = 0; i < cartas.emJogo.length; i++) {
            const inimigo = cartas.emJogo[i];
            
            const iniciativaInimigo = inimigo.habilidade + helpers.calcularJogada(6);
            
            ordemTemp[i] = {iniac: iniciativaInimigo, nome: inimigo.nome, pos: i};    
        }
        
            ordemTemp[ordemTemp.length] = {iniac: iniciativaHeroi, nome: heroi.nome, pos: -1};
            
            ordemTemp.sort(helpers.sortByName);

            info.apoio.ordem_de_ataque = ordemTemp;

            return info;
    },

    combateMais(info) {
        // $ordem, $esteInimigo, $posicao

        let {apoio, cartas, inimigos, estaPosicao} = info;

        console.log('apoio.ordem_de_ataque: ', apoio.ordem_de_ataque);
        
        apoio.ordem_de_ataque.forEach(inimigo => {
            console.log('inimigo: ', inimigo)
            const index = inimigo.pos;

            console.log('index: ', index)

            const posicao = ( cartas.emJogo.length - 1 ) - estaPosicao;

            // index = -1;
    
            if (index === -1) {
                apoio.atacanteAtual = 'jogador';
            } else {
                apoio.atacanteAtual = 'inimigo';
                estaPosicao = posicao;
                // this.turnoJogadorMais(inimigos.esteInimigo, estaPosicao);
                // this.turnoInimigoMais(cartas.emJogo[index], posicao);
            }

            apoio.ordem_de_ataque.shift();
            
        });
        
        info.apoio = apoio;
        info.estaPosicao = estaPosicao;

        return info;
    }, 

    turnoJogadorMais(info, $posicao) {

        let {inimigos, cartas, estaPosicao, heroi} = info;

        // const invertePos = (cartas.emJogo.length - 1) - estaPosicao;

        // const cartaInimigo = $('.card.pos-'+ invertePos);

        const danoFeito = ataque(heroi, inimigos.esteInimigo);

        if (danoFeito > 0) {

            inimigos.inimigoPV[$posicao].pVida = inimigos.inimigoPV[$posicao].pVida-danoFeito;

            // cartaInimigo.find('.pv .valor').text(inimigoPV[$posicao].pVida).addClass('mudandoValor');
            
            // setTimeout(function(){
            // cartaInimigo.find('.pv .valor').removeClass('mudandoValor');
            // },delayTime/3);

            if(inimigoPV[$posicao].pVida <= 0) {
                // logsTexto($inimigo_atual.nome+' foi derrotado.');
                // irProCemiterio(cartaInimigo, $posicao);
                console.log('Manda pro cemitério');
            } else {
                // setTimeout(function(){
                    // mostraOpcoes('ataqueMais');
                // },delayTime);    
                console.log('Tem mais vida, Mostra ataque mais...');
            }
            
        }
    },

    turnoInimigoMais(a, b) {
        console.log('turnoInimigoMais', a, b)
    }, 

    ataque($atacante, $defensor) {
        const atk = $atacante.forca;
        const def = $defensor.resistencia;

        const forcaAtaque = atk + helpers.calcularJogada(6);
        
        const forcaDefesa = def + helpers.calcularJogada(6);
    
        if (forcaDefesa >= forcaAtaque) {
            return 0;
        }
        else {
            return forcaAtaque-forcaDefesa;
        }    
    },

    danoMortal(pv, dano) {
        pv -= dano;

        return pv >= 0 ? pv : 0;
    }

}