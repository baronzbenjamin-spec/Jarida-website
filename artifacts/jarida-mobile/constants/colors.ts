/**
 * Semantic design tokens for the Jarida mobile app.
 *
 * Derived from the sibling web artifact (artifacts/jarida/src/index.css) so
 * both products share one visual identity: navy #283256 primary on a soft
 * blue #EBF2FF / #F5F8FF palette. The web app is light-only, so the mobile
 * app ships a single light palette and pins userInterfaceStyle to "light".
 */

const colors = {
  light: {
    // Legacy aliases (kept for backward compatibility)
    text: "#0F1322",
    tint: "#283256",

    // Core surfaces
    background: "#F5F8FF",
    foreground: "#0F1322",

    // Cards / elevated surfaces
    card: "#FFFFFF",
    cardForeground: "#0F1322",

    // Primary action color (buttons, links, active states) — brand navy
    primary: "#283256",
    primaryForeground: "#FFFFFF",

    // Secondary / less-emphasis interactive surfaces — soft blue
    secondary: "#EBF2FF",
    secondaryForeground: "#283256",

    // Muted / subdued elements (dividers, timestamps, placeholders)
    muted: "#EBEEF4",
    mutedForeground: "#5C668A",

    // Accent highlights (badges, selected items, focus rings)
    accent: "#EBF2FF",
    accentForeground: "#283256",

    // Positive / verified states
    success: "#E7F6EE",
    successForeground: "#1F9D57",

    // Warning / rating
    star: "#F5B400",

    // Destructive actions (delete, error states)
    destructive: "#EF4343",
    destructiveForeground: "#FFFFFF",

    // Borders and input outlines
    border: "#DEE3ED",
    input: "#DEE3ED",
  },

  // Border radius (in px). Synced from the web artifact's --radius: 1rem.
  radius: 16,
};

export default colors;
