import { generateCSSVariables, applyThemeToRoot, wrapInRoot } from "../cssVars";

describe("applyThemeToRoot", () => {
  let setPropertySpy: jest.SpyInstance;

  beforeEach(() => {
    setPropertySpy = jest.spyOn(document.documentElement.style, "setProperty");
  });

  afterEach(() => {
    setPropertySpy.mockRestore();
  });

  it("should apply CSS custom properties to the root element", () => {
    const theme = {
      primary: "#000",
      secondary: "#fff",
    };
    const scope = "color";

    applyThemeToRoot(scope, theme);

    expect(setPropertySpy).toHaveBeenCalledWith("--color-primary", "#000");
    expect(setPropertySpy).toHaveBeenCalledWith("--color-secondary", "#fff");
  });

  it("should handle an empty theme object", () => {
    const theme = {};
    const scope = "color";

    applyThemeToRoot(scope, theme);

    expect(setPropertySpy).not.toHaveBeenCalled();
  });
});

describe("generateCSSVariables", () => {
  it("should generate correct CSS variables for a theme", () => {
    const theme = {
      primary: "#000",
      secondary: "#fff",
    };
    const scope = "color";

    const result = generateCSSVariables(scope, theme);

    expect(result).toBe("--color-primary: #000; --color-secondary: #fff;");
  });

  it("should handle empty theme object", () => {
    const theme = {};
    const scope = "color";

    const result = generateCSSVariables(scope, theme);
    expect(result).toBe("");
  });

  it("should generate correct CSS variables for different scopes", () => {
    const typographyTheme = {
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
    };
    const colorTheme = {
      primary: "#000",
      secondary: "#fff",
    };

    const typographyResult = generateCSSVariables(
      "typography",
      typographyTheme
    );
    const colorResult = generateCSSVariables("color", colorTheme);

    expect(typographyResult).toBe(
      "--typography-fontSize: 16px; --typography-fontFamily: Arial, sans-serif;"
    );
    expect(colorResult).toBe("--color-primary: #000; --color-secondary: #fff;");
  });
});

describe("wrapInRoot", () => {
  it("should wrap an array of CSS variables inside :root", () => {
    const theme = {
      primary: "#000",
      secondary: "#fff",
    };
    const scope = "color";

    const result = generateCSSVariables(scope, theme);
    const resultWrapInRoot = wrapInRoot([result]);

    expect(resultWrapInRoot).toBe(
      ":root { --color-primary: #000; --color-secondary: #fff; }"
    );
  });

  it("should handle empty array", () => {
    const theme = {};
    const scope = "color";

    const result = generateCSSVariables(scope, theme);
    const resultWrapInRoot = wrapInRoot([result]);

    expect(resultWrapInRoot).toBe(":root {  }");
  });
});
