import React from "react";
import "./Pagina_principal.css";

export default function Pagina_principal(props) {
  console.log(
    `Las propiedades del componente Header son: ${JSON.stringify(props)}`
  );

  return <h1 className="pagina_principal">{props.titulo}</h1>;
}
