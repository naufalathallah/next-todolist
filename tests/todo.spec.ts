import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("should create a new todo", async ({ page }) => {
  const randomTodo = faker.lorem.sentence();

  await page.goto("/");
  await page.waitForSelector(".ant-empty-description", { state: "detached" });
  await page.fill('input[placeholder="Add a new todo"]', randomTodo);
  await page.press('input[placeholder="Add a new todo"]', "Enter");
  await page.waitForSelector(`text=${randomTodo}`);
  await expect(page.locator(`text=${randomTodo}`)).toBeVisible();
});
