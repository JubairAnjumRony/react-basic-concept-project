import PropTypes from 'prop-types';


const Featues = ({features}) => {
   
    return (
        <div>
            <div className=' '>
                <p className=' p-2 gap-1'>{features}</p>
            </div>
        </div>
    );
};

Featues.propTypes = {
    features:PropTypes.string.isRequired
}

export default Featues;