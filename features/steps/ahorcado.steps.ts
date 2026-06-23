import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  // Entra a la página inyectando la palabra secreta por la URL (el "seam" de test)
  await page.goto(`/?word=${palabra}`);
});

Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  // Busca en la pantalla un elemento con data-testid="word" y verifica su texto
  await expect(page.getByTestId("word")).toHaveText(esperada);
});

Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  // Busca en la pantalla un elemento con data-testid="lives" y verifica el número
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});

When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  // Playwright busca un input (textbox), tipea la letra y presiona Enter
  const input = page.getByRole("textbox");
  await input.fill(letra);
  await input.press("Enter");
});

Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  // Buscamos un div específico para los mensajes de fin de juego
  await expect(page.getByTestId("mensaje")).toHaveText(mensaje);
});