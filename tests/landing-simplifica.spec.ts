import { test, expect } from "@playwright/test";

test.describe("Simplifica Group - Pruebas de Integración", () => {
  test.beforeEach(async ({ page }) => {
    // Navegación base para todos los tests
    await page.goto("http://localhost:5173");
  });

  // --- SECCIÓN: HERO / IMÁGENES PRINCIPALES ---
  test("Debe mostrar las 3 imágenes principales alineadas (Desktop)", async ({
    page,
  }) => {
    const imageContainer = page.locator("div.relative.z-20.flex-row");
    await expect(imageContainer).toBeVisible();

    const images = imageContainer.locator("img");
    await expect(images).toHaveCount(3);

    for (const img of await images.all()) {
      await expect(img).toBeVisible();
    }
  });

  // --- SECCIÓN: FORMULARIO DE CONTACTO ---
  test("El formulario debe enviar datos y mostrar el popup de éxito (Mocked)", async ({
    page,
  }) => {
    // Interceptamos EmailJS para no gastar cuota
    await page.route(
      "https://api.emailjs.com/api/v1.0/email/send",
      async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({ message: "OK" }),
        });
      },
    );

    await page.fill('input[placeholder="Tu nombre"]', "Fernando Test");
    await page.fill(
      'input[placeholder="correo@ejemplo.com"]',
      "test@simplifica.com",
    );

    const submitButton = page.locator('button:has-text("Enviar")');
    await submitButton.click();

    const popup = page.locator("text=¡Correo enviado con éxito!");
    await expect(popup).toBeVisible();

    await page.click('button:has-text("Entendido")');
    await expect(popup).not.toBeVisible();
  });

  test("Debe mostrar error de validación con email inválido", async ({
    page,
  }) => {
    await page.fill('input[placeholder="Tu nombre"]', "Fernando");
    await page.fill(
      'input[placeholder="correo@ejemplo.com"]',
      "correo-no-valido",
    );
    await page.click('button:has-text("Enviar")');

    const errorMessage = page.locator(
      "text=Por favor, ingresa un correo válido.",
    );
    await expect(errorMessage).toBeVisible();
  });

  // --- SECCIÓN: SNAP CAROUSEL ---
  test("Carrusel - Debe mostrar 6 slides en el DOM y configuración correcta", async ({
    page,
  }) => {
    const carousel = page.locator("#snap");
    await expect(carousel).toBeVisible();

    await page.setViewportSize({ width: 1280, height: 720 });
    const slides = carousel.locator(".carousel-slide");

    // Verifica que los 6 slides definidos en SnapCarousel.tsx existan
    await expect(slides).toHaveCount(6);

    // Verifica que el primer slide no se encoja (flex-shrink-0)
    const firstSlide = slides.first();
    await expect(firstSlide).toHaveCSS("flex-shrink", "0");
  });

  test("Carrusel - Scroll funcional en Móvil", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    const carouselBody = page.locator("#snap .carousel");

    // Verificamos que el contenedor sea "scrolleable" horizontalmente
    const isScrollable = await carouselBody.evaluate((el) => {
      return el.scrollWidth > el.clientWidth;
    });
    expect(isScrollable).toBe(true);

    // Ejecutamos scroll manual
    await carouselBody.evaluate((el) =>
      el.scrollBy({ left: 300, behavior: "smooth" }),
    );

    // Esperamos a que la animación de scroll smooth termine
    await page.waitForTimeout(600);

    // Verificamos que la posición de scroll ya no sea 0
    const scrollPos = await carouselBody.evaluate((el) => el.scrollLeft);
    expect(scrollPos).toBeGreaterThan(0);
  });

  // --- SECCIÓN: RESPONSIVIDAD Y CAPTURAS ---
  test("Prueba de Responsividad Móvil y Layout", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();

    const imageContainer = page.locator("div.relative.z-20.flex-row");
    const flexStyle = await imageContainer.evaluate(
      (el) => window.getComputedStyle(el).flexDirection,
    );
    expect(flexStyle).toBe("row");
  });

  test("Capturas visuales (Mobile & Desktop)", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshot-desktop.png", fullPage: true });

    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForLoadState("networkidle");
    await page.screenshot({ path: "screenshot-mobile.png", fullPage: true });
  });
});

// iniciar testing con: npx playwright test --ui
