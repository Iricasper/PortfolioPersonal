import TranslateComponent from "./TranslateComponent"

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li> <a href="#sobre-mi">Sobre mí</a> </li>
          <li> <a href="#formacion">Formación</a> </li>
          <li> <a href="#experiencia">Experiencia</a> </li>
          <li> <a href="#habilidades">Habilidades</a> </li>
          <li> <a href="#certificados">Certificados</a> </li>
          <li> <a href="#idiomas">Idiomas</a> </li>
          <li> <a href="#proyectos">Mis Proyectos</a> </li>
          <li> <a href="#contacto">Contacto</a> </li>
          <li> <TranslateComponent /> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
