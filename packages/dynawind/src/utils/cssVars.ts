/**
 * A key-value mapping representing a theme, where each key is the name of a CSS variable
 * (excluding the `--` prefix) and the value is the corresponding CSS value.
 */

export type Theme = Record<string, string>;

/**
 * Generates a string of CSS variable declarations for a given theme under the "color" scope.
 *
 * Each key-value pair is transformed into a CSS custom property with the format:
 * `--color-<key>: <value>;`.
 *
 * @param {Theme} theme - An object representing color theme variables.
 * @returns {string} A string containing CSS variable declarations.
 *
 * @example
 * generateSemanticColorCSSVariables({ primary: '#000', secondary: '#fff' });
 * // Returns: "--color-primary: #000; --color-secondary: #fff;"
 */
export function generateSemanticColorCSSVariables(theme: Theme): string {
  return generateCSSVariables("color", theme);
}

/**
 * Applies a color theme to the root element (`<html>`) by setting scoped CSS variables.
 *
 * Delegates to `applyThemeToRoot` using "color" as the scope.
 *
 * @param {Theme} theme - An object representing color theme variables.
 *
 * @example
 * applySemanticColorThemeToRoot({ primary: '#000', secondary: '#fff' });
 * // Sets --color-primary: #000; and --color-secondary: #fff; on the root element
 */
export function applySemanticColorThemeToRoot(theme: Theme): void {
  applyThemeToRoot("color", theme);
}

/**
 * Applies a scoped CSS theme to the root element (`<html>`) by setting custom properties.
 *
 * Each key-value pair in the `theme` object is converted into a CSS variable with the format:
 * `--<scope>-<key>` and applied to the `document.documentElement`.
 *
 * @param {string} scope - A namespace for the theme variables (e.g., "color", "typography").
 * @param {Theme} theme - An object representing theme properties where keys are CSS variable names
 *                        (without the leading `--`) and values are the corresponding CSS values.
 *
 * @example
 * applyThemeToRoot('color', {
 *   'primary': '#000',
 *   'secondary': '#fff'
 * });
 * // Sets --color-primary: #000; and --color-secondary: #fff on the root element
 */
export function applyThemeToRoot(scope: string, theme: Theme): void {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${scope}-${key}`, value);
  });
}

/**
 * Generates a string of scoped CSS variable declarations from a theme object.
 *
 * Each key-value pair is transformed into a CSS custom property with the format:
 * `--<scope>-<key>: <value>;`, which can be used directly in a `<style>` tag or a stylesheet.
 *
 * @param {string} scope - A namespace for the theme variables (e.g., "color", "typography").
 * @param {Theme} theme - An object representing theme variables and their corresponding values.
 * @returns {string} A string of CSS custom property declarations.
 *
 * @example
 * generateCSSVariables('color', {
 *   'primary': '#000',
 *   'secondary': '#fff'
 * });
 * // Returns: "--color-primary: #000; --color-secondary: #fff;"
 */
export function generateCSSVariables(scope: string, theme: Theme): string {
  return Object.entries(theme)
    .map(([key, value]) => `--${scope}-${key}: ${value};`)
    .join(" ");
}
