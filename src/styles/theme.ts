// Design tokens and theme configuration
export const theme = {
  colors: {
    // Primary medieval palette
    primary: {
      gold: "#bfa76f",
      lightGold: "#e6c97a",
      darkGold: "#a67c52",
      bronze: "#d2b48c",
    },
    // Metal tones
    metal: {
      bronze: "#cd7f32",
      silver: "#c0c0c0",
      iron: "#4a4a4a",
    },
    // Nature palette
    nature: {
      forestGreen: "#2d4a2b",
      mossGreen: "#7c8a7f",
      earthBrown: "#6e5c3e",
      darkBrown: "#3a2712",
      woodBrown: "#4b3a1a",
    },
    // Background tones
    background: {
      dark: "#181818",
      mediumDark: "#2d2d2d",
      overlay: "rgba(24, 24, 24, 0.8)",
    },
    // Text colors
    text: {
      light: "#f5f5f5",
      gold: "#ffe082",
      darkBrown: "#3a2712",
      brown: "#4b3a1a",
      goldBrown: "#7c5e10",
    },
  },
  shadows: {
    cardGlow: "0 0 8px #bfa76f, 0 0 16px rgba(191, 167, 111, 0.6)",
    cardShadow:
      "0 8px 32px rgba(166, 124, 82, 0.13), 0 2px 8px rgba(191, 167, 111, 0.6), 0 1.5px 0 #bfa76f",
    cardHover:
      "0 12px 40px rgba(191, 167, 111, 0.8), 0 4px 16px rgba(230, 201, 122, 0.9), 0 0 24px rgba(191, 167, 111, 0.7)",
    textGlow: "0 4px 16px rgba(0, 0, 0, 0.8), 0 0 8px #bfa76f, 0 0 2px #fff",
  },
  fonts: {
    primary: '"UnifrakturCook", Georgia, serif',
  },
  borderRadius: {
    card: "18px 22px 16px 20px / 20px 16px 22px 18px",
  },
} as const;

export type Theme = typeof theme;
