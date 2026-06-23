# language: es
Característica: Fallar letra

  Escenario: El jugador ingresa una letra incorrecta
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 5 vidas