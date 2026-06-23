# language: es
Característica: Letra repetida

  Escenario: El jugador ingresa una letra que ya había intentado
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "E"
    Entonces se ven 5 vidas
    Y se ve el mensaje "Ya intentaste con esa letra"