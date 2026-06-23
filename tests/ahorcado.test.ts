import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

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