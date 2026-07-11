import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  // Entra a la página inyectando la palabra secreta por la URL (el "seam" de test)
  await page.goto(`/?word=${palabra}`);
});

Given("una partida al azar con el seed {string}", async ({ page }, seed: string) => {
  // Seam para el azar: fija qué posición de la lista se elige, sin depender de Math.random
  await page.goto(`/?seed=${seed}`);
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

  if (await input.isDisabled()) {
    // Si está bloqueado, simulamos que el usuario presiona la tecla a nivel general en la página
    await page.keyboard.press(letra);
    await page.keyboard.press("Enter");
  } else {
    // Si está habilitado (juego normal), escribimos adentro de la caja de texto
    await input.fill(letra);
    await input.press("Enter");
  }
});

Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  // Buscamos un div específico para los mensajes de fin de juego
  await expect(page.getByTestId("mensaje")).toHaveText(mensaje);
});

When("el jugador hace click en {string}", async ({ page }, texto: string) => {
  await page.getByRole("button", { name: texto }).click();
});