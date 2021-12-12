import SceneA from "./sceneA.js";

var musicaFin;

export default class End_2 extends Phaser.Scene {
    constructor() {
        super({ key: "End_2" })

    }


    preload() {
        // menu
        this.load.image('end_2', './master/assets/images/ui/final.png');
        // Musica
        this.load.audio('musicaFin', './master/assets/audio/musica/fin.mp3');
        
    }

    create() {

        this.add.image(400, 300, 'end_2');
        this.add.image(200, 300, 'ragnar_iddle').setScale(4);
        this.add.image(600, 300, 'jack_iddle').setScale(4);
        musicaFin = this.sound.add('musicaFin', {loop: true, volume: 0.5})
        musicaFin.play();

    }

    update() {
        var keyC = this.input.keyboard.addKey('C');

        if (keyC.isDown) {
            //this.scene.add('SceneA', new SceneA);
            musicaFin.stop();
            //this.scene.restart('SceneA');
            this.scene.start('SceneA');
        }
    }
}