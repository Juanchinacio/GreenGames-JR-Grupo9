export default class Credits extends Phaser.Scene {
    constructor() {
        super({ key: "Credits" })

    }


    preload() {
        // menu
        this.load.image('credits', './master/assets/images/ui/creditos.png');
    }

    create() {

        this.add.image(400, 300, 'credits');

    }

    update() {
        var keyC = this.input.keyboard.addKey('C');

        if (keyC.isDown) {
            //this.scene.add('SceneA', new SceneA);
            this.scene.start('Menu')
        }
    }
}