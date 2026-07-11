import { Ahorcado } from "../domain/Ahorcado";

// Para poder re-renderizar, instanciamos el juego fuera o lo pasamos como estado.
// Vamos a hacer una pequeña refactorización funcional:

let juego: Ahorcado;

export function mountApp(container: HTMLElement, palabra: string, dificultad: string = "normal") {
  if (!juego) {
    juego = new Ahorcado(palabra, dificultad);
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
      ${juego.estado() !== "JUGANDO" ? `<button id="btn-reiniciar" style="margin-top: 10px;">Jugar de nuevo</button>` : ""}
    </div>
    <div style="margin-top: 20px; font-weight: bold; color: ${juego.estado() === 'GANASTE' ? 'green' : juego.estado() === 'PERDISTE' ? 'red' : 'orange'};" data-testid="mensaje">
      ${juego.estado() !== "JUGANDO" ? juego.estado() : juego.advertencia()}
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

  const btnReiniciar = document.getElementById("btn-reiniciar");
  if (btnReiniciar) {
    btnReiniciar.addEventListener("click", () => {
      juego.reiniciar();
      render(container);
    });
  }
}
