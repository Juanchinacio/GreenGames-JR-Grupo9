export default class Player{
    constructor(_vidas, _energia, _fuerSalto, _velocidad, _iniciativa, _direccion, _rangoAtaque){
        this.vidas = _vidas;
        this.energia = _energia;
        this.fuerSalto = _fuerSalto;
        this.velocidad = _velocidad;
        this.iniciativa = _iniciativa;
        this.direccion = _direccion;
        this.rangoAtaque = _rangoAtaque;
        this.racha = 0;
    };
    getVelocidad(){
        return this.velocidad;
    };
    getFuerzaSalto(){
        return this.fuerSalto;
    };
    getIniciativa(){
        return this.iniciativa;
    };
    setIniciativa(_iniciativa){
        this.iniciativa = _iniciativa;
    }
    getRacha(){
        return this.racha;
    };
    setRacha(_racha){
        this.racha = _racha;
    }
    getDireccion(){
        return this.direccion;
    };
    setDireccion(_direccion){
        this.direccion = _direccion;
    }
    getRangoAtaque(){
        return this.rangoAtaque;
    };
    setRangoAtaque(_rangoAtaque){
        this.rangoAtaque = _rangoAtaque;
    }
    getRacha(){
        return this.racha;
    };
    setRacha(_racha){
        this.racha = _racha;
    }
    /*static preload(scene){
        //master\assets\images\characters\demoCharacter
        scene.load.atlas('alchemist','master/assets/images/characters/demoCharacter/alchemist.png','master/adsddsdsdassets/images/characters/demoCharacter/alchemist_atlas.json');
        scene.load.animation('alchemist_anim', 'master/assets/images/characters/demoCharacter/alchemist_anim.json');
    }
    static create(){
        //jugador1 = this.physics.add.image(400, 300, 'alchemist');
        //jugador1.Sprite
        //var playerAtlas = this.texture.get('alchemist');
        this.add.image(50,50, 'alchemist', );
    }

    get velocity(){
        return this.body.velocity;
    }

    update(time, delta) {
        this.anims.play('alchemist_idle', true);
        const speed = 2.5;
        let playerVelocity =  new Phaser.Math.Vector2();
        if(this.inputKeys.left.isDown){
            playerVelocity.x = -1;
        } else if (this.inputKeys.right.isDown){
            playerVelocity.x = 1;
        }
        if (this.inputKeys.up.isDown){
            playerVelocity.y = -1;
        } else if (this.inputKeys.down.isDown){
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x, playerVelocity.y);
        if(Math.abs(this.setVelocityY.x) > 0.1 || Math.abs(this.setVelocityY.y) > 0.1){
            this.anims.play('alchemist_walk', true);
        } else {
            this.anims.play('alchemist_idle', true);
        }
    }*/
}