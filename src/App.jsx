import { useState } from "react";
import Rutas from "./components/routes/Rutas";
import Footer from "./components/footer/Footer";
import Navegador from "./components/navegador/Navegador";
import UsersContext from "./context/UsersContext";
import ReservaContext from "./context/ReserveContext";
import BotonSubir from "./components/botonSubir/BotonSubir";
import AlertButton from "./components/AlertButton"; 

function App() {

  return (
    <>
      <UsersContext>
        <ReservaContext>
          <Navegador />
          <AlertButton /> 
          <Rutas />
          <Footer />
          <BotonSubir />
        </ReservaContext>
      </UsersContext>
    </>
  );
}

export default App;
