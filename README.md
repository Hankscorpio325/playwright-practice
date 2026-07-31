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
- **Selección aleatoria de producto y verificación en carrito** (`tests/saucedemo.spec.ts`): elige un producto al azar del inventario, extrae su nombre, precio y descripción, lo agrega al carrito, y compara los datos mostrados en el carrito contra los datos originales del producto seleccionado. Incluye validaciones de formato (regex de precio) y de contenido (longitud de descripción, campos no vacíos).
- **Búsqueda y extracción de datos en sitio real** (`tests/pruebamercadolibre.spec.ts`): automatización de una búsqueda de producto en MercadoLibre, incluyendo el proceso de encontrar un selector actualizado cuando el original dejó de funcionar, y extracción de todos los títulos de resultados con `allInnerTexts()` para validar el contenido devuelto por el sitio.
- **Pruebas cruzadas en múltiples navegadores** (`tests/test-1.spec.ts`, `test-2.spec.ts`, `test-3.spec.ts`): ejercicios adicionales de práctica corridos en Chromium, Firefox y WebKit.

## 📚 Aprendizajes y retos

- **Selectores que cambian con el tiempo:** mi primera prueba en MercadoLibre usaba un selector (`ol.ui-search-layout`) que ya no existe en el sitio actual. Aprendí a usar el DevTools del navegador y `npx playwright codegen` para encontrar los selectores correctos y actualizados (`a.poly-component__link` para el link del producto, y `a.poly-component__title` para extraer el texto del título).
- **Detección anti-bot:** al automatizar MercadoLibre me encontré con un captcha que interrumpe la ejecución en algunas corridas — es un comportamiento esperado en sitios de producción reales con protección anti-automatización.
- **Comportamiento distinto según el navegador:** al correr la misma prueba en Chromium, Firefox y WebKit, detecté que MercadoLibre bloqueó la automatización específicamente en Chromium en una de las corridas, mientras que Firefox y WebKit pasaron sin problema. Esto sugiere que los sistemas anti-bot de sitios de producción reales pueden aplicar reglas de detección distintas según el navegador usado, un hallazgo relevante a la hora de diseñar suites de pruebas cross-browser.
- **Extracción y validación de datos reales:** usando `allInnerTexts()` sobre el listado de resultados, la prueba capturó decenas de títulos de productos reales (nombres, capacidades, colores) directamente del DOM, confirmando que el selector no solo detecta el elemento sino que también recupera el contenido esperado.
- **Organización de archivos de prueba:** aprendí que Playwright solo reconoce como archivo de prueba ejecutable aquellos con el sufijo `.spec.ts` (o `.test.ts`) en el nombre — un archivo `.ts` normal, aunque tenga código de prueba válido, no aparece en el Test Runner ni se ejecuta con `npx playwright test`.
- **Control de versiones con Git:** este mismo repositorio fue mi primera vez usando Git de principio a fin (init, add, commit, branch, remote, push, rename de archivos) desde la terminal.
- **Orden de declaración de variables:** al construir la prueba de selección aleatoria en SauceDemo, tuve un error de sintaxis por usar una variable (`itemsContainer`) antes de declararla con `const`. Aprendí que en JavaScript/TypeScript el orden de declaración importa, y que `.all()` sobre un locator devuelve una Promise que debe resolverse con `await` antes de tratarlo como un arreglo.
- **De extraer datos a validar datos:** mi primera versión de la prueba de SauceDemo solo imprimía los datos del producto en consola (`console.log`) sin verificar nada — técnicamente una prueba así nunca puede fallar. Añadí aserciones (`expect`) que comparan los datos del producto seleccionado contra los datos mostrados en el carrito, y validaciones de formato (regex para el precio, longitud mínima de la descripción), convirtiendo el ejercicio de un script de scraping a una prueba de QA real.

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

- Migrar las pruebas de SauceDemo y MercadoLibre al patrón Page Object Model
- Investigar estrategias para reducir la detección anti-bot en Chromium (delays, user-agent, modo stealth)
- Explorar automatización de pruebas de API con Playwright
- Configurar un pipeline de CI/CD (GitHub Actions) para correr las pruebas automáticamente en cada push

---

📍 Proyecto desarrollado por Enrique Valenzuela como parte de mi transición hacia QA Automation.
[LinkedIn](https://www.linkedin.com/in/enrique-de-la-rosa-2026a6288)
