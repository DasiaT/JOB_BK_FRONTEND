import { FC, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Home, Bookmark, User, Utensils, Beer, Coffee, MapPin, Pizza } from "lucide-react";
import { IMenuProps } from "../Interface/Imenu";

const categories = [
  { name: "Bars & Hotels", places: 42, icon: <Beer size={32} />, bg: "#f3f4f6" },
  { name: "Fine Dining", places: 15, icon: <Utensils size={32} />, bg: "#f3f4f6" },
  { name: "Cafes", places: 28, icon: <Coffee size={32} />, bg: "#f3f4f6" },
  { name: "Nearby", places: 34, icon: <MapPin size={32} />, bg: "#facc15" },
  { name: "Fast Foods", places: 29, icon: <Utensils size={32} />, bg: "#f3f4f6" },
  { name: "Featured Foods", places: 21, icon: <Pizza size={32} />, bg: "#f3f4f6" },
];

const defaultPages = [
  { path: "/home", icon: <Home size={24} />, label: "Home", content: <></> },
  { path: "/discovery", icon: <MapPin size={24} style={{ color: "#facc15" }} />, label: "Discovery", content: <></> },
  { path: "/bookmark", icon: <Bookmark size={24} />, label: "Bookmark", content: <></> },
  { path: "/profile", icon: <User size={24} />, label: "Profile", content: <></> },
];

const Menu: FC<IMenuProps> = ({ pages = defaultPages, isMobile }) => {
    const [activePage, setActivePage] = useState<string>(pages[0].path); // Estado para la página activa
  
    return (
      <nav className={isMobile ? 'mobile-menu' : 'desktop-menu'}>
        <Box
          component="ul"
          sx={{
            display: "flex",
            justifyContent: "center", // Centra los elementos horizontalmente
            alignItems: "center", // Centra los elementos verticalmente
            p: 1, // Reduce el padding
            bgcolor: "white",
            boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.1)",
            position: "fixed",
            bottom: 0,
            left: 0, // Asegura que el menú comience desde el borde izquierdo
            right: 0, // Asegura que el menú termine en el borde derecho
            width: "100%", // Ocupa el ancho completo
            zIndex: 1000,
            overflowX: "auto",
            flexWrap: "nowrap",
            borderRadius: "16px 16px 0 0",
            borderTop: "1px solid #e0e0e0", // Borde superior
          }}
        >
          {pages.map((page, index) => (
            <Box
              key={index}
              component="li"
              sx={{
                flex: "1 1 auto", // Permite que los elementos se expandan uniformemente
                px: 1, // Reduce el padding horizontal
                listStyle: "none", // Elimina los estilos de lista
                textAlign: "center", // Centra el texto
              }}
            >
              <a
                href={page.path}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  color: activePage === page.path ? "#facc15" : "inherit", // Cambia el color si está activo
                  transition: "color 0.3s ease", // Transición suave
                }}
                onClick={(e) => {
                  e.preventDefault(); // Evita la recarga de la página
                  setActivePage(page.path); // Actualiza la página activa
                }}
              >
                <Box
                  sx={{
                    p: 1,
                    borderRadius: "50%",
                    bgcolor: activePage === page.path ? "#fef3c7" : "transparent", // Fondo si está activo
                    transition: "background-color 0.3s ease", // Transición suave
                  }}
                >
                  {page.icon}
                </Box>
                <Typography variant="caption" sx={{ mt: 0.5, fontSize: "0.75rem" }}>
                  {page.label}
                </Typography>
              </a>
            </Box>
          ))}
        </Box>
      </nav>
    );
  };

const Discovery: FC<{ pages?: IMenuProps["pages"], isMobile?: boolean }> = ({ pages = defaultPages, isMobile = false }) => {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", mb: 8 }}>
        <Typography variant="h5" sx={{ p: 2, fontWeight: "bold" }}>Discovery</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, p: 2 }}>
          {categories.map((cat, index) => (
            <Card key={index} sx={{ p: 2, display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: cat.bg, borderRadius: 2, boxShadow: 2 }}>
              <CardMedia component="div">{cat.icon}</CardMedia>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold">{cat.name}</Typography>
                <Typography variant="body2" color="textSecondary">{cat.places} Place</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Menu pages={pages} isMobile={isMobile} />
      </Box>
    );
  };

export default Discovery;