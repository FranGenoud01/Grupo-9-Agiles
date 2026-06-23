import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, Then } = createBdd();

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