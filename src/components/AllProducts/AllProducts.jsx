import { useEffect, useState } from "react";
import Product from "../Product/Product";



const AllProducts = ({handleSelectedProducts,setSelectedProduct}) => {
    const  [products,setProducts] = useState([]);
    
  


    useEffect(() =>{
       fetch('/products.json')
       .then(res => res.json())
       .then(data =>setProducts(data))
       .catch(error => console.error("Error fetching data:", error));
     
    
    },[])

    return (
        <div>
            <h1 className="text-center text-4xl m-4">All Products: { products.length}</h1>
            <div className=" w-10/12 mx-auto grid grid-cols-3 gap-4">
            {
            products.map((p) => <Product
                 key={p.id}
                 handleSelectedProducts ={handleSelectedProducts}
                 setSelectedProduct = {setSelectedProduct}
                 product={p}></Product> )

            }    
       
</div>
            
          
        </div>
    );
};

export default AllProducts;