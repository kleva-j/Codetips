const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: false,
  theme: {
    screens: {
      sm: { min: "540px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px" },
    },
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      listStyleType: {
        disc: "'➾'",
        roman: "upper-roman",
        circle: "circle"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme(`colors.gray.300`),
            a: {
              "&:hover": {
                textTransform: "underline",
              },
            },
            pre: {
              backgroundColor: "#2e2f3e",
              whiteSpace: "pre-wrap",
            },
            code: {
              color: theme(`colors.teal.300`),
            },
            p: {
              code: {
                background: "black",
                padding: "8px",
                a: {
                  color: "red",
                },
              },
              textAlign: "justify",
            },
          },
        },
      }),
    },
    container: {
      center: true,
      padding: {
        default: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
    require("@tailwindcss/typography"),
  ],
};
