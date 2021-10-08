import { useThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from "@emotion/react";

const ToggleThemeBtn = () => {

    const { theme, setTheme } = useThemeContext()
    const { colors, font } = useTheme()

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }        
    }

    // === STYLING ===
    const buttonStyle = {
        display: 'grid',
        placeContent: 'center',
        backgroundColor: colors.light
    }

    const iconStyle = {
        fontSize: font.icon.m,
        color: colors.font.primary    
    }

    return ( 
        <Button onClick={toggleTheme} style={buttonStyle}>
            {theme === "light" ? <FiMoon style={iconStyle} /> : <FiSun style={iconStyle}/>}
        </Button> 
    );
}
 
export default ToggleThemeBtn;