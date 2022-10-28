import { useEffect, useState } from "react";
import { Form, Button, Col, Row, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import GridPeliculas from "./GridPeliculas";

const FormPelicula = () => {
  const peliculaLS = JSON.parse(localStorage.getItem("peliculasVet")) || [];
  const [peliculas, setPeliculas] = useState(peliculaLS);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    localStorage.setItem("peliculasVet", JSON.stringify(peliculas));
  });

  const onSubmit = (data) => {
    data.id = uuidv4();
    setPeliculas([...peliculas, data]);
    reset();
  };

  const borrarPelicula = (id) => {
    const peliculasActualizadas = peliculas.filter((pelicula) => pelicula.id !== id);
    setPeliculas(peliculasActualizadas);
  };
  return (
    <>
      <Card>
        <Card.Header className="fw-bold">
          Llenar el formulario para crear una pelicula
        </Card.Header>
        <Card.Body>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Pelicula:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Thor: Love and Thunder"
                    {...register("pelicula", {
                      required: "El nombre de la pelicula es obligatorio",
                      minLength: {
                        value: 2,
                        message: "La cantidad minima de caracteres es 2",
                      },
                      maxLength: {
                        value: 100,
                        message: "La cantidad maxima de caracteres es 100",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.pelicula?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Género:</Form.Label>
                  <Form.Select
                    {...register("genero", {
                      required: "El género es obligatorio",
                    })}
                  >
                    <option value="">Seleccione una opcion:</option>
                    <option value="Accion">Accion</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Comedia">Comedia</option>
                    <option value="Drama">Drama</option>
                    <option value="Infantil">Infantil</option>
                  </Form.Select>
                  <Form.Text className="text-danger">
                    {errors.genero?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Descripcion:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    type="text"
                    placeholder="El Dios del Trueno emprende un viaje que no se parece en nada a lo que se ha enfrentado hasta ahora: una búsqueda de la paz interior. Pero el retiro de Thor se ve interrumpido por un asesino galáctico conocido como Gorr el Carnicero de Dioses, que busca la extinción de los dioses."
                    {...register("descripcion", {
                      required: "la descripcion es obligatoria",
                      minLength: {
                        value: 2,
                        message: "La cantidad minima de caracteres es 2",
                      },
                      maxLength: {
                        value: 300,
                        message: "La cantidad maxima de caracteres es 300",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.descripcion?.message}
                  </Form.Text>
                </Form.Group>
              </Col>
              <div className="text-center">
                <Button variant="primary" type="submit" className="w-100">
                  Guardar
                </Button>
              </div>
            </Row>
          </Form>
        </Card.Body>
      </Card>
      <section className="my-4">
        <GridPeliculas peliculas={peliculas} borrarPelicula={borrarPelicula}></GridPeliculas>
      </section>
    </>
  );
};

export default FormPelicula;
