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
});