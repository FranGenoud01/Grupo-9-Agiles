import { mountApp } from "./main";
import { elegirPalabra } from "../domain/Ahorcado";

const PALABRAS = ["PERRO", "CASA", "LUNA", "SOL", "AGUA", "MURCIÉLAGO", "NIÑO", "RÍO", "CORAZÓN", "MÚSICA", "ÁRBOL"];

const params = new URLSearchParams(window.location.search);
// Si no hay palabra en la URL, usa "GATO" por defecto
const wordParam = params.get("word");
const seedParam = params.get("seed");
const dificultad = params.get("dificultad") || "normal";

let palabra: string;
if (wordParam) {
  palabra = wordParam;
} else if (seedParam !== null) {
  palabra = elegirPalabra(PALABRAS, Number(seedParam));
} else {
  palabra = "GATO";
}

const appContainer = document.getElementById("app")!;
mountApp(appContainer, palabra, dificultad);