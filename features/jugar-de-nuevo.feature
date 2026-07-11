# language: es
Característica: Jugar de nuevo

  Escenario: El jugador reinicia la partida después de perder
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "Z"
    Y el jugador adivina la letra "X"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "V"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "N"
    Y el jugador hace click en "Jugar de nuevo"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas