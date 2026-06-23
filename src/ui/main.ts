import { Ahorcado } from "../domain/Ahorcado";

// Para poder re-renderizar, instanciamos el juego fuera o lo pasamos como estado.
// Vamos a hacer una pequeña refactorización funcional:

let juego: Ahorcado;

export function mountApp(container: HTMLElement, palabra: string) {
  // Inicializamos el juego solo la primera vez
  if (!juego) {
    juego = new Ahorcado(palabra);
  }

  render(container);
}

function render(container: HTMLElement) {
  container.innerHTML = `
    <div>
      Palabra: <span data-testid="word">${juego.palabraEnmascarada()}</span>
    </div>
    <div>
      Vidas: <span data-testid="lives">${juego.vidasRestantes()}</span>
    </div>
    <div style="margin-top: 10px;">
      <input type="text" id="letra-input" maxlength="1" autofocus placeholder="Ingresá una letra">
    </div>
    <div style="margin-top: 20px; font-weight: bold; color: green;" data-testid="mensaje">
      ${juego.estado() === "GANASTE" ? "GANASTE" : ""}
    </div>
  `;

  const input = document.getElementById("letra-input") as HTMLInputElement;
  
  // Pequeña mejora: deshabilitar el input si el juego terminó
  if (juego.estado() !== "JUGANDO") {
    input.disabled = true;
  }

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value) {
      juego.adivinar(input.value.toUpperCase());
      render(container);
    }
  });
}
