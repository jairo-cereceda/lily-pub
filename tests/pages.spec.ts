import { test, expect } from '@playwright/test';

test.describe('Navigation and Main Pages', () => {
  test('Home page: should render correct title, hero video, and skip link', async ({
    page,
  }) => {
    await page.goto('/');

    // Page title validation
    await expect(page).toHaveTitle(
      'Lily Pub | Pub en la playa en El Puerto de Santa María'
    );

    // Skip to content link
    const skipLink = page.getByRole('link', {
      name: 'Ir al contenido principal',
    });
    await expect(skipLink).toHaveAttribute('href', '#main');

    // Hero section background video
    const video = page.locator('video');
    await expect(video).toBeVisible();

    // Marquee presence
    await expect(page.locator('#marquee')).toBeVisible();
  });

  test('About Us page: should load page title and main heading', async ({
    page,
  }) => {
    await page.goto('/about-us'); // Update path if your route is /sobre-nosotros

    await expect(page).toHaveTitle('Lily Pub | Sobre Nosotros');
    await expect(
      page.getByRole('heading', { level: 1, name: 'Sobre Nosotros' })
    ).toBeVisible();
  });

  test('Menu page: should render menu title and beverage sections', async ({
    page,
  }) => {
    await page.goto('/menu'); // Update path if your route is /carta

    await expect(page).toHaveTitle('Lily Pub | Carta');
    await expect(
      page.getByRole('heading', { level: 2, name: 'Nuestra Carta' })
    ).toBeVisible();
  });

  test('Contact page: should render contact form and WhatsApp reservation button', async ({
    page,
  }) => {
    await page.goto('/contact'); // Update path if your route is /contacto

    await expect(
      page.getByRole('heading', { level: 1, name: 'Contacto' })
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: /háblanos por whatsapp/i })
    ).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'Tu nombre:' })
    ).toBeVisible();
    await expect(
      page.getByRole('textbox', { name: 'Tu correo:' })
    ).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Mensaje:' })).toBeVisible();
  });
});
