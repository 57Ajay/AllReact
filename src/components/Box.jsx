import './Box.css'
import PropTypes from 'prop-types';
const Box = ({children, className})=>{
    return(
        <div className={className}>
            {children}  
        </div>
    );// AJay
};

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string.isRequired
};

export default Box; 