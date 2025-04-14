export type Theme = Record<string, string>;

export function generateCSSVariables(theme: Theme): string {
  return Object.entries(theme)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join(" ");
}

export function applyThemeToRoot(theme: Theme) {
  const root = document.documentElement;
  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });
}
