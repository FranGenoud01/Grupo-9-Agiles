export class Ahorcado {
  private vidas: number = 6;
  private letrasAdivinadas: string[] = [];
  private mensajeAdvertencia: string = ""; // 1. Nueva propiedad para guardar el aviso
  private normalizar(letra: string): string {
  return letra.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
}

  constructor(private palabraSecreta: string) {}

  adivinar(letra: string): void {
    const letraNorm = this.normalizar(letra);
    if (this.letrasAdivinadas.includes(letraNorm)) {
      this.mensajeAdvertencia = "Ya intentaste con esa letra";
      return;
    }
    if (!/^[a-zA-Z]$/.test(letraNorm)) {
      this.mensajeAdvertencia = "Solo se permiten letras";
      return;
    }
    this.mensajeAdvertencia = "";
    this.letrasAdivinadas.push(letraNorm);
    if (!this.palabraSecreta.split("").some(l => this.normalizar(l) === letraNorm)) {
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
    const faltanLetras = this.palabraSecreta.split("").some(letra => !this.letrasAdivinadas.includes(this.normalizar(letra)));
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
      .map(letra => this.letrasAdivinadas.includes(this.normalizar(letra)) ? this.normalizar(letra) : "_")
      .join(" ");
  }
}