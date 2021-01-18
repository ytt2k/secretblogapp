/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Link } from "theme-ui";

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
        made with 🤍 by&nbsp;
        <i>
          <Link
            variant="footer"
            href="https://github.com/ytt2k"
            target="_blank"
          >
            ytt2k
          </Link>
        </i>
      </footer>
    </div>
  );
};

export default Footer;
