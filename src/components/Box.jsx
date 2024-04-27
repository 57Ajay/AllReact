import './Box.css'
import PropTypes from 'prop-types';
const Box = ({children, customClass})=>{
    return(
        <div className={customClass}>
            {children}  
        </div>
    );
};

Box.propTypes = {
    children: PropTypes.node,
    customClass: PropTypes.string.isRequired
};

export default Box; 