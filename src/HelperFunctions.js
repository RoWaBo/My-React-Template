import { useTheme } from "./contexts/ThemeContext";

export const ToggleTheme = () => {
    const { theme, setTheme } = useTheme();

    if (theme === "light") {
        setTheme("dark")
        localStorage.setItem("theme", "dark")
    } else {
        setTheme("light")
        localStorage.setItem("theme", "light")
    }
}