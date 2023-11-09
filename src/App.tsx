import './App.css'
import Navbar from "./components/navBar/NavBar.tsx";
import Home from "./pages/home/Home.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
  return (
    <>
      <Navbar/>
        <Home/>
        <Footer/>
    </>
  )
}

export default App
