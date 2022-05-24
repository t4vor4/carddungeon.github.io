export default class Stage {
    constructor (gameState) {
        this.base(gameState);
    }
    base(gameState) {
        let heroi = gameState.chars.hero;

        const characterInfo = this.characterInfo(heroi);

        const $html = `
            <div class="stage">
                ${characterInfo}
            </div>
        `
        
        $('.content').append($html);
    }
    characterInfo(heroi) {
        return `
            <header class="heroi"> 
                <div class="heroi__row">
                    <div class="heroi__face">
                    </div>
                    <div class="heroi_content">
                        <span class="heroi__nome">${heroi.nome}</span>/<small class="heroi__classe">${heroi.tipo2}</small>
                        <span class="heroi__lifeBar">
                            <span class="heroi__lifeBar__inner" style="width: 90%;"></span>
                        </span>
                    </div>
                    <button class="heroi__info">Info</button>
                </div>
                <!-- <div class="heroi__row heroi__row--2">
                </div> -->

                <!-- <div class="heroi__info__points">
                    <span class="heroi__point heroi__point--forca">Força: ${heroi.forca}</span>
                    <span class="heroi__point heroi__point--habilidade">Habilidade: ${heroi.habilidade}</span>
                    <span class="heroi__point heroi__point--resistencia">Resistência: ${heroi.resistencia}</span>
                    <span class="heroi__point heroi__point--pv">Vida: ${heroi.pv}</span>
                </div> -->
            </header>
        `;
    }
}