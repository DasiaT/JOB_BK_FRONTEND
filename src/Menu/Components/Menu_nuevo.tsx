import { FC } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { IMenuProps } from "../Interface/Imenu";
import { pages_settings } from "./Menu_Estructura";
import { NavLink, BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const Menu: FC<IMenuProps> = ({ pages = pages_settings }) => {
  const location = useLocation();
  if (location.pathname === "/") return null; // Ocultar menú inferior en la raíz

  return (
    <nav>
      <Box
        component="ul"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
          bgcolor: "white",
          boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 1000,
          overflowX: "auto",
          flexWrap: "nowrap",
          borderRadius: "16px 16px 0 0",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        {pages.map((page, index) => (
          <Box key={index} component="li" sx={{ flex: "1 1 auto", px: 1, listStyle: "none", textAlign: "center" }}>
            <NavLink
  to={page.path}
  style={({ isActive }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: isActive ? "#facc15" : "inherit",
    transition: "color 0.3s ease",
  })}
>
  {({ isActive }) => (
    <Box
      sx={{
        p: 1,
        borderRadius: "50%",
        bgcolor: isActive ? "#fef3c7" : "transparent",
        transition: "background-color 0.3s ease",
      }}
    >
      {page.icon}
    </Box>
  )}
</NavLink>

          </Box>
        ))}
      </Box>
    </nav>
  );
};

// Componente para la pantalla principal "/"
const HomeScreen: FC<{ pages: IMenuProps["pages"] }> = ({ pages }) => (
  <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", mb: 8 }}>
    <Typography variant="h5" sx={{ p: 2, fontWeight: "bold" }}>Calculador de Salario</Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, p: 2 }}>
      {pages.map((cat, index) => (
        <NavLink key={index} to={cat.path} style={{ textDecoration: "none", color: "inherit" }}>
          <Card sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: '#f3f4f6', borderRadius: 2, boxShadow: 2 }}>
            <CardMedia component="div">{cat.icon}</CardMedia>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" fontWeight="bold">{cat.label}</Typography>
            </CardContent>
          </Card>
        </NavLink>
      ))}
    </Box>
  </Box>
);

const Discovery: FC<IMenuProps> = ({ pages = pages_settings, isMobile }) => {
  return (
    <Router>
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Routes>
          <Route path="/" element={<HomeScreen pages={pages} />} />
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.content} />
          ))}
        </Routes>
        <Menu pages={pages} isMobile={isMobile} /> {/* Asegurar que se pase */}
      </Box>
    </Router>
  );
};


export default Discovery;
