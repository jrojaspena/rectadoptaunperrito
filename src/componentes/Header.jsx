import  PropTypes  from "prop-types";
import './Header.css'
const Header = ({titulo}) => {
  return (
    <div className="titulo">
        <h1>{titulo}</h1>
    </div>
  )
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header