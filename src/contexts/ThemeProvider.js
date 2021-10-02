import { ThemeProvider } from "@emotion/react";
import { useTheme } from "./ThemeContext";
import { darkTheme, lightTheme } from "../style/themes";
import font from "../style/font";
import spacing from "../style/spacing";

const Theme = ({ children }) => {

    const { theme: themeState } = useTheme()

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