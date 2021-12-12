import SceneA from "./sceneA.js";
export default class End extends Phaser.Scene {
    constructor() {
        super({ key: "End" })

    }


    preload() {
        // menu
        this.load.image('end', './master/assets/images/ui/final.png');

        // Jack
        this.load.spritesheet('jack_iddle', './master/assets/images/characters/Jack/Jack_iddle.png', { frameWidth: 64, frameHeight: 64 });
        // Ragnar
        this.load.spritesheet('ragnar_iddle', './master/assets/images/characters/Ragnar/Ragnar_iddle.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {

        this.add.image(400, 300, 'end');
        this.add.image(200, 300, 'jack_iddle').setScale(4);
        this.add.image(600, 300, 'ragnar_iddle').setScale(4);

    }

    update() {
        var keyC = this.input.keyboard.addKey('C');

        if (keyC.isDown) {
            //this.scene.add('SceneA', new SceneA);
            //this.scene.add('Menu', new SceneA);
            this.scene.restart('SceneA');
            this.scene.start('SceneA');
        }
    }
}