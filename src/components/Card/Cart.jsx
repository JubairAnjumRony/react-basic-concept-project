import propTypes from 'prop-types'

const Cart = ({selectedProduct,handleDelete}) => {
  console.log(typeof(selectedProduct));
  const {name,image} = selectedProduct;
    return (
        <div className='grid gap-4 w-[400px]'>
          {
            selectedProduct.map((p,index)=>(
              <div className='' key={index}>
                     <div className="flex items-center text-center gap-4 p-4 border rounded">
                       <img className='w-[100px] h-[100px] object-cover ' src={p.image} alt="" />
                       <h1>{p.name}</h1>
                     <button className='px-4 py-2 bg-red-500 text-white rounded' onClick={()=>handleDelete(p.id)}>Delete</button>
                     </div>
              </div>
              // key={index
              //   product={p}
              
            ))
          }
        </div>
    );
};

Cart.propTypes = {
  selectedProduct:propTypes.array,
}

export default Cart;