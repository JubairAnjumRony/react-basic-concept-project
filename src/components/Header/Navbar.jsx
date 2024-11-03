import propTypes from 'prop-types'
const Navbar = ({selectedProduct,price}) => {
    return (
        <div className="flex justify-between bg-black-400 w-10/12 mx-auto">
            <div><h1 className="text-4xl">Logo</h1></div>
            <div className="flex justify-between list-none gap-4">
                
                <li className="text-xl no-underline">HOME</li>
                <li>Product</li>
                <li>Cart:{selectedProduct.length}</li>
                <li>$ {price}</li>

                
            </div>
        </div>
    );
};

Navbar.propTypes = {
    selectedProduct:propTypes.array,
}

export default Navbar;