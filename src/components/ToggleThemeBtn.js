import { useThemeContext } from "../contexts/ThemeContext";
import Button from "./Button";

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

    return ( <Button onClick={toggleTheme}>{ children }</Button> );
}
 
export default ToggleThemeBtn;