import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home";
import { Nosotros } from "./pages/nosotros";
import { Servicios } from "./pages/servicios";
import { Contacto } from "./pages/contacto";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
}

export default App;
