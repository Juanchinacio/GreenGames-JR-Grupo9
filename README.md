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
    - [Mecánicas del modo de juego](#id11)
10. [Mapas](#id12)

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

## Personajes<a name="id7"></a>

Hay cuatro clases de personajes seleccionables, cada uno de ellos con atributos únicos:
- El primer personaje posé todos los atributos básicos por lo que es el más versátil 
- El tanque es un personaje más lento y con menos energía, pero posé la mayor cantidad de vida por lo que resiste varios golpes 
- Ligero este es más rápido, pero no tiene grandes habilidades acrobáticas,  
- El ultimo es la asesina, este tiene poca vitalidad, pero tiene una gran velocidad y habilidades acrobáticas pudiendo realizar muchos ataques en poco tiempo.

## Mecánicas<a name="id8"></a>

### Mecánicas generales del jugador<a name="id9"></a>
Mecánicas básicas:
- Todos los jugadores cuentan con dos puntos de vida, por lo que mueren de dos golpes, además contarán con 3 puntos de energía que se usarán para gestionar tanto los ataques, bloqueo con el escudo y la esquiva, cada punto de energía tarda 1 segundo en regenerarse.
Mecánicas de movimiento:
- Los jugadores podrán desplazarse con un movimiento lateral, realizar un salto con el que también podrán realizar movimiento lateral.
- También se podrá realizar una esquiva hacia atrás, este movimiento consume 2 puntos de energía y posiciona al jugador rápidamente en un lugar más atrasado pudiendo ser dañado durante el proceso de la animación.
Mecánicas de combate:
-  Todos los personajes pueden realizar dos tipos de tipos de ataque, ambos consumen un punto de energía: 

    - Ataque en barrido es un ataque de corta distancia, que tiene un rango de actuación vertical mayor 

    - Ataque de estocada es un ataque de larga distancia, que tiene un rango de actuación vertical menor 

- También todos los jugadores cuentan con un parry, si un jugador es atacado y realiza el parry en el momento justo antes de recibir el daño anula el daño y empuja al jugador atacante hacia atrás. Esta acción consume 1 punto de energía.

### Mecánicas específicas del personaje<a name="id10"></a>
Estándar
- 2 unidades vida
- Velocidad normal
- 3 unidades energía
- Fuerza de salto normal
Tanque
- 3 unidades vida
- Velocidad lenta
- 2 unidades energía
- Fuerza de salto normal
Ligero
- 2 unidades vida
- Velocidad rápida
- 3 energía
- Fuerza de salto baja
Asesino
- 1 unidades vida 
- Velocidad rápida 
- 4 unidades energía 
- Fuerza de salto alta

### Mecánicas del modo de juego<a name="id11"></a>
** Duelo ** 

Dos equipos de N jugadores son enfrentados en lados opuestos. 

La partida acaba en un tiempo determinado y el equipo ganador será el que tanga mayor cantidad de puntos obtenidos. 

Cada equipo tiene una zona de anotación en los extremos del mapa, cuando un jugador con marcas llega a la zona de anotación del equipo contrario consume dicha cantidad de marcas para obtener puntos para su equipo.  

Las marcas se obtienen cuando un jugador mata a otro del equipo enemigo y son acumulables. 

Cuando un jugador muere pierde todas las marcas que ha acumulado y reaparece con un tiempo de reaparición a N distancia del jugador rival, pero en su lado del campo.

### Mapas<a name="id12"></a>
Mapa 1: Ejemplo 
- Descripción 
- Objetivos 
- Mecánicas que van a ser usadas 
- Elementos que van a ser usados 
- Estilo visual especifico del nivel (“Temática”) 
- Estilo música especifica (“Temática”) 
- ... 
