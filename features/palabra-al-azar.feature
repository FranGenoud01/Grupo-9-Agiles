# language: es
Característica: Palabra al azar

  Escenario: El juego elige una palabra de la lista usando el seed
    Dado una partida al azar con el seed "0"
    Entonces se ve la palabra "_ _ _ _ _"
    Y se ven 6 vidas