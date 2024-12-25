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

test("should delete the first todo item", async ({ page }) => {
  await page.goto("/");
  await page.waitForSelector(".ant-list-item", { state: "visible" });
  const firstTodo = page.locator(".ant-list-item").first();
  const firstTodoText = await firstTodo.locator(".ant-list-item-meta-title").innerText();
  await firstTodo.locator("button:has-text('Delete')").click();
  await page.waitForSelector(".ant-popconfirm-inner-content", { state: "visible" });
  await page.click(".ant-popconfirm-buttons .ant-btn-primary");
  await expect(page.locator(`text=${firstTodoText}`)).not.toBeVisible();
});
