import { ThemeProvider } from "@emotion/react";
import { useTheme } from "./ThemeContext";
import { darkTheme, lightTheme } from "../style/Themes";

const Theme = ({ children }) => {

    const { theme: themeState } = useTheme()

    const themeSelector = () => {
        if (themeState === "light") return lightTheme
        if (themeState === "dark") return darkTheme 
    }

    return (
        <ThemeProvider theme={themeSelector}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;