import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createContext, useState, ReactNode } from "react";

// Crear un contexto para manejar el tema
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
  toggleTheme: () => {},
});

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Definir los temas
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#90caf9" },
      background: { default: "#121212", paper: "#1e1e1e" },
      text: { primary: "#fff" },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
