export class Ahorcado {
  private vidas: number = 6;

  constructor(private palabraSecreta: string) {}

  palabraEnmascarada(): string {
    return this.palabraSecreta.replace(/./g, "_ ").trim();
  }

  vidasRestantes(): number {
    return this.vidas;
  }
}