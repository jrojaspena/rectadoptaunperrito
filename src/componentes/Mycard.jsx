import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Tags from "./Tags";
import './MyCard.css'

function MyCard({imagen, titulo, texto, nombre, color}) {
  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title className="title">{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>
      </Card.Body>
      <Tags color={color} nombre={nombre}/>
    </Card>
  );
}

MyCard.propTypes = {
  imagen: PropTypes.string.isRequired, 
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default MyCard