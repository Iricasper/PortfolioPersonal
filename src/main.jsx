import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// import "./styles/index.css"
import "./styles/styles.css"
import App from "./components/App.jsx"
import Header from "./components/Header.jsx"
import InicioButton from "./components/BackTopButton.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <App />
    <InicioButton />
  </StrictMode>
)
