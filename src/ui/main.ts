import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(container: HTMLElement, palabra: string) {
  const juego = new Ahorcado(palabra);

  container.innerHTML = `
    <div>
      Palabra: <span data-testid="word">${juego.palabraEnmascarada()}</span>
    </div>
    <div>
      Vidas: <span data-testid="lives">${juego.vidasRestantes()}</span>
    </div>
  `;
}