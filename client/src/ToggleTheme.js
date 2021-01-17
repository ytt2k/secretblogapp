/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode, Button } from "theme-ui";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

export default (props) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div sx={{ position: "absolute", top: 0, right: 0, margin: 3 }}>
      <header>
        <Button
          onClick={(e) => {
            setColorMode(colorMode === "default" ? "dark" : "default");
          }}
        >
          {colorMode === "default" ? (
            <TiWeatherNight size={20} sx={{ marginTop: 1 }} />
          ) : (
            <TiWeatherSunny size={20} sx={{ marginTop: 1 }} />
          )}
        </Button>
      </header>
    </div>
  );
};