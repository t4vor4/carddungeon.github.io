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
                    <button class="heroi__btn heroi__btn--status myModal__btn" data-for="heroiStatus" title="Status"></button>
                    <button class="heroi__btn heroi__btn--itens myModal__btn" data-for="heroiItens" title="Items"></button>
                </div>
                
                <div class="myModal" id="heroiStatus">
                    <button class="myModal__close">X</button>
                    <div class="myModal__body infoStatus">
                        <div class="infoStatus__row infoStatus__row--1">
                            <h2>Informações</h2>
                            <div class="infoStatus__charPhoto"></div>
                            <div class="infoStatus__nameClass">
                                <div class="infoStatus__name">${heroi.nome}</div>
                                <div class="infoStatus__class">${heroi.tipo2}</div>
                            </div>
                        </div>
                        <div class="infoStatus__row infoStatus__row--2">
                            <h2>Status</h2>
                            <div class="infoStatus__content">
                                <span class="heroi__point">
                                    <h3 class="heroi__point__desc"><i class="heroi__point__icon heroi__point__icon--forca"></i> Força</h3> <span class="heroi__point__value">${heroi.forca}</span>
                                </span>
                                <span class="heroi__point">
                                    <h3 class="heroi__point__desc"><i class="heroi__point__icon heroi__point__icon--hab"></i> Habilidade</h3> <span class="heroi__point__value">${heroi.habilidade}</span>
                                </span>
                                <span class="heroi__point">
                                    <h3 class="heroi__point__desc"><i class="heroi__point__icon heroi__point__icon--res"></i> Resistência</h3> <span class="heroi__point__value">${heroi.resistencia}</span>
                                </span>
                                <span class="heroi__point">
                                    <h3 class="heroi__point__desc"><i class="heroi__point__icon heroi__point__icon--pv"></i> Vida</h3> <span class="heroi__point__value">${heroi.pv}</span>
                                </span>
                            </div>
                        </div>
                        <div class="infoStatus__row infoStatus__row--3">
                            <h2>Historia</h2>
                            <div class="infoStatus__history">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde iste, consequuntur quod suscipit non sit aliquid quia autem architecto?
                            </div>
                        </div>

                        

                    </div>
                </div>

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