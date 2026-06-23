/**
 * Font family names. These strings must match the keys passed to useFonts()
 * in app/_layout.tsx. Plus Jakarta Sans (body) + Playfair Display (serif
 * display accents) mirror the sibling web artifact's typography.
 */
export const fonts = {
  regular: "PlusJakartaSans_400Regular",
  medium: "PlusJakartaSans_500Medium",
  semibold: "PlusJakartaSans_600SemiBold",
  bold: "PlusJakartaSans_700Bold",
  extrabold: "PlusJakartaSans_800ExtraBold",
  serif: "PlayfairDisplay_600SemiBold",
  serifMedium: "PlayfairDisplay_500Medium",
  serifItalic: "PlayfairDisplay_500Medium_Italic",
} as const;
