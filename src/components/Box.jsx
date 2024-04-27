import './Box.css'
import PropTypes from 'prop-types';
const Box = ({children})=>{
    return(
        <div className="box">
            {children}  
        </div>
    );
};

Box.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Box; 