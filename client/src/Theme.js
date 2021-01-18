import React from "react";
import { ThemeProvider } from "theme-ui";
import merge from "deepmerge";
import { toTheme } from "@theme-ui/typography";
import githubTheme from "typography-theme-github";

const theme = merge(toTheme(githubTheme), {
  colors: {
    background: "#f7f7f7",
    content: "#ffffff",
    heading: "#42b0d6",
    label: "#42b0d6",
    button: "#e1fe83",
    title: "#ee94c6",
    text: "#4f4f4f",
    mainTitle: "#42b0d6",
    buttonText: "#4f4f4f",
    form: "#4f4f4f",
    modes: {
      dark: {
        background: "#000000",
        content: "#2b2b2b",
        text: "#878787",
        heading: "#ee94c6",
        label: "#878787",
        title: "#42b0d6",
        button: "#ee94c6",
        buttonText: "#000000",
        mainTitle: "#ffffff",
        form: "#ffffff"
      }
    }
  },
  forms: {
    label: {
      fontWeight: "bold",
      color: "label",
      fontSize: "0.9em"
    }
  },
  buttons: {
    primary: {
      m: 1,
      bg: "button",
      fontWeight: "bold",
      color: "buttonText",
      fontSize: "0.9em"
    },
    "&hover": {
      cursor: "pointer"
    }
  },
  styles: {
    progress: {
      color: "button"
    }
  },
  cards: {
    primary: {
      bg: "content",
      text: "text",
      boxShadow: "0 0 5px #cccccc"
    }
  },
  text: {
    default: {
      color: "text",
      fontSize: "0.9em"
    }
  },
  links: {
    footer: {
      color: "title",
      textDecoration: "none"
    }
  }
});

const Theme = (props) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Theme;
