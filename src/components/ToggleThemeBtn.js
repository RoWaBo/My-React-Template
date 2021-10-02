import { useTheme } from "../contexts/ThemeContext";

const ToggleThemeBtn = ({ children }) => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            localStorage.setItem("theme", "dark")
        } else {
            setTheme("light")
            localStorage.setItem("theme", "light")
        }        
    }

    return ( <button onClick={toggleTheme}>{ children }</button> );
}
 
export default ToggleThemeBtn;