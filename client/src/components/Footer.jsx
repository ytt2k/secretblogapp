/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => {
  return (
    <div
      sx={{
        width: "100%"
      }}
    >
      <footer
        sx={{
          fontSize: 1,
          bg: "primary",
          color: "label",
          textAlign: "right",
          px: 1,
          py: 1,
          bottom: 0,
          width: "100%"
        }}
      >
        made with 🤍 by <i>ytt2k</i>
      </footer>
    </div>
  );
};

export default Footer;
