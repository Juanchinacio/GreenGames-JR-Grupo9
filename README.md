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

## 2.Tecnología utilizada<a name="id2"></a>
Microsoft Word
Microsoft PowerPoint

## 3.Controles<a name="id3"></a>
- **Controles de movimiento.**

    - Movimiento a derecha: Tecla D.

    - Movimiento a izquierda: Tecla A.

    - Salto: Tecla W.

    - Esquive: Tecla S. 

- **Controles de combate.**

    - Barrido: Tecla J.

    - Estocada: Tecla K.

    - Parry: Tecla [ ].

## 4.Apartado visual<a name="id4"></a>
Estilo píxel art.

32px altura fija / 32px ancho máximo de personajes.

193 altura fija / [por especificar] px ancho del mapa.

## 5.Apartado sonoro<a name="id5"></a>
Música y sonidos retro y 8 bit.

Música tranquila en pantalla principal y pantalla de menú.

Música frenética en pantalla de selección de personaje.

Música frenética en pantalla de juego (en función del mapa).

- Mapa de restaurante.

- Mapa bosque.

Música burlona en pantalla final de resultados.


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

Hay cuatro clases de personajes seleccionables, cada uno de ellos con atributos únicos:
- El primer personaje posé todos los atributos básicos por lo que es el más versátil
![Personaje_1](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/p1.png)
- El tanque es un personaje más lento y con menos energía, pero posé la mayor cantidad de vida por lo que resiste varios golpes 
![Personaje_2](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/p2.png)
- Ligero este es más rápido, pero no tiene grandes habilidades acrobáticas,  
![Personaje_3](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/p3.png)
- El ultimo es la asesina, este tiene poca vitalidad, pero tiene una gran velocidad y habilidades acrobáticas pudiendo realizar muchos ataques en poco tiempo.
![Personaje_4](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/p4.png)

## 8.Mecánicas<a name="id8"></a>

### 8.1.Mecánicas generales del jugador<a name="id9"></a>
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

### 8.2.Mecánicas específicas del personaje<a name="id10"></a>
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

### 8.3.Mecánicas del modo de juego<a name="id11"></a>
** Duelo **

Dos equipos de N jugadores son enfrentados en lados opuestos. 

La partida acaba en un tiempo determinado y el equipo ganador será el que tanga mayor cantidad de puntos obtenidos. 

Cada equipo tiene una zona de anotación en los extremos del mapa, cuando un jugador con marcas llega a la zona de anotación del equipo contrario consume dicha cantidad de marcas para obtener puntos para su equipo.  

Las marcas se obtienen cuando un jugador mata a otro del equipo enemigo y son acumulables. 

Cuando un jugador muere pierde todas las marcas que ha acumulado y reaparece con un tiempo de reaparición a N distancia del jugador rival, pero en su lado del campo.

## 9.Mapas<a name="id12"></a>
El mapa principal sería de una taberna de estética medieval de ambiente animado y un mapa secundario de un bosque sombrío. 

Ambos escenarios tendrían una música de fondo acorde con su estética y de estilo 8 bits.

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

