import { Route, Routes } from 'react-router-dom';
import Galeria from '../../page/galeria/Galeria';
import Admin from '../../page/admin/Admin';
import Register from "../../page/register/Register";
import Home from '../../page/home/Home';
import Error404 from '../../page/error404/Error404';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/galeria' element={<Galeria />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default Rutas;
