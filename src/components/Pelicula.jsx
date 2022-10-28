import { Col, Card, Button } from "react-bootstrap";

const Cita = ({peli, borrarPelicula}) => {
   const {id,pelicula, genero, descripcion} = {...peli};

  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <Card.Body>
          <Card.Title>{pelicula}</Card.Title>
          <hr />
          <Card.Text>
            <b>Género: </b><span className="badge text-bg-info fw-light">{genero}</span>
            <br/>
            <b>Descripcion: </b>{descripcion}
          </Card.Text>
          <Button variant="outline-danger" onClick={()=> borrarPelicula(id)}>Borrar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cita;
