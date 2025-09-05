import React, { useContext } from 'react'
import ThemeContext from './ThemeContext';

export default function ThemeSwitcher() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <div>
            <button onClick={toggleTheme}>
                {isDarkMode ? "Light" : "Dark"} Mode
                </button>
        </div>
    )
}
