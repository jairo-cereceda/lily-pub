// tests/popup.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Fictional Popup (Demo Notice Modal)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should open when clicking the WhatsApp button and close via the close button', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const openBtn = page.getByRole('button', {
      name: /háblanos por whatsapp/i,
    });
    const closeBtn = page.locator('#fictional-popup-close');

    await expect(dialog).not.toHaveAttribute('open', '');

    await openBtn.scrollIntoViewIfNeeded();
    await openBtn.click();
    await expect(dialog).toHaveAttribute('open', '');
    await expect(page.locator('body')).toHaveClass(/overflow-hidden/);

    await expect(
      page.getByText('¡Atención! La web que está visualizando es una DEMO')
    ).toBeVisible();

    await closeBtn.click();
    await expect(dialog).not.toHaveAttribute('open', '');
    await expect(page.locator('body')).not.toHaveClass(/overflow-hidden/);
  });

  test('should open when clicking "Enviar" in the contact form and close on Escape key', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const submitBtn = page.getByRole('button', { name: 'Enviar' });

    // Ensure button is scrolled into view and visible in mobile viewports
    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();
    await expect(dialog).toHaveAttribute('open', '');

    // Close modal via Escape key
    await page.keyboard.press('Escape');
    await expect(dialog).not.toHaveAttribute('open', '');
  });

  test('should close when clicking on the backdrop outside the modal card', async ({
    page,
  }) => {
    const dialog = page.locator('#fictional-popup');
    const submitBtn = page.getByRole('button', { name: 'Enviar' });

    await submitBtn.scrollIntoViewIfNeeded();
    await submitBtn.click();
    await expect(dialog).toHaveAttribute('open', '');

    // Click on top-left area of the modal backdrop (outside the inner content box)
    await dialog.click({ position: { x: 10, y: 10 } });
    await expect(dialog).not.toHaveAttribute('open', '');
  });
});
