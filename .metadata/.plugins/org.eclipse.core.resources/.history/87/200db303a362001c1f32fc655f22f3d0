

var musicaMenu;
export default class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" })

    }

    

    preload() {
        // menu
        this.load.image('menu', './master/assets/images/ui/portada.png');
        this.load.audio('musicaMenu', './master/assets/audio/musica/menu.mp3');
    }

    create() {

        this.add.image(400, 300, 'menu');
        musicaMenu = this.sound.add('musicaMenu', {loop: true, volume: 0.5})
        musicaMenu.play();
    }

    update() {
        var keyA = this.input.keyboard.addKey('A');
        var keyB = this.input.keyboard.addKey('B');

        if (keyA.isDown) {
            //this.scene.add('SceneA', new SceneA);
            musicaMenu.stop();
            this.scene.start('SceneA')
        }
        if (keyB.isDown) {
            //this.scene.add('SceneA', new SceneA);
            musicaMenu.stop();
            this.scene.start('Credits')
        }
    }
}