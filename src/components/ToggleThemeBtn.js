import { useThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from "@emotion/react";
import { LightenDarkenColor } from "../helperFunctions";

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
        padding: '.5rem',
        display: 'grid',
        placeContent: 'center',
<<<<<<< HEAD
        borderRadius: '50%',
        backgroundColor: theme === "light" ? colors.light : LightenDarkenColor(colors.background.primary, 40)  
=======
        backgroundColor: theme === "light" ? colors.grey.light : LightenDarkenColor(colors.background.primary, 40)  
>>>>>>> e5fc3d67dde4ea1894be1af2f59ad79755681803
    }

    const iconStyle = {
        fontSize: font.icon.m,
        color: colors.font.primary.main    
    }

    return ( 
        <Button onClick={toggleTheme} style={buttonStyle}>
            {theme === "light" ? <FiMoon style={iconStyle} /> : <FiSun style={iconStyle}/>}
        </Button> 
    );
}
 
export default ToggleThemeBtn;