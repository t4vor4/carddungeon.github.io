export default {

    viraCartasBack: (info, $qtd) => {
        let { cartas } = info;

        // console.log(cartas);

        let qtd = $qtd;

        let opcoesAtuais = ''

        if (cartas.deck.length < $qtd) {
            qtd = cartas.deck.length;
        }

        for (qtd > cartas.emJogo.length; qtd--;) { 
            cartas.emJogo.push(cartas.deck.pop());
        }
        
        info.cartas = cartas;
        
        console.log('infoZ: ', info);
    
        return info;        

    }
}