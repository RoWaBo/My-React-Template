import { useThemeContext } from "../contexts/ThemeContext";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const ToggleThemeBtn = ({ children }) => {

    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }        
    }

    // STYLE
    const style = ({ colors, font, spacing }) => css`
        padding: ${spacing.xs};
        font-size: ${font.size.m};
        background-color: ${colors.primary};
        color: ${colors.font.secondary};
        text-transform: uppercase;
        border: none;
        border-radius: 5px;
    `

    return ( <button onClick={toggleTheme} css={style}>{ children }</button> );
}
 
export default ToggleThemeBtn;