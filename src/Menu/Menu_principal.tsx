import  { useState, useEffect, FC } from 'react';
import Menu from './Components/Menu';
import { pages_settings } from './Components/Menu_Estructura';
//import WorkstationManager from './WorkstationManager'; // Importa el componente WorkstationManager

const Menu_principal: FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">
      {!isMobile && <Menu pages={pages_settings} isMobile={false} />}
      <main>
        {/* Aquí puedes renderizar el contenido de la página seleccionada */}
        {/*<WorkstationManager />*/}
      </main>
      {isMobile && <Menu pages={pages_settings} isMobile={true} />}
    </div>
  );
};

export default Menu_principal;