export class Ahorcado {
  private vidas: number = 6;
  private letrasAdivinadas: string[] = [];

  constructor(private palabraSecreta: string) {}

  adivinar(letra: string): void {
    if (this.letrasAdivinadas.includes(letra)) {
      return; 
    }
    this.letrasAdivinadas.push(letra);
    if (!this.palabraSecreta.includes(letra)) {
      this.vidas--;
    }
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