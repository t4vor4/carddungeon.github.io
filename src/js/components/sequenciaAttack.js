/**
 * Classe com funções de controle de combate
 */
export default class Combate {
    /**
     * Função que simula uma jogada de dados
     * @param {*} n 
     * @returns 
     */
    dado(n) {
        return Math.floor(Math.random() * n) + 1;
    }
    
    /**
     * Jodada de ataque entre Heroi e Monstro
     * @param {*} h 
     * @param {*} m 
     * @returns 
     */
    jogadaDeAtaque(h, m) {
        return h.habilidade+this.dado(6) >= m.habilidade+this.dado(6)
    }
    
    /**
     * Calcula o dano que o defensor recebe do atacante.
     * @param {*} atacante 
     * @param {*} defensor 
     * @returns 
     */
    jogadaDano(atacante, defensor) {
        return defensor.pv - atacante.forca
    }
    
    /**
     * Ativa efeito visual relativo ao dano causado do Atacante ao Defensor
     * @param {*} atacante 
     * @param {*} defensor 
     */
    efeitoDano(atacante, defensor) {
        console.log(`${atacante.nome} acerta um golpe em ${defensor.nome}`)
    }
    
    /**
     * Ativa efeito visual relativo a morte de um personagem
     * @param {*} morto 
     * @returns 
     */
    msgMorte(morto) {
        return console.log(`O ${morto.nome} morreu. :(`)
        // aqui devera tirar o monstro do deck ou algo assim...
    }
    
    /**
     * Resolução do dano causado pelo Atacante ao Defensor, que pode resultar em Morte ou Dano
     * @param {*} atacante 
     * @param {*} defensor 
     */
    resolucaoAttack(atacante, defensor) {
        defensor.pv = this.jogadaDano(atacante, defensor);
        if (defensor.pv <= 0) {
            this.msgMorte(defensor);
        } else {
            this.efeitoDano(atacante, defensor);
        }
    }
    
    /**
     * Função que define a sequencia de ataque.
     * @param {*} heroi 
     * @param {*} monster 
     */
    sequenciaAtack(heroi, monster) {
        let h = heroi;
        let m = monster;
    
        let attacker = this.jogadaDeAtaque(h,m);
    
        if (attacker) {
            this.resolucaoAttack(h, m);
        } else {
            this.resolucaoAttack(m, h);
        }
    }
}