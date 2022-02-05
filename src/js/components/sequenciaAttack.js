export default {
    dado(n) {
        return Math.floor(Math.random() * n) + 1;
    },
    
    jogadaDeAtaque(h, m) {
        return h.habilidade+this.dado(6) >= m.habilidade+this.dado(6)
    },
    
    jogadaDano(atacante, defensor) {
        return defensor.pv - atacante.forca
    },
    
    efeitoDano(atacante, defensor) {
        console.log(`${atacante.nome} acerta um golpe em ${defensor.nome}`)
    },
    
    msgMorte(morto) {return console.log(`O ${morto.nome} morreu. :(`)},
    
    resolucaoAttack(atacante, defensor) {
        defensor.pv = this.jogadaDano(atacante, defensor);
        if (defensor.pv <= 0) {
            this.msgMorte(defensor);
        } else {
            this.efeitoDano(atacante, defensor);
        }
    },
    
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