import React from 'react'
import { Card } from 'antd'

const experienciaData = [
  {nombre: "Desarrolladora Web (Prácticas FP)", descripcion: "Aprendizaje y formación en diseño y construcción de aplicaciones web, utilizando principalmente PHP y Laravel.", duracion: "19/03/2025-30-05/2025", entidad: "Recursos Impulsa", web: "https://www.linkedin.com/company/recursos-impulsa"},
]

const Experiencia = () => (
  <Card id="experiencia" title="Experiencia" variant="borderless" style={{ width: "50vw", marginTop: "1em" }}>
    {experienciaData.map((experiencia, index) =>  (
        <Card type="inner" key={index} title={experiencia.nombre} style={{ marginBottom: "1em" }}>
          {experiencia.duracion} - <a href={experiencia.web} target='_blank'>{experiencia.entidad}</a><br/>
          {experiencia.descripcion}
        </Card >
    ))}
  </Card >
)

export default Experiencia