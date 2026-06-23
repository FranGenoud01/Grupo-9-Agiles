import { mountApp } from "./main";

const params = new URLSearchParams(window.location.search);
// Si no hay palabra en la URL, usa "GATO" por defecto
const palabra = params.get("word") || "GATO"; 

const appContainer = document.getElementById("app")!;
mountApp(appContainer, palabra);