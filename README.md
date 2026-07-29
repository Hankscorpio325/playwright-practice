# Playwright Practice — QA Automation

Proyecto de práctica en automatización de pruebas end-to-end, creado mientras aprendo QA Automation. Incluye pruebas de login, un flujo completo de compra (checkout), y una prueba de búsqueda contra un sitio real de e-commerce (MercadoLibre), donde documenté cómo detectar y adaptar selectores cuando cambian.

## 🛠️ Tecnologías usadas

- **Playwright** — framework de automatización end-to-end
- **TypeScript** — lenguaje de las pruebas
- **Node.js** — entorno de ejecución
- **Page Object Model (POM)** — patrón de organización del código

## ✅ Qué cubren las pruebas

- **Login** (`tests/example.spec.ts`): casos de usuario válido, contraseña incorrecta, usuario bloqueado y campos vacíos, usando [SauceDemo](https://www.saucedemo.com) como sitio de práctica.
- **Flujo completo de compra**: desde login hasta confirmar una compra (end-to-end).
- **Búsqueda en sitio real** (`tests/pruebamercadolibre.ts`): automatización de una búsqueda de producto en MercadoLibre, incluyendo el proceso de encontrar un selector actualizado cuando el original dejó de funcionar.

## 📚 Aprendizajes y retos

- **Selectores que cambian con el tiempo:** mi primera prueba en MercadoLibre usaba un selector (`ol.ui-search-layout`) que ya no existe en el sitio actual. Aprendí a usar el DevTools del navegador y `npx playwright codegen` para encontrar el selector correcto (`a.poly-component__link`).
- **Detección anti-bot:** al automatizar MercadoLibre me encontré con un captcha que interrumpe la ejecución — es un comportamiento esperado en sitios de producción reales con protección anti-automatización, y lo documenté como parte del aprendizaje.
- **Control de versiones con Git:** este mismo repositorio fue mi primera vez usando Git de principio a fin (init, add, commit, branch, remote, push) desde la terminal.

## 🚀 Cómo correr el proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/Hankscorpio325/playwright-practice.git
cd playwright-practice
```

2. Instala las dependencias:

```bash
npm install
```

3. Instala los navegadores de Playwright:

```bash
npx playwright install
```

4. Corre las pruebas:

```bash
npx playwright test
```

5. Corre las pruebas viendo el navegador en acción:

```bash
npx playwright test --headed
```

6. Ver el reporte HTML con resultados detallados:

```bash
npx playwright show-report
```

## 📈 Siguientes pasos

- Agregar pruebas de eliminar productos del carrito
- Migrar la prueba de MercadoLibre al patrón Page Object Model
- Agregar pruebas con múltiples navegadores (Firefox, WebKit)
- Explorar automatización de pruebas de API con Playwright