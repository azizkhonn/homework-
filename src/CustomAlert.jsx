import './CustomAlert.css';
import PropTypes from 'prop-types';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="custom-alert">
            <div className="custom-alert-content">
                <span>{message}</span>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

CustomAlert.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};



export default CustomAlert;
