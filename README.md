# Fight 4 The Bill
## GrimGames-JR-Grupo9

### Ultima actualización 17/1/2022
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
9. [Mapas](#id12)
10. [Diagrama de clases](#id13)
11. [Ejecución de aplicación](#id14)
12. [Referencias](#id15)
13. [Bibliografia](#id16)

## 1.Historial de versiones<a name="id1"></a>
Versión 1.0.0 
- Creación y división del documento por apartados 

Versión 1.0.1 
- Desarrollo de los controles, apartado visual, personajes y mecánicas. 

Versión 1.0.2 
- Desarrollo de interfaces y apartado sonoro

Versión 1.0.3 
- Desarrollo del juego en local 

Versión 1.0.4
- Desarrollo del juego implementando APIRest 

Versión 1.0.5
- Mejoras de la implementación del juego, desarrollo online y mejoras de APIRest

## 2.Tecnología utilizada<a name="id2"></a>
Microsoft Word
Microsoft PowerPoint
Phaser 3 

## 3.Controles<a name="id3"></a>
- **Controles de movimiento.**

    - Movimiento a derecha jugador 1: Tecla D

    - Movimiento a izquierda jugador 1: Tecla A

    - Salto jugador 1: Tecla W
   
    - Movimiento a derecha jugador 2: Tecla >

    - Movimiento a izquierda jugador 2: Tecla <
    
    - Salto jugador 2: Tecla ^ 


- **Controles de combate.**

    - Ataque jugador 1: Tecla F 
    
    - Ataque jugador 2: Tecla M 

## 4.Apartado visual<a name="id4"></a>
Estilo píxel art.
64px altura fija / 64px ancho máximo de personajes.


## 5.Apartado sonoro<a name="id5"></a>
Música y sonidos retro y 8 bit 

Música tranquila en pantalla principal. 

Música frenética en pantalla de menú. 

Música frenética en pantalla de juego (música de taberna medieval) 

Música burlona en pantalla final de resultados 


## 6.Interfaz<a name="id6"></a>
Flujo de pantallas.

Esta imagen muestra la transición entre las distintas pantallas del juego 
![Flujo de pantallas](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/Flujo%20de%20pantallas.png)

Menú principal.

Esta pantalla muestra las opciones para el jugador, jugar una partida en local, multijugador, ver los créditos, etc... 
![Pantalla de titulo](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/menu%20v1.0.5%202%C2%BA.png)

Pantalla de login.

Esta es la pantalla del juego el usuario selecciona su cuenta ya creada.
![Pantalla de menú](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/LoginF.jpeg)

Pantalla de register.

Esta es la pantalla del juego el usuario crea su cuenta.
![Pantalla de menú](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/RegisterF.jpeg)

Pantalla de Lobby.

Esta es la pantalla del juego los usuarios eligen sus personajes.
![Pantalla de menú](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/LobbyF.jpeg)

Pantalla de final Multiplayer.

En esta pantalla se muestra al ganador y al perdedor de la partida, el botón inferior nos permite regresar a la pantalla de título. 
![Pantalla de selección de personaje](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/Pantalla%20Final.PNG)

Pantalla de final Local.

En esta pantalla se muestra al ganador y con los diferentes bontones navegamos entre pantallas.
![Pantalla de selección de personaje](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/YouWinF.jpeg)

Créditos.

En esta pantalla se muestra quienes hemos desarrollado el juego y nuestro papel en el proyecto. 
![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/Creditos.png)

Tutorial.

En esta pantalla se muestra los controles del juego. 
![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/Controles%20v1.0.5%202%C2%BA.jpeg)

Ragnar.

En esta pantalla se muestra la historia de Ragnar 
![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/ragnar%20men%C3%BA.jpeg)

Ranking.

En esta pantalla se muestra el ranking de los jugadores. 
![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/Ranking%20v1.0.5%202%C2%BA%20.png)

Lost Connection.

En esta pantalla se muestra cuando hay una perdida de conexión multijugador. 
![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/LostConnectionF.jpeg)

## 7.Personajes<a name="id7"></a>

Hay dos clases de personajes seleccionables, cada uno de ellos con características únicas:
- El Guerrero tiene una espada corta que le permite hacer ataques cortos, pero con más frecuencia. 
![Personaje_1](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/Jack.jpeg)
- El Berserker tiene una pesada hacha que le permite hacer ataques largos, pero con menos frecuencia. 
![Personaje_2](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/branch-Carlos/ImagenesGDD/MicrosoftTeams-image.png)


## 8.Mecánicas<a name="id8"></a>

### 8.1.Mecánicas generales del jugador<a name="id9"></a>
- Mecánicas básicas: 
Todos los jugadores cuentan con un punto de vida, por lo que mueren de un golpe, y para ganar tendrán que obtener más puntos que el equipo enemigo 

- Mecánicas de movimiento: 
Los jugadores podrán desplazarse con un movimiento lateral, realizar un salto con el que también podrán realizar movimiento lateral. 

- Mecánicas de combate: 
Los personajes pueden realizar un ataque lateral en la dirección en la que miran. Los ataques cuentan con dos características longitud de ataque y enfriamiento de ataque, cuanto más alcance tiene el ataque más enfriamiento tiene el ataque. 

### 8.2.Mecánicas específicas del personaje<a name="id10"></a>
Guerrero 
Rango de ataque: 1 unidades 

Berserker 
Rango de ataque: 2,5 unidades 

### 8.3.Mecánicas del modo de juego<a name="id11"></a>
Duelo

Dos jugadores son enfrentados en lados opuestos. 

La partida acaba en un tiempo determinado por el mapa y el equipo ganador será el que tanga mayor cantidad de puntos obtenidos. 

Cuando un jugador mata al otro del equipo enemigo obtiene un punto a su racha de bajas y son acumulables. 

Cada equipo tiene una zona de anotación en los extremos del mapa, cuando un jugador con racha de bajas llega a la zona de anotación del equipo contrario consume dicha cantidad de puntos de la racha para obtener puntos de victoria para su equipo.  

Cuando un jugador consigue matar a su adversario obtiene la iniciativa del combate por lo que la cámara se centrara en dicho jugador. 

Cuando un jugador muere pierde todos los puntos de su racha que ha acumulado y reaparece por su lateral del mapa en el borde de la cámara del jugador con la iniciativa.  

Cuando un jugador obtiene puntos el jugador enemigo obtiene la iniciativa. 

Si hay empate se añade 60 segundos de prórroga y se cambia de mapa. 

## 9.Mapas<a name="id12"></a>
El mapa principal sería de una taberna de estética medieval de ambiente animado y un mapa secundario de un bosque sombrío, el de la prórroga. 

Ambos escenarios tendrían una música de fondo acorde con su estética y de estilo 8 bits. 

El escenario de la Taberna serán partidas en modo normal de 3:30 minutos  

El escenario del Bosque sombrío serán partidas en modo masacre de 1 minuto para las prórrogaas 

## 10.Diagrama de clases<a name="id13"></a>
![Pantalla de juego ](https://github.com/Juanchinacio/GreenGames-JR-Grupo9/blob/main/ImagenesGDD/UML.png)

## 11.Ejecución de aplicación<a name="id14"></a>

Pasos:

1-  Abrir el spring tool suite.

2-  Seleccionar la carpeta del proyecto.

3-  Darle a launch.

4-  Click en F4TB -> Run As -> Spring Boot App.

5-  Poner la IP en el navegador.

## 12.Protocolo Websockets<a name="id15"></a>
En el cliente se crea un JSON con la info que hay que pasar, se transforma a string para enviarlo al servidor.
El servidor tiene varias funciones, AfterConexionEstablished se gestiona la info que se envia a los jugadores de la conexion de jugadores con un JSON,
AfterConexionClosed se gestiona la info que se envia a los jugadores de desconexion de jugadores con un JSON,
HandlertextMenssage gestiona el recevimiento de mensages y cuando los recive llama a SendOtherParticipants para reenviar el mensaje.

Mensajes gestionados desde el servidor:


-Mensaje para seleccionar personaje e indicar si estoy listo: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 0 

BoolListoPJ1 = (true/false) 

SkinIndex = (true/false) 



-Mensaje para enviar los inputs: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 1 

Derecha = int (0/1) 

Izquierda = (0/1) 

Salto = (0/1) 

Ataque = (0/1) 

Baile = (0/1) 

Idle = (0/1) 



-Mensaje para revancha: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 2 

Revancha = (true/false) 



-Mensaje anotación Jugador 1: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 10 



-Mensaje anotación Jugador 2: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 11



-Mensaje desconexión jugador: (enviado por servidor a los clientes) 

Atributos: 

Codigo = 22 



-Mensaje ambos jugadores conectados: (enviado por servidor a los clientes) 

Atributos: 

Codigo = 33 



-Mensaje jugador 1 muerto: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 667 



-Mensaje jugador 2 muerto: (enviado por cliente y reenviado por el servidor al otro cliente) 

Atributos: 

Codigo = 666 


-La gestion del cliente depende de los mensajes recividos

## 13.Referencias<a name="id16"></a>
Juegos de referencia: 
- Nidhogg 
- Head soccer 
- Pato juego 

## 14.Bibliografía<a name="id17"></a>
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

Elementos sonoros: 

-Ataque 

https://freesound.org/people/Abyssmal/sounds/35213/   

-Salto 

https://freesound.org/people/acebrian/sounds/380471/  

-Daño 

https://freesound.org/people/micahlg/sounds/413179/  
