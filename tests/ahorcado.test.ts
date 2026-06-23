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
});