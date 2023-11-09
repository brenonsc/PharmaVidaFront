import './App.css'
import Navbar from "./components/navBar/NavBar.tsx";
import Home from "./pages/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias.tsx";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria.tsx";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
