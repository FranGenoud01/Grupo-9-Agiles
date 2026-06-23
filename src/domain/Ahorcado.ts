export class Ahorcado {
  private vidas: number = 6;
  private letrasAdivinadas: string[] = [];

  constructor(private palabraSecreta: string) {}

  adivinar(letra: string): void {
    this.letrasAdivinadas.push(letra);
    if (!this.palabraSecreta.includes(letra)) {
      this.vidas--;
    }
  }

  palabraEnmascarada(): string {
    return this.palabraSecreta
      .split("")
      .map(letra => this.letrasAdivinadas.includes(letra) ? letra : "_")
      .join(" ");
  }

  vidasRestantes(): number {
    return this.vidas;
  }
}