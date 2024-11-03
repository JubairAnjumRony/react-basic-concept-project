import propTypes from 'prop-types'
import Featues from "../Features/featues";
import PropTypes from 'prop-types';

const Product = ({product,handleSelectedProducts,setSelectedProduct}) => {
    const {id,name,image,price,features} =product;
    return (
        <div className='border-2 rounded-xl text-center bg-blue-200 text-black flex flex-col'>
            <img className='w-full' src={image} alt="" />
            <h2>{id}</h2>
            <p>{name}</p>
            <p>Price: $ {price}</p>
            <div className=" flex-grow">
               {
          features.map((f,idx) => <Featues key={idx}
          features={f}
          ></Featues>)
        }


            </div>
            <button className='btn w-full' onClick={()=>handleSelectedProducts(product)}>BUY NOW</button>
        </div>
    );
};

Product.propTypes ={
  product:PropTypes.object.isRequired,
  handleSelectedProducts:PropTypes.func,
}

export default Product;