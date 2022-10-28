import { Container } from "react-bootstrap";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormPelicula from "./components/FormPelicula";

function App() {
  return (
    <>
      <Container className="my-5 mainSection">
        <section className="text-light">
          <h1 className="text-center">
            Administrador - Peliculas
          </h1>
          <hr />
        </section>
        <FormPelicula></FormPelicula>
      </Container>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
