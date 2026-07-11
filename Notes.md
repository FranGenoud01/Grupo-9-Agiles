# NOTES.md

## Lista de UTs por AT

### AT 1 — Iniciar partida
- oculta todas las letras de la palabra al iniciar
- inicia la partida con 6 vidas

### AT 2 — Acertar letra
- revela la letra acertada en la palabra enmascarada

### AT 3 — Fallar letra
- descuenta una vida cuando la letra es incorrecta

### AT 4 — Ganar partida
- indica que el juego esta ganado cuando se adivinan todas las letras

### AT 5 — Perder partida
- indica que el juego esta perdido cuando se acaban las vidas
- ignora los intentos de adivinar si el juego ya termino

### AT 6 — Letra repetida
- no descuenta vida si se repite una letra incorrecta ya intentada
- devuelve una advertencia si la letra ya fue intentada

### AT 7 — Entrada inválida
- genera una advertencia y no penaliza si se ingresa un caracter no valido

### AT 8 — Soporte de acentos
- revela una letra acentuada al ingresar la letra sin acento
- no descuenta vida al acertar una letra acentuada sin acento
- permite ganar adivinando letras acentuadas sin acento

### AT 9 — Palabra al azar
- elige la palabra en la posición correspondiente al seed
- si el seed excede el largo de la lista, da la vuelta (módulo)

### AT 10 — Jugar de nuevo
- reinicia las vidas al volver a jugar
- vuelve a ocultar la palabra al reiniciar
- el estado vuelve a JUGANDO al reiniciar

### AT 11 — Niveles de dificultad
- inicia con 8 vidas en dificultad facil
- inicia con 6 vidas en dificultad normal
- inicia con 4 vidas en dificultad dificil

### AT 12 — Dibujo progresivo del ahorcado
- en dificultad normal (6 vidas), cada error avanza una etapa exacta
- en dificultad dificil (4 vidas), los errores avanzan etapas con salto por redondeo
- en dificultad facil (8 vidas), algunos errores no avanzan etapa