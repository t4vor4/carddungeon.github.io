/**
 * Função de inicio do jogo.
 */
export default class GamePrincipal {
    constructor(cards) {
        this.game = {};
        this.chars = {};

        // card deck
        this.game.gameDeck = this.embaralhaDeck(cards.items);
        this.game.inGameCards = [];
        this.game.discardPile = [];

        // Hero stats and equip
        this.chars.baseHero = cards.herois[0];
        this.chars.hero = this.chars.baseHero;
        this.chars.hero.bag = [];
        this.chars.hero.equipedItems = [];

        // Enemy
        this.chars.enemy = {};
    }

    /**
     * Função de embaralhar as cartas de um deck(array)
     * @param {*} array 
     * @returns 
     */
    embaralhaDeck(array) {
        return array.sort(() => Math.random() - 0.5)
    }
    
    /**
     * Função para mover cartas de um deck(array) para outro
     * @param {*} de 
     * @param {*} para 
     */
    moverCartaEntreDecks(de, para) {
        de.length && para.push(de.pop());
    }
    
    /**
     * Função que retira uma carta do array Deck de Compra e coloca no array Em jogo
     */
    viraCarta() {
        this.moverCartaEntreDecks(this.game.gameDeck, this.game.inGameCards);
    }

    /**
     * Função que retira uma carta do array Em jogo e coloca no array Deck de Compra
     */
    devolveCarta() {
        this.moverCartaEntreDecks(this.game.inGameCards, this.game.gameDeck);
    }

    /**
     * Função que retira uma carta do array Em jogo e coloca no array Cemiterio
     */
    descartaCarta() {
        this.moverCartaEntreDecks(this.game.inGameCards, this.game.discardPile);
    }

    /**
     * Função que retira uma carta do array Cemiterio e coloca devolta no array Em Jogo
     */
    cartaDoCemiterioParaEmJogo() {
        this.moverCartaEntreDecks(this.game.discardPile, this.game.inGameCards);
    }

    /**
     * Função que retira uma carta do array Cemiterio e coloca devolta no array Deck de Compra
     */
    cartaDoCemiterioParaDeck() {
        this.moverCartaEntreDecks(this.game.discardPile, this.game.gameDeck);
    }

    /**
     * Função que retira uma carta do array Inimigo e coloca devolta no array Em Jogo
     */
    imigoEntraEmJogo() {
        this.chars.enemy = this.game.inGameCards[0];
    }

    /**
     * Função que retira uma carta do array Deck de Compra e coloca devolta no array de Bolsa de Itens
     */
    pegaItem() {
        this.chars.hero.bag.length < 4 && this.moverCartaEntreDecks(this.game.inGameCards, this.chars.hero.bag)
    }

    /**
     * Função que retira item da bolsa de itens e coloca no array Equipado.
     * @param {*} index 
     */
    equipItem(index) {
        if (this.chars.hero.bag.length) {
            this.chars.hero.equipedItems.push(this.chars.hero.bag[index]);
            this.chars.hero.bag.splice(index, 1);
        }

        const tempMods = {};
        
        this.chars.hero.equipedItems.forEach(item => {
            for (const stat in item.effect) {
                const modifier = item.effect[stat]; 
                tempMods[stat] ? tempMods[stat] += modifier : tempMods[stat] = modifier;
            }            
        });

        for (const stat in tempMods) {
            const modifier = tempMods[stat];
            if(this.chars.baseHero[stat] + modifier > 0) {
                this.chars.hero[stat] = this.chars.baseHero[stat] + modifier;
            } else {
                this.chars.hero[stat] = 0;
            }
        }            
    }
    
    /**
     * Função de teste
     */
    pegaItemTest() {
        for (let index = 0; index < 3; index++) {
            this.chars.hero.bag.push(this.game.gameDeck.pop());            
        }
    }



    
};