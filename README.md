# Fight 4 The Bill
## GrimGames-JR-Grupo9

### Ultima actualización 26/10/2021
Rubén Díaz Borrego, r.diazb.2019@alumnos.urjc.es, 53715372E, Cuenta gitHub -> mercaruby

Daniel Hernández Tamayo, d.hernandezt.2018@alumnos.urjc.es, 09042182P, Cuenta gitHub -> staz131

Juan Ignacio Castro Carmona, ji.castro.2019@alumnos.urjc.es, 76659656N, Cuenta gitHub -> Juanchinacio

Carlos Villa Blanco, c.villa.2019@alumnos.urjc.es, 71473974W, Cuenta gitHub -> CarlosVillaBlanco

Joaquín Joya Cacín, j.joya.2017@alumnos.urjc.es, 74740594R, Cuenta gitHub -> jojoca110

Repositorio -> https://github.com/Juanchinacio/GreenGames-JR-Grupo9

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
11. [Referencias](#id13)
12. [Bibliografia](#id14)

## 1.Historial de versiones<a name="id1"></a>
Versión 1.0.0 
- Creación y división del documento por apartados 

Versión 1.0.1 
- Desarrollo de los controles, apartado visual, personajes y mecánicas. 

Versión 1.0.2 
- Desarrollo de interfaces y apartado sonoro

Versión 1.0.3 
- Desarrollo del juego en local 

## 2.Tecnología utilizada<a name="id2"></a>
Microsoft Word
Microsoft PowerPoint
Phaser 3 

## 3.Controles<a name="id3"></a>
- **Controles de movimiento.**

    - Movimiento a derecha: Tecla D.

    - Movimiento a izquierda: Tecla A.

    - Salto: Tecla W.

    - Esquive: Tecla S. 

- **Controles de combate.**

    - Ataque jugador 1: Tecla F 
    - 
    - Ataque jugador 2: Tecla M 

## 4.Apartado visual<a name="id4"></a>
Estilo píxel art.
64px altura fija / 64px ancho máximo de personajes.


## 5.Apartado sonoro<a name="id5"></a>
Música y sonidos retro y 8 bit 

Música tranquila en pantalla principal. 

Música frenética en pantalla de menú. 

Música frenética en pantalla de juego (en función del mapa) 

- Mapa de Taberna (música de taberna medieval) 

- Mapa Bosque sombrío (música de tenebrosa) 

Música burlona en pantalla final de resultados 


## 6.Interfaz<a name="id6"></a>
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

## 7.Personajes<a name="id7"></a>

Hay dos clases de personajes seleccionables, cada uno de ellos con características únicas:
- El Guerrero tiene una espada corta que le permite hacer ataques cortos, pero con más frecuencia. 
![Personaje_1](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/p1.png)
- El Berserker tiene una pesada hacha que le permite hacer ataques largos, pero con menos frecuencia. 
![Personaje_2](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/p2.png)


## 8.Mecánicas<a name="id8"></a>

### 8.1.Mecánicas generales del jugador<a name="id9"></a>
- Mecánicas básicas: 
Todos los jugadores cuentan con dos puntos de vida, por lo que mueren de dos golpes, además contarán con 3 puntos de energía que se usarán para gestionar tanto los ataques, bloqueo con el escudo y la esquiva, cada punto de energía tarda 1 segundo en regenerarse. 

- Mecánicas de movimiento: 
Los jugadores podrán desplazarse con un movimiento lateral, realizar un salto con el que también podrán realizar movimiento lateral. 

- Mecánicas de combate: 
Los personajes pueden realizar un ataque lateral en la dirección en la que miran. Los ataques cuentan con dos características longitud de ataque y enfriamiento de ataque, cuanto más alcance tiene el ataque más enfriamiento tiene el ataque. 

### 8.2.Mecánicas específicas del personaje<a name="id10"></a>
8.2.1. Guerrero 
Rango de ataque: x unidades 

8.2.2. Berserker 
Rango de ataque: x unidades 

### 8.3.Mecánicas del modo de juego<a name="id11"></a>
** Duelo **
Dos jugadores son enfrentados en lados opuestos. 

La partida acaba en un tiempo determinado por el mapa y el equipo ganador será el que tanga mayor cantidad de puntos obtenidos. 

Cuando un jugador mata al otro del equipo enemigo obtiene un punto a su racha de bajas y son acumulables. 

Cada equipo tiene una zona de anotación en los extremos del mapa, cuando un jugador con racha de bajas llega a la zona de anotación del equipo contrario consume dicha cantidad de puntos de la racha para obtener puntos de victoria para su equipo.  

Cuando un jugador consigue matar a su adversario obtiene la iniciativa del combate por lo que la cámara se centrara en dicho jugador. 

Cuando un jugador muere pierde todos los puntos de su racha que ha acumulado y reaparece por su lateral del mapa en el borde de la cámara del jugador con la iniciativa.  

## 9.Mapas<a name="id12"></a>
El mapa principal sería de una taberna de estética medieval de ambiente animado y un mapa secundario de un bosque sombrío. 

Ambos escenarios tendrían una música de fondo acorde con su estética y de estilo 8 bits. 

El escenario de la Taberna serán partidas en modo normal de 3:30 minutos  

El escenario del Bosque sombrío serán partidas en modo masacre de 5 minutos 

## 10.Referencias<a name="id13"></a>
Juegos de referencia: 
- Nidhogg 
- Head soccer 
- Pato juego 

## 11.Bibliografía<a name="id14"></a>
Libro de git: 

- https://git-scm.com/book/en/v2 

Tutorial de inicio en GitHub: 

- https://guides.github.com/activities/hello-world/ 

Aplicación de escritorio: 

- https://desktop.github.com/ 

Videotutoriales GitHub: 

- https://www.youtube.com/githubguides 

Documentación GitHub: 

- https://docs.github.com/en 

Game Design Document (GDD): 

- https://www.gamasutra.com/view/feature/3384/the_anatomy_of_a_design_document_.php 

- https://github.com/dsaltares/sion-tower/blob/master/doc/gdd/gdd.pdf   

- http://manualdelgamedesigner.blogspot.com/2014/08/design-document-gdd.html  

- http://manualdelgamedesigner.blogspot.com/2014/10/como-organizar-efectivamente-el.html 

Level up guía para ser un gran diseñador de videojuegos (Scott Rogers) 

