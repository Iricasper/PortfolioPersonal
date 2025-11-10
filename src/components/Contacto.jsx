import { Card } from "antd"
import React from "react"

const Contacto = () => {
  return (
    <footer id="contacto">
      <Card title="Contacto" style={{ width: "50vw", marginTop: "1em" }}>
        Puedes contactar conmigo por correo: <b>iriscasper00@gmail.com </b><br/>
        O en los siguientes sitios:
        <ul style={{ display: "flex", gap: 10, listStyle: "none" }}>
          <li><a href="https://www.linkedin.com/in/iris-c-b5834b368" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/Iricasper" target="_blank">GitHub</a></li>
        </ul>
      </Card>
    </footer>
  )
}

export default Contacto