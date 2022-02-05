export default {
    dado: n =>  Math.floor(Math.random() * n) + 1,
    
    jogadaDeAtaque: (h, m) => h.habilidade+this.dado(6) >= m.habilidade+this.dado(6),
    
    jogadaDano: (atacante, defensor) => defensor.pv - atacante.forca,
    
    efeitoDano: (atacante, defensor) => console.log(`${atacante.nome} acerta um golpe em ${defensor.nome}`),
    
    msgMorte: morto => console.log(`O ${morto.nome} morreu. :(`),
    
    resolucaoAttack: (atacante, defensor) => {
        defensor.pv = this.jogadaDano(atacante, defensor);
        if (defensor.pv <= 0) {
            this.msgMorte(defensor);
        } else {
            this.efeitoDano(atacante, defensor);
        }
    },
    
    sequenciaAtack: (heroi, monster) => {

        const x = this.jogadaDeAtaque;
        let h = heroi;
        let m = monster;
    
        attacker = x(h,m);
    
        if (attacker) {
            this.resolucaoAttack(h, m);
        } else {
            this.resolucaoAttack(m, h);
        }
    }
}