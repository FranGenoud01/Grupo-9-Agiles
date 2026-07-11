# language: es
Característica: Dibujo progresivo del ahorcado

  Escenario: El dibujo avanza una etapa por cada error en dificultad normal
    Dado una partida con la palabra "GATO" en dificultad "normal"
    Cuando el jugador adivina la letra "Z"
    Entonces se ve el dibujo en la etapa 1