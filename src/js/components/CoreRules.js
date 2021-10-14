import helpers from "./helpers";

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

    jogadaDeIniciativa(info) {
        let {heroi, cartas, apoio} = info;
    
        const iniciativaHeroi = heroi.habilidade + helpers.calcularJogada(6);

        apoio.ordem_de_ataque.push({iniac: iniciativaHeroi, nome: heroi.nome, pos: -1});  
        
        for (let i = 0; i < cartas.emJogo.length; i++) {
            const inimigo = cartas.emJogo[i];

            const iniciativaInimigo = inimigo.habilidade + helpers.calcularJogada(6);

            apoio.ordem_de_ataque.push({iniac: iniciativaInimigo, nome: inimigo.nome, pos: i});    
        }
    
        info.apoio.ordem_de_ataque = apoio.ordem_de_ataque.sort(helpers.sortByName);

        return info;
    
        // this.combateMais(info);
    },

    combateMais(info) {
        // $ordem, $esteInimigo, $posicao
        let {apoio, cartas, inimigos, estaPosicao} = info;
        
        apoio.ordem_de_ataque.forEach(inimigo => {
            var index = inimigo.pos;
            var posicao = ( cartas.emJogo.length - 1 ) - estaPosicao;
    
            // setTimeout(function(){
                if (index === -1) {
                    this.turnoJogadorMais(inimigos.esteInimigo, estaPosicao);
                } else {
                    this.turnoInimigoMais(cartas.emJogo[index], posicao);
                }
    
                apoio.ordem_de_ataque.shift();
            // }, info.delayTime * i);
            
        });
        
        info.apoio = apoio;

        return info;
    }, 
    turnoJogadorMais(a, b) {
        console.log('turnoJogadorMais', a, b);
    },
    turnoInimigoMais(a, b) {
        console.log('turnoInimigoMais', a, b)
    }

}