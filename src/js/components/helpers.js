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

    buttonTemplate (name, id) {
        return `<button class="bt ${id}" data-action='${id}'>${name}</button>`;
    }
}