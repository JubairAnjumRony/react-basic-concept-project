
import './App.css'
import AllProducts from './components/AllProducts/AllProducts'
import CardContainer from './components/CardContainer/CardContainer'
import Navbar from './components/Header/Navbar'
import { useState } from 'react'

function App() {
    const [isActive,setIsActive] = useState({
      cart:true,
      status:"cart"
    })
  const [selectedProduct,setSelectedProduct] = useState([]);
  const [price,setPrice] = useState(500);
  
    const handleIsActiveState = (status) =>{
      if(status == "cart"){
        setIsActive({ 
          cart:true,
        status:'cart'
      })
    }
      else {
        setIsActive({
          cart:false,
          status:'about'
        })
      }
    }   


   const handleSelectedProducts = (product) =>{

      const isExist = selectedProduct.find((p)=>p.id === product.id)

      if(isExist){
        alert("already added the product")
      }
      else{
        handleIncreasePrice(product.price);
        const newCart =[...selectedProduct,product];
        setSelectedProduct(newCart);
      }
      
      


   }
   const handleDelete = (id) =>{
    handleDecreasePrice(id);
     const newProduct =selectedProduct.filter((p) =>p.id != id);
     setSelectedProduct(newProduct);
   }

   const handleIncreasePrice =(pr) =>{
     const newPrice = price+pr;
     setPrice(newPrice);
   }

   const handleDecreasePrice = (id)=> {
      const product = selectedProduct.find((p)=>p.id == id)
      setPrice(price-product.price);
   }
  return (
    <>
       
      <Navbar selectedProduct= {selectedProduct} price = {price}></Navbar>
      <div className='flex justify-around w-10/12 mx-auto'>
      <AllProducts handleSelectedProducts = {handleSelectedProducts} setSelectedProduct= {setSelectedProduct}></AllProducts>
      <CardContainer  isActive={isActive} handleIsActiveState={handleIsActiveState} selectedProduct ={selectedProduct}
      handleDelete ={handleDelete}
      ></CardContainer>
      

      </div>
      
    </>
  )
}

export default App
