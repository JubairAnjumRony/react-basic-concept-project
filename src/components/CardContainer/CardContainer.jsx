import PropTypes from 'prop-types';
import About from '../About/About';
import Cart from '../Card/Cart';
import './CardContainer.css'
import propTypes from 'prop-types'


const CardContainer = ({handleIsActiveState,isActive,selectedProduct,handlePrice,handleDelete}) => {


    return (
        <div className='w-full mx-auto'>
            <h1 className=''>CardContainer.jsx</h1>
     
         <div className="flex items-center">

            <button onClick={()=>handleIsActiveState("cart")}className={`${isActive.cart?"btn active":"btn"}`}>CART:{selectedProduct.length}</button>
            <button onClick={()=>handleIsActiveState("about")}className={`${isActive.cart?"btn ":"btn active"}`}>ABOUT</button>
         </div>

    { isActive.cart?<Cart 
    handlePrice = {handlePrice}
    selectedProduct = {selectedProduct}
    handleDelete = {handleDelete}
    ></Cart>:
    <About></About>}
   

         </div>
    );
};
CardContainer.propTypes = {
    handleIsActiveState: PropTypes.func,
    isActive : PropTypes.object,

}

export default CardContainer;