export type Theme = Record<string, string>;

export function generateSemanticColorCSSVariables(theme: Theme): string {
  return generateCSSVariables("color", theme);
}

export function applySemanticColorThemeToRoot(theme: Theme): void {
  applyThemeToRoot("color", theme);
}

export function applyThemeToRoot(scope: string, theme: Theme): void {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${scope}-${key}`, value);
  });
}

export function generateCSSVariables(scope: string, theme: Theme): string {
  return Object.entries(theme)
    .map(([key, value]) => `--${scope}-${key}: ${value};`)
    .join(" ");
}
