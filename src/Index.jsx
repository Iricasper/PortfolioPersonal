import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import ReactDOM from "react-dom"
// import "./styles/index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./components/App.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Layout from "./components/Layout.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
)
