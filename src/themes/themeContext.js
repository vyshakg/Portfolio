import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themeStroe";

const defaultContextData = {
    dark: false,
    toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextData);

const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = useState({
        dark: false,
        hasThemeMounted: false,
    });

    useEffect(() => {
        let isDark = localStorage.getItem("dark");
        isDark = isDark === null || isDark === undefined ? false : isDark === "true";
        setThemeState({ ...themeState, dark: isDark, hasThemeMounted: true });
    }, [themeState]);

    return [themeState, setThemeState];
};

const CustomThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useEffectDarkMode();
    if (!themeState.hasThemeMounted) {
        return <div />;
    }

    const toggle = () => {
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark));
        setThemeState({ ...themeState, dark });
    };

    const computedTheme = themeState.dark ? theme("dark") : theme("light");

    return (
        <ThemeProvider theme={computedTheme}>
            <ThemeContext.Provider
                value={{
                    dark: themeState.dark,
                    toggle,
                    images: computedTheme.images,
                }}
            >
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export { useTheme, CustomThemeProvider };
