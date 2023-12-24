
import Badge from 'react-bootstrap/Badge';
import PropTypes from "prop-types";

const Tags = ({color, nombre}) => {
  return (
    <Badge bg={color}>{nombre}</Badge>
  )
}

Tags.propTypes = {
    color: PropTypes.string.isRequired, 
    nombre: PropTypes.string.isRequired,
};

export default Tags