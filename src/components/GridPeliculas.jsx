import React from "react";
import { Row } from "react-bootstrap";
import Pelicula from "./Pelicula";

const GridPeliculas = ({ peliculas, borrarPelicula }) => {
  return (
    <Row>
      {peliculas.map((pelicula) => (
        <Pelicula key={pelicula.id} peli={pelicula} borrarPelicula={borrarPelicula}></Pelicula>
      ))}
    </Row>
  );
};

export default GridPeliculas;
