import { ThemeProvider } from "@emotion/react";
import { useThemeContext } from "./ThemeContext";
import { darkTheme, lightTheme } from "../style/themes";
import font from "../style/font";
import spacing from "../style/spacing";

const Theme = ({ children }) => {

    const { theme: themeState } = useThemeContext()

    const themeSelector = () => {
        if (themeState === "light") return {...lightTheme, font, spacing} 
        if (themeState === "dark") return {...darkTheme, font, spacing} 
    }

    return (
        <ThemeProvider theme={themeSelector}>
            {children}
        </ThemeProvider>
    );
}

export default Theme;