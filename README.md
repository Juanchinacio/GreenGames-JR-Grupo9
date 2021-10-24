# Fight 4 The Bill
## GreenGames-JR-Grupo9

### Ultima actualización 24/10/2021

**Índice** 
1. [Historial de versiones](#id1)
2. [Tecnología utilizada](#id2)
3. [Controles](#id3)
4. [Apartado visual](#id4)
5. [Apartado sonoro](#id5)
6. [Interfaz](#id6)
7. [Personajes](#id7)
8. [Mecánicas](#id8)
    - [Mecánicas generales del jugador](#id9)
    - [Mecánicas específicas del personajes](#id10)
10. [Mapas](#id11)

## Historial de versiones<a name="id1"></a>
Versión 1.0.0 
- Creación y división del documento por apartados 

Versión 1.0.1 
- Desarrollo de los controles, apartado visual, personajes y mecánicas. 

Versión 1.0.2 
- Desarrollo de interfaces y apartado sonoro

## Tecnología utilizada<a name="id2"></a>
Phaser 3
Microsoft Word
Microsoft PowerPoint

## Controles<a name="id3"></a>
- **Controles de movimiento.**

    - Movimiento a derecha: Tecla D.

    - Movimiento a izquierda: Tecla A.

    - Salto: Tecla W.

    - Esquive: Tecla S. 

- **Controles de combate.**

    - Barrido: Tecla J.

    - Estocada: Tecla K.

    - Parry: Tecla [ ].

## Apartado visual<a name="id4"></a>
Estilo píxel art.

32px altura fija / 32px ancho máximo de personajes.

193 altura fija / [por especificar] px ancho del mapa.

## Apartado sonoro<a name="id5"></a>
Música y sonidos retro y 8 bit.

Música tranquila en pantalla principal y pantalla de menú.

Música frenética en pantalla de selección de personaje.

Música frenética en pantalla de juego (en función del mapa).

- Mapa de restaurante.

- Mapa bosque.

Música burlona en pantalla final de resultados.


## Interfaz<a name="id6"></a>
Flujo de pantallas.

![Flujo de pantallas](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/flujo%20Pantallas.png)

Pantalla de titulo.

![Pantalla de titulo](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/pantalla1.png)

Pantalla de menú.

![Pantalla de menú](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/pantalla2.png)

Pantalla de selección de personaje.

![Pantalla de selección de personaje](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/pantalla3.png)

Pantalla de juego.

![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/pantalla4.png)

Pantalla de resultados.

![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/pantalla5.png)

## Interfaz<a name="id7"></a>

Hay cuatro clases de personajes seleccionables, cada uno de ellos con atributos únicos:
- El primer personaje posé todos los atributos básicos por lo que es el más versátil 
- El tanque es un personaje más lento y con menos energía, pero posé la mayor cantidad de vida por lo que resiste varios golpes 
- Ligero este es más rápido, pero no tiene grandes habilidades acrobáticas,  
- El ultimo es la asesina, este tiene poca vitalidad, pero tiene una gran velocidad y habilidades acrobáticas pudiendo realizar muchos ataques en poco tiempo. 
