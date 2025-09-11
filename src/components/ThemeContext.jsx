import { createContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    useEffect(() => {
        document.body.className = isDarkMode ? "dark" : "light";
    }, [isDarkMode]);
    
    return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext