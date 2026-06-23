export class Ahorcado {
  private vidas: number = 6;
  private letrasAdivinadas: string[] = [];
  private mensajeAdvertencia: string = ""; // 1. Nueva propiedad para guardar el aviso

  constructor(private palabraSecreta: string) {}

  adivinar(letra: string): void {
    if (this.letrasAdivinadas.includes(letra)) {
      this.mensajeAdvertencia = "Ya intentaste con esa letra";
      return; 
    }
    if (!/^[a-zA-Z]$/.test(letra)) {
      this.mensajeAdvertencia = "Solo se permiten letras";
      return;
    }
    this.mensajeAdvertencia = "";
    this.letrasAdivinadas.push(letra);
    if (!this.palabraSecreta.includes(letra)) {
      this.vidas--;
    }
  }

  advertencia(): string {
    return this.mensajeAdvertencia;
  }

  vidasRestantes(): number {
    return this.vidas;
  }

  estado(): string {
    if (this.vidas === 0) {
      return "PERDISTE";
    }
    const faltanLetras = this.palabraSecreta.split("").some(letra => !this.letrasAdivinadas.includes(letra));
    if (!faltanLetras) {
      return "GANASTE";
    }
    return "JUGANDO";
  }

  palabraEnmascarada(): string {
    if (this.estado() === "PERDISTE") {
      return this.palabraSecreta.split("").join(" ");
    }
    return this.palabraSecreta
      .split("")
      .map(letra => this.letrasAdivinadas.includes(letra) ? letra : "_")
      .join(" ");
  }
}