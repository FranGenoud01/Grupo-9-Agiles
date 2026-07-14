import { Ahorcado, etapaDibujo, elegirPalabra } from "../domain/Ahorcado";

let juego: Ahorcado;
let listaPalabras: string[];

export function mountApp(container: HTMLElement, palabra: string, dificultad: string = "normal", palabras: string[] = []) {
  listaPalabras = palabras;
  if (!juego) {
    juego = new Ahorcado(palabra, dificultad);
  }
  render(container);
}

function dibujarAhorcado(etapa: number): string {
  return `
    <svg width="160" height="200" viewBox="0 0 160 200" data-testid="dibujo-visual" data-etapa="${etapa}">
      <!-- Horca: siempre visible -->
      <line x1="10" y1="190" x2="110" y2="190" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="190" x2="30" y2="20" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>
      <line x1="30" y1="20" x2="90" y2="20" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>
      <line x1="90" y1="20" x2="90" y2="40" stroke="#8a8578" stroke-width="4" stroke-linecap="round"/>

      ${etapa >= 1 ? `<circle cx="90" cy="55" r="15" stroke="#d9534f" stroke-width="4" fill="none"/>` : ""}
      ${etapa >= 2 ? `<line x1="90" y1="70" x2="90" y2="120" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>` : ""}
      ${etapa >= 3 ? `<line x1="90" y1="85" x2="70" y2="105" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>` : ""}
      ${etapa >= 4 ? `<line x1="90" y1="85" x2="110" y2="105" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>` : ""}
      ${etapa >= 5 ? `<line x1="90" y1="120" x2="72" y2="150" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>` : ""}
      ${etapa >= 6 ? `<line x1="90" y1="120" x2="108" y2="150" stroke="#d9534f" stroke-width="4" stroke-linecap="round"/>` : ""}
    </svg>
  `;
}

function render(container: HTMLElement) {
  const errores = juego.vidasIniciales() - juego.vidasRestantes();
  const etapa = etapaDibujo(errores, juego.vidasIniciales());
  const estado = juego.estado();

  let colorMensaje: string;
  if (estado === 'GANASTE') {
    colorMensaje = 'green';
  } else if (estado === 'PERDISTE') {
    colorMensaje = 'red';
  } else {
    colorMensaje = 'orange';
  }
  container.innerHTML = `
    <div data-testid="dibujo" style="display:none">${etapa}</div>
    ${dibujarAhorcado(etapa)}
    <div>
      Palabra: <span data-testid="word">${juego.palabraEnmascarada()}</span>
    </div>
    <div>
      Vidas: <span data-testid="lives">${juego.vidasRestantes()}</span>
    </div>
    <div style="margin-top: 10px;">
      <input type="text" id="letra-input" maxlength="1" autofocus placeholder="Ingresá una letra">
      ${estado !== "JUGANDO" ? `<button id="btn-reiniciar" style="margin-top: 10px;">Jugar de nuevo</button>` : ""}
    </div>
    <div style="margin-top: 20px; font-weight: bold; color: ${colorMensaje};" data-testid="mensaje">
      ${estado !== "JUGANDO" ? estado : juego.advertencia()}
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
      const nuevaPalabra = listaPalabras.length > 0
        ? elegirPalabra(listaPalabras, Math.floor(Math.random() * listaPalabras.length))
        : "GATO";
      juego = new Ahorcado(nuevaPalabra);
      render(container);
      });
  }
}
