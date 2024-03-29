export type ThemeType = typeof theme;

export const theme = {
  logo: "var(--logo-image)",
  text: {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    tertiary: "var(--text-tertiary)",
    onBg: "var(--text-on-bg)",
  },
  bg: {
    primary: "var(--bg-primary)",
    secondary: "var(--bg-secondary)",
  },
  color: {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    success: "var(--success)",
    danger: "var(--danger)",
    error: "var(--error)",
    warning: "var(--warning)",
  },
  shadow: {
    primary: "var(--primary-shadow)",
    success: "var(--success-shadow)",
    danger: "var(--danger-shadow)",
    warning: "var(--warning-shadow)",
  },
  border: {
    color: "var(--border-color)",
    default: "1px solid var(--border-color)",
  },

  overlay: "var(--overlay)",
  boxShadow: `box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);`,
};

export type UIVariant = keyof typeof theme.color;
export default theme;
