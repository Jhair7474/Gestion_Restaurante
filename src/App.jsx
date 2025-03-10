import { useState } from "react";
import Rutas from "./components/routes/Rutas";
import Footer from "./components/footer/Footer";
import Navegador from "./components/navegador/Navegador";
import UsersContext from "./context/UsersContext";
import ReservaContext from "./context/ReserveContext";
import BotonSubir from "./components/botonSubir/BotonSubir";
import DarkModeButton from "./components/DarkModeButton"; // <-- Importamos el botón de modo oscuro

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <UsersContext>
        <ReservaContext>
          <Navegador />
          <DarkModeButton toggleDarkMode={toggleDarkMode} /> {/* Botón de modo oscuro */}
          <Rutas />
          <Footer />
          <BotonSubir />
        </ReservaContext>
      </UsersContext>
    </>
  );
}

export default App;
