import React from "react"
import { Card, Col, Row } from "antd"

const proyectosData = [
  {
    nombre: "Empresa",
    descripcion:
      "Proyecto Java para gestionar las nóminas y los empleados de una empresa",
    url: "https://github.com/Iricasper/Empresa",
  },
  {
    nombre: "Videoclub",
    descripcion:
      "Proyecto PHP con Laravel para la gestión de un videoclub, incluye CRUD, chat entre usuarios y modales para dejar opiniones",
    url: "https://github.com/SMDSFC2005/videoclub/tree/main-iris",
  },
  {
    nombre: "PeluControl",
    descripcion:
      "Proyecto React para gestionar clientes, incluye filtro dinámico, paginación y ordenación",
    url: "https://github.com/Iricasper/PeluControl",
  },
  {
    nombre: "Portfolio",
    descripcion: "La página web que estás viendo ahora mismo",
    url: "https://github.com/Iricasper/PortfolioPersonal",
  },
]

const Proyectos = () => (
  <div id="proyectos">
    <Row gutter={16}>
      {proyectosData.map((proyecto, index) => (
        <Col span={6} key={index}>
          <Card
            className="proyectos"
            title={proyecto.nombre}
            variant="borderless"
            style={{ width: "12vw", marginTop: "1em" }}
          >
            {proyecto.descripcion}
            <div style={{ textAlign: "center", marginTop: "1em" }}>
              <a href={proyecto.url} target="_blank">
                GitHub
              </a>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
)

export default Proyectos
