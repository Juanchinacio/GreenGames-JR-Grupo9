import Player from "../class/Player.js";


var platforms;
var jugador_1;
var velocidadBase = 60;
var saltoBase = 80;
var varJugador_1;
var jugador_2;
var varJugador_2;
var cursors;
var marcadorIniciativa;
var tiempoBase = 210;
var tiempo = 0;
var tiempoProroga = 60;
var temporizador;

var bala1;
var temporizadorBala1;
var tiempoVidaBala1 = 0;

var bala2;
var temporizadorBala2;
var tiempoVidaBala2 = 0;

var distanciaReaparicion = 350;

var PuntosJugador1 = 0;
var PuntosJugador2 = 0;

var posicionJugadores_Y = 300;
var posInicialJugador2_X = 2004 - 100;
var posInicialJugador1_X = 2004 + 100;

var puedeAtacarJ1;
var puedeAtacarJ2;

var musicaBatalla;

var audioAtaque;
var audioDanyo;
var audioSalto;

export default class SceneA extends Phaser.Scene {
    constructor() {
        super({ key: "SceneA" })

    }


    preload() {
        // Jack
        this.load.spritesheet('jack_attack', './master/assets/images/characters/Jack/Jack_attack.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('jack_iddle', './master/assets/images/characters/Jack/Jack_iddle.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('jack_run', './master/assets/images/characters/Jack/Jack_run.png', { frameWidth: 64, frameHeight: 64 });
        // Ragnar
        this.load.spritesheet('ragnar_attack', './master/assets/images/characters/Ragnar/Ragnar_attack.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('ragnar_iddle', './master/assets/images/characters/Ragnar/Ragnar_iddle.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('ragnar_run', './master/assets/images/characters/Ragnar/Ragnar_run.png', { frameWidth: 64, frameHeight: 64 });
        // Marcador iniciativa
        this.load.image('marc_iniciativa', './master/assets/images/ui/iniciativa.png');
        // Onda ataque
        this.load.image('onda', './master/assets/images/characters/ataque.png');
        // Mapa
        this.load.image('mapa', './master/assets/images/map/bar.png');
        // Musica
        this.load.audio('musicaBatalla', './master/assets/audio/musica/batalla.mp3');
        // Audio
        this.load.audio('aud_salto', './master/assets/audio/sonido/salto.mp3');
        this.load.audio('aud_ataque', './master/assets/audio/sonido/ataque.mp3');
        this.load.audio('aud_danyo', './master/assets/audio/sonido/danyo.mp3');
        // Icono
        this.load.image('iconoJack', './master/assets/images/ui/jackIcono.png');
        this.load.image('iconoRagnar', './master/assets/images/ui/ragnarIcono.png');



        this.load.image('ground', './master/assets/images/map/ground.png');
    }

    create() {
        tiempo = tiempoBase;

        var canvasWidth = this.sys.game.config.width;
        var canvasHeight = this.sys.game.config.height;

        // Fondo Mapa
        this.add.image(0, 0, 'mapa').setOrigin(0, 0);

        // Musica
        musicaBatalla = this.sound.add('musicaBatalla', {loop: true, volume: 0.5})
        musicaBatalla.play();
        // Sonidos
        audioAtaque = this.sound.add('aud_ataque', {loop: false})
        audioDanyo = this.sound.add('aud_danyo', {loop: false, volume: 3})
        audioSalto = this.sound.add('aud_salto', {loop: false, volume: 3})

        // Plataforma
        platforms = this.physics.add.staticGroup();
        // Paredes
        platforms.create(-475, 0, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(4008 + 475, 0, 'ground').setScale(15).refreshBody().setVisible(false);

        // Suelo
        platforms.create(500, 867, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(1000, 867, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(1500, 867, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(2000, 867, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(2500, 867, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(3000, 867, 'ground').setScale(15).refreshBody().setVisible(false);
        platforms.create(3500, 867, 'ground').setScale(15).refreshBody().setVisible(false);



        // CREACION JUGADOR 1 //--------------------------------------
        varJugador_1 = new Player(3, 3, 4.25, 3, false, 1, 1);
        // sprite
        jugador_1 = this.physics.add.sprite(posInicialJugador1_X, posicionJugadores_Y, "jack_attack");
        // colision con las paredes
        //jugador_1.setCollideWorldBounds(true);
        // colision con el suelo
        this.physics.add.collider(jugador_1, platforms);
        // Marcador
        marcadorIniciativa = this.add.sprite(75, 75, "marc_iniciativa");

        // CREACION JUGADOR 2 //--------------------------------------
        varJugador_2 = new Player(3, 3, 4.25, 3, false, 1, 2.5);
        // sprite
        jugador_2 = this.physics.add.sprite(posInicialJugador2_X, posicionJugadores_Y, "jack_attack");
        // colision con las paredes
        //jugador_2.setCollideWorldBounds(true);
        // colision con el suelo
        this.physics.add.collider(jugador_2, platforms);

        // Input Events
        cursors = this.input.keyboard.createCursorKeys();

        // CAMARA
        this.cameras.main.centerOn(2004, 300);
        this.cameras.main.setBounds(0, 0, 4008, 600);
        //this.cameras.main.setBounds(0, 0, 800 * 2, 600 * 2);
        //this.cameras.main.startFollow(jugador_1, true, 0.05, 0.05);

        // Creo texto UI
        // estilo texto
        var puntuacionStyle = { font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "center" };
        var temporizadorStyle = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "center" };
        // creacion textos
        this.puntuacionJugador2 = this.add.text(100, 100, '', puntuacionStyle).setText('Click to move').setScrollFactor(0).setOrigin(0.5, 0.5);
        this.puntuacionJugador1 = this.add.text(canvasWidth - 100, 100, '', puntuacionStyle).setText('Click to move').setScrollFactor(0).setOrigin(0.5, 0.5);

        this.rachaJugador2 = this.add.text(100, 125, '', puntuacionStyle).setText('Racha Jugador1').setScrollFactor(0).setOrigin(0.5, 0.5);
        this.rachaJugador1 = this.add.text(canvasWidth - 100, 125, '', puntuacionStyle).setText('Racha Jugador2').setScrollFactor(0).setOrigin(0.5, 0.5);
        // Temporizador
        this.textTiempo = this.add.text((canvasWidth / 2), 30, '', temporizadorStyle).setText('Time').setScrollFactor(0).setOrigin(0.5, 0.5);
        this.temporizador = this.add.text((canvasWidth / 2), 75, '', temporizadorStyle).setText('Click to move').setScrollFactor(0).setOrigin(0.5, 0.5);
        // Iconos
        this.add.image(100, 50, 'iconoRagnar').setOrigin(0.5, 0.5).setScrollFactor(0);
        this.add.image(canvasWidth - 100, 50, 'iconoJack').setOrigin(0.5, 0.5).setScrollFactor(0);

        // Creacion ataque bala1
        bala1 = this.physics.add.sprite(1000, 1000, "onda");
        bala1.body.setAllowGravity(false);
        bala1.flipX = true;
        // Creacion ataque bala2
        bala2 = this.physics.add.sprite(1000, 1000, "onda");
        bala2.body.setAllowGravity(false);


        // TEMPORIZADOR TIEMPO PARTIDA
        temporizador = this.time.addEvent({ delay: 1000, callback: this.menos, callbackScope: this, loop: true });
        // TEMPORIZADOR TIEMPO RECARGA Bala 1
        temporizadorBala1 = this.time.addEvent({ delay: 100, callback: this.menosTiempoBala1, callbackScope: this, loop: true });
        // TEMPORIZADOR TIEMPO RECARGA Bala 2
        temporizadorBala2 = this.time.addEvent({ delay: 100, callback: this.menosTiempoBala2, callbackScope: this, loop: true });

        // Caolisiones Bala_1 con Jugador_2
        this.physics.add.collider(bala1, jugador_2, this.colisionBala1_Jugador2);//, this.colisionBala1_Jugador2(), null, this);

        // Caolisiones Bala_2 con Jugador_1
        this.physics.add.collider(bala2, jugador_1, this.colisionBala2_Jugador1);//, this.colisionBala2_Jugador1(), null, this);



        // Creacion animaciones JACK
        this.anims.create({
            key: 'jack_iddle_anim',
            frames: this.anims.generateFrameNames('jack_iddle', {
                frames: [1, 2, 3, 4, 5, 6]
            }),
            repeat: -1,
            frameRate: 12,
        });
        this.anims.create({
            key: 'jack_attack_anim',
            frames: this.anims.generateFrameNames('jack_attack', {
                frames: [1, 2, 3, 4, 5]
            }),
            repeat: -1,
            frameRate: 12,
        });
        this.anims.create({
            key: 'jack_run_anim',
            frames: this.anims.generateFrameNames('jack_run', {
                frames: [1, 2, 3, 4, 5, 6]
            }),
            repeat: -1,
            frameRate: 12,
        });

        // Creacion animaciones Ragnar
        this.anims.create({
            key: 'ragnar_iddle_anim',
            frames: this.anims.generateFrameNames('ragnar_iddle', {
                frames: [1, 2, 3, 4, 5, 6, 7, 8]
            }),
            repeat: -1,
            frameRate: 12,
        });
        this.anims.create({
            key: 'ragnar_attack_anim',
            frames: this.anims.generateFrameNames('ragnar_attack', {
                frames: [1, 2, 3, 4, 5]
            }),
            repeat: -1,
            frameRate: 12,
        });
        this.anims.create({
            key: 'ragnar_run_anim',
            frames: this.anims.generateFrameNames('ragnar_run', {
                frames: [1, 2, 3, 4, 5]
            }),
            repeat: -1,
            frameRate: 12,
        });

    }

    restablecerPosicionesInicialesJugadores() {
        jugador_1.x = posInicialJugador1_X;
        jugador_1.y = posicionJugadores_Y;
        jugador_2.x = posInicialJugador2_X;
        jugador_2.y = posicionJugadores_Y;
    }
    restablecerPuntuaciones() {
        PuntosJugador1 = 0;
        PuntosJugador2 = 0;
        varJugador_1.setRacha(0);
        varJugador_2.setRacha(0);
    }
    restablecerMusica() {
        musicaBatalla.stop();
    }

    anotacion() {
        console.log('Posicion X J1: ' + jugador_1.x);
        if (jugador_1.x < 50) {
            PuntosJugador1 += varJugador_1.getRacha();
            varJugador_1.setRacha(0);
            varJugador_1.setIniciativa(false);
            varJugador_2.setIniciativa(true);
            this.restablecerPosicionesInicialesJugadores();
        }
        if (jugador_2.x > 3950) {
            PuntosJugador2 += varJugador_2.getRacha();
            varJugador_2.setRacha(0);
            varJugador_1.setIniciativa(true);
            varJugador_2.setIniciativa(false);
            this.restablecerPosicionesInicialesJugadores();
        }
    }

    marcadorIniciativaUpdate() {
        if (varJugador_1.getIniciativa() == true) {
            marcadorIniciativa.x = jugador_1.x;
            marcadorIniciativa.y = jugador_1.y - 64;
            this.cameras.main.startFollow(jugador_1, true, 0.05, 0.05);
        } else if (varJugador_2.getIniciativa() == true) {
            marcadorIniciativa.x = jugador_2.x;
            marcadorIniciativa.y = jugador_2.y - 64;
            this.cameras.main.startFollow(jugador_2, true, 0.05, 0.05);
        } else {
            marcadorIniciativa.x = -100;
            marcadorIniciativa.y = -100;
            this.cameras.main.stopFollow();
        }
    }

    colisionBala2_Jugador1() {
        varJugador_1.setRacha(0);
        varJugador_2.setIniciativa(true);
        varJugador_1.setIniciativa(false);
        bala2.y = 1000;
        varJugador_2.setRacha(varJugador_2.getRacha() + 1);
        // Restablecer posicion del jugador al morir
        jugador_1.x = jugador_2.x + distanciaReaparicion;
        jugador_1.y = posicionJugadores_Y;
        audioDanyo.play();
    }
    colisionBala1_Jugador2() {
        varJugador_2.setRacha(0);
        varJugador_2.setIniciativa(false);
        varJugador_1.setIniciativa(true);
        bala1.y = 1000;
        varJugador_1.setRacha(varJugador_1.getRacha() + 1);
        // Restablecer posicion del jugador al morir
        jugador_2.x = jugador_1.x - distanciaReaparicion;
        jugador_2.y = posicionJugadores_Y;
        audioDanyo.play();
    }

    menos() {
        tiempo -= 1;
        if (tiempo < 0) {
            if(PuntosJugador1 > PuntosJugador2){
                tiempo = tiempoBase;
                this.restablecerPuntuaciones();
                this.restablecerMusica();
                this.scene.start('End');
            }else if (PuntosJugador2 > PuntosJugador1) {
                tiempo = tiempoBase;
                this.restablecerPuntuaciones();
                this.restablecerMusica();
                this.scene.start('End_2');
            } else {
                tiempo = tiempoProroga;
                this.restablecerPuntuaciones()
                this.restablecerPosicionesInicialesJugadores();
            }
        } 
    }
    menosTiempoBala1() {
        tiempoVidaBala1 -= 1;
        if (tiempoVidaBala1 < 0) { bala1.y = 1000; puedeAtacarJ1 = true; }
    }
    menosTiempoBala2() {
        tiempoVidaBala2 -= 1;
        if (tiempoVidaBala2 < 0) { bala2.y = 1000; puedeAtacarJ2 = true; }
    }

    shoot1() {
        jugador_1.anims.play('jack_attack_anim', true);
        audioAtaque.play();
        puedeAtacarJ1 = false;
        if (tiempoVidaBala1 < 0) {
            bala1.x = jugador_1.x;
            bala1.y = jugador_1.y;
            if (varJugador_1.getDireccion() == 0) {
                bala1.body.velocity.x = -400;
                bala1.flipX = true;
            } else {
                bala1.body.velocity.x = 400;
                bala1.flipX = false;
            }
            tiempoVidaBala1 = varJugador_1.getRangoAtaque();
        }
    }
    shoot2() {
        audioAtaque.play();
        puedeAtacarJ2 = false;
        if (tiempoVidaBala2 < 0) {
            bala2.x = jugador_2.x;
            bala2.y = jugador_2.y;
            if (varJugador_2.getDireccion() == 0) {
                bala2.body.velocity.x = -400;
                bala2.flipX = true;
            } else {
                bala2.body.velocity.x = 400;
                bala2.flipX = false;
            }
            tiempoVidaBala2 = varJugador_2.getRangoAtaque();
        }
    }



    actualizarUI() {
        this.puntuacionJugador1.setText('Points: ' + PuntosJugador1);
        this.puntuacionJugador2.setText('Points: ' + PuntosJugador2);

        this.rachaJugador1.setText('Streak: ' + varJugador_1.getRacha());
        this.rachaJugador2.setText('Streak: ' + varJugador_2.getRacha());

        this.temporizador.setText(tiempo);
    }

    update() {
        // Actualizador Iniciativa //
        this.marcadorIniciativaUpdate();
        //this.cambioIniciativa();

        // Actualizacion UI //
        this.actualizarUI();

        // Gestion controles jugadores //
        this.controlesJugador1();
        this.controlesJugador2();

        // Anotacion de puntos //
        this.anotacion();

    }



    controlesJugador1() {
        // CONTROLES JUGADOR 1 //-----------------------------------------------
        if (cursors.left.isDown) {
            jugador_1.setVelocityX(-velocidadBase * varJugador_1.getVelocidad());
            jugador_1.anims.play('jack_run_anim', true);
            jugador_1.flipX = true;
            varJugador_1.setDireccion(0);
            //player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            jugador_1.setVelocityX(velocidadBase * varJugador_1.getVelocidad());
            jugador_1.anims.play('jack_run_anim', true);
            jugador_1.flipX = false;
            varJugador_1.setDireccion(1);
            //player.anims.play('right', true);
        }
        else {
            jugador_1.setVelocityX(0);
            jugador_1.anims.play('jack_iddle_anim', true);
            //player.anims.play('turn');
        }
        if (cursors.up.isDown && jugador_1.body.touching.down) {
            jugador_1.setVelocityY(-saltoBase * varJugador_1.getFuerzaSalto());
            audioSalto.play();
        }
        // Disparar jugador 1
        var keyM = this.input.keyboard.addKey('M');
        keyM.once('up', this.shoot1, this);
        if (keyM.isDown) {
            jugador_1.anims.play('jack_attack_anim', true);
        }
    }

    controlesJugador2() {
        var keyW = this.input.keyboard.addKey('W');
        var keyA = this.input.keyboard.addKey('A');
        var keyD = this.input.keyboard.addKey('D');

        if (keyA.isDown) {
            jugador_2.setVelocityX(-velocidadBase * varJugador_2.getVelocidad());
            jugador_2.flipX = true;
            jugador_2.anims.play('ragnar_run_anim', true);
            varJugador_2.setDireccion(0);
        }
        else if (keyD.isDown) {
            jugador_2.setVelocityX(velocidadBase * varJugador_2.getVelocidad());
            jugador_2.anims.play('ragnar_run_anim', true);
            jugador_2.flipX = false;
            varJugador_2.setDireccion(1);
        }
        else {
            jugador_2.setVelocityX(0);
            jugador_2.anims.play('ragnar_iddle_anim', true);
            //player.anims.play('turn');
        }
        // Disparar jugador 2
        var keyF = this.input.keyboard.addKey('F');
        keyF.once('up', this.shoot2, this);
        if (keyF.isDown) {
            jugador_2.anims.play('ragnar_attack_anim', true);
        }


        if (keyW.isDown && jugador_2.body.touching.down) {
            jugador_2.setVelocityY(-saltoBase * varJugador_2.getFuerzaSalto());
            audioSalto.play();
            jugador_2.anims.play('ragnar_run_anim', true);
        }
    }
}