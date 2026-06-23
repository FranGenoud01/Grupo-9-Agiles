# language: es
Característica: Entrada inválida

  Escenario: El jugador ingresa un carácter que no es letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "8"
    Entonces se ven 6 vidas
    Y se ve el mensaje "Solo se permiten letras"

  Escenario: El jugador intenta jugar con la partida terminada
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "Z"
    Y el jugador adivina la letra "X"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "V"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "N"
    Y el jugador adivina la letra "A"
    Entonces se ve el mensaje "PERDISTE"
    Y se ven 0 vidas