export class Ahorcado {
  constructor(private palabraSecreta: string) {}

  palabraEnmascarada(): string {
    return this.palabraSecreta.replace(/./g, "_ ").trim();
  }
}