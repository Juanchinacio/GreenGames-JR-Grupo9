import SceneA from "./sceneA.js";
export default class End_2 extends Phaser.Scene {
    constructor() {
        super({ key: "End_2" })

    }


    preload() {
        // menu
        this.load.image('end_2', './master/assets/images/ui/final.png');
    }

    create() {

        this.add.image(400, 300, 'end_2');
        this.add.image(200, 300, 'ragnar_iddle').setScale(4);
        this.add.image(600, 300, 'jack_iddle').setScale(4);

    }

    update() {
        var keyC = this.input.keyboard.addKey('C');

        if (keyC.isDown) {
            //this.scene.add('SceneA', new SceneA);
            this.scene.restart('SceneA');
            this.scene.start('SceneA');
        }
    }
}