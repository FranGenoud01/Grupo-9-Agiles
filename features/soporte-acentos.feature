# language: es
Característica: Soporte de acentos

  Escenario: El jugador acierta una letra con acento
    Dado una partida con la palabra "MURCIÉLAGO"
    Cuando el jugador adivina la letra "E"
    Entonces se ve la palabra "_ _ _ _ _ E _ _ _ _"
    Y se ven 6 vidas