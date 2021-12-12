import SceneA from "./scenes/sceneA.js";
import Credits from "./scenes/credits.js";
import Menu from "./scenes/menu.js";
import End from "./scenes/end.js";
import En_2 from "./scenes/end_2.js";
import End_2 from "./scenes/end_2.js";

const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    backgroundColor: "#392542",
    scene: [Menu, SceneA, Credits, End, End_2], // ...SceneB, SceneC]
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {y:500 },
        },
    }
}


var game = new Phaser.Game(config);