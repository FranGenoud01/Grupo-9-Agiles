import { describe, it, expect } from "vitest";
import { Ahorcado, elegirPalabra  } from "../src/domain/Ahorcado";

describe("Ahorcado - Iniciar Partida", () => {
  it("oculta todas las letras de la palabra al iniciar", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });

  it("inicia la partida con 6 vidas", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.vidasRestantes()).toBe(6);
  });

  it("revela la letra acertada en la palabra enmascarada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });

  it("descuenta una vida cuando la letra es incorrecta", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.vidasRestantes()).toBe(5);
  });

  it("indica que el juego esta ganado cuando se adivinan todas las letras", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");
    expect(juego.estado()).toBe("GANASTE");
  });

  it("indica que el juego esta perdido cuando se acaban las vidas", () => {
    const juego = new Ahorcado("GATO");
    ["Z", "X", "C", "V", "B", "N"].forEach(letra => juego.adivinar(letra));
    expect(juego.estado()).toBe("PERDISTE");
  });
  it("no descuenta vida si se repite una letra incorrecta ya intentada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    juego.adivinar("E");
    expect(juego.vidasRestantes()).toBe(5);
  });
  it("devuelve una advertencia si la letra ya fue intentada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    juego.adivinar("A");
    expect(juego.advertencia()).toBe("Ya intentaste con esa letra");
  });
  it("genera una advertencia y no penaliza si se ingresa un caracter no valido", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("8");
    expect(juego.vidasRestantes()).toBe(6);
    expect(juego.advertencia()).toBe("Solo se permiten letras");
  });
  it("ignora los intentos de adivinar si el juego ya termino", () => {
    const juego = new Ahorcado("GATO");
    ["Z", "X", "C", "V", "B", "N"].forEach(letra => juego.adivinar(letra));
    juego.adivinar("A");
    expect(juego.vidasRestantes()).toBe(0);
  });
});

describe("Ahorcado - Soporte de acentos", () => {
  it("revela una letra acentuada al ingresar la letra sin acento", () => {
    const juego = new Ahorcado("MURCIÉLAGO");
    juego.adivinar("E");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _ _ E _ _ _ _");
  });

  it("no descuenta vida al acertar una letra acentuada sin acento", () => {
    const juego = new Ahorcado("MURCIÉLAGO");
    juego.adivinar("E");
    expect(juego.vidasRestantes()).toBe(6);
  });

  it("permite ganar adivinando letras acentuadas sin acento", () => {
    const juego = new Ahorcado("CAFÉ");
    juego.adivinar("C");
    juego.adivinar("A");
    juego.adivinar("F");
    juego.adivinar("E");
    expect(juego.estado()).toBe("GANASTE");
  });

});

describe("SelectorDePalabra", () => {
  it("elige la palabra en la posición correspondiente al seed", () => {
    const palabras = ["PERRO", "CASA", "LUNA"];
    expect(elegirPalabra(palabras, 0)).toBe("PERRO");
    expect(elegirPalabra(palabras, 1)).toBe("CASA");
  });

  it("si el seed excede el largo de la lista, da la vuelta (módulo)", () => {
    const palabras = ["PERRO", "CASA", "LUNA"];
    expect(elegirPalabra(palabras, 3)).toBe("PERRO");
    expect(elegirPalabra(palabras, 4)).toBe("CASA");
  });
});

describe("Ahorcado - Jugar de nuevo", () => {
  it("reinicia las vidas al volver a jugar", () => {
    const juego = new Ahorcado("GATO");
    ["Z", "X", "C", "V", "B", "N"].forEach(letra => juego.adivinar(letra));
    juego.reiniciar();
    expect(juego.vidasRestantes()).toBe(6);
  });

  it("vuelve a ocultar la palabra al reiniciar", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.reiniciar();
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });

  it("el estado vuelve a JUGANDO al reiniciar", () => {
    const juego = new Ahorcado("GATO");
    ["Z", "X", "C", "V", "B", "N"].forEach(letra => juego.adivinar(letra));
    juego.reiniciar();
    expect(juego.estado()).toBe("JUGANDO");
  });
});

describe("Ahorcado - Niveles de dificultad", () => {
  it("inicia con 8 vidas en dificultad facil", () => {
    const juego = new Ahorcado("GATO", "facil");
    expect(juego.vidasRestantes()).toBe(8);
  });

  it("inicia con 6 vidas en dificultad normal", () => {
    const juego = new Ahorcado("GATO", "normal");
    expect(juego.vidasRestantes()).toBe(6);
  });

  it("inicia con 4 vidas en dificultad dificil", () => {
    const juego = new Ahorcado("GATO", "dificil");
    expect(juego.vidasRestantes()).toBe(4);
  });
});