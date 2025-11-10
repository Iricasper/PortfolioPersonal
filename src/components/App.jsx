//import logo from "./logo.svg"
import "../styles/App.css"
import Certificados from "./Certificados"
import Contacto from "./Contacto"
import Experiencia from "./Experiencia"
import Formacion from "./Formacion"
import Habilidades from "./Habilidades"
import Idiomas from "./Idiomas"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"

function App() {
  return (
    <div className="App">
      <SobreMi />
      <Formacion />
      <Experiencia />
      <Habilidades />
      <Certificados />
      <Idiomas />
      <Proyectos />
      <Contacto />
    </div>
  )
}

export default App
