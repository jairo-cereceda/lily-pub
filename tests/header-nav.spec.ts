import { test, expect } from '@playwright/test';

test.describe('Header Navigation (Mobile)', () => {
  // Enforce mobile viewport
  test.use({ viewport: { width: 375, height: 667 } });

  test('should open, close via the close button, and properly handle ARIA attributes and focus', async ({
    page,
  }) => {
    await page.goto('/');

    const openBtn = page.locator('[data-action="open-nav"]');
    const closeBtn = page.locator('[data-action="close-nav"]');
    const navDrawer = page.locator('#main-nav');

    // Initial state on mobile
    await expect(openBtn).toBeVisible();
    await expect(openBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(navDrawer).toHaveAttribute('aria-hidden', 'true');
    await expect(navDrawer).toHaveClass(/translate-x-full/);

    // Open navigation drawer
    await openBtn.click();
    await expect(openBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(navDrawer).toHaveAttribute('aria-hidden', 'false');
    await expect(navDrawer).not.toHaveClass(/translate-x-full/);

    // Focus must move to the close button
    await expect(closeBtn).toBeFocused();

    // Close navigation drawer
    await closeBtn.click();
    await expect(openBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(navDrawer).toHaveAttribute('aria-hidden', 'true');
    await expect(navDrawer).toHaveClass(/translate-x-full/);

    // Focus must return to the open button
    await expect(openBtn).toBeFocused();
  });

  test('should close navigation drawer when pressing the Escape key', async ({
    page,
  }) => {
    await page.goto('/');

    const openBtn = page.locator('[data-action="open-nav"]');
    const navDrawer = page.locator('#main-nav');

    await openBtn.click();
    await expect(navDrawer).toHaveAttribute('aria-hidden', 'false');

    await page.keyboard.press('Escape');
    await expect(navDrawer).toHaveAttribute('aria-hidden', 'true');
    await expect(openBtn).toBeFocused();
  });
});

test.describe('Header Navigation (Desktop)', () => {
  // Enforce desktop viewport (>= 1024px)
  test.use({ viewport: { width: 1280, height: 800 } });

  test('should always display desktop navigation and hide the hamburger toggle button', async ({
    page,
  }) => {
    await page.goto('/');

    const openBtn = page.locator('[data-action="open-nav"]');
    const navDrawer = page.locator('#main-nav');

    await expect(openBtn).toBeHidden();
    await expect(navDrawer).toBeVisible();
    await expect(navDrawer).toHaveAttribute('aria-hidden', 'false');
  });
});
