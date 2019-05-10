import React from 'react';

const ProductSidebar = ({updateFilterProductsInput}) => {
    return ( 
        <div>
        <p>Search:</p>
        <input type="search" onChange={updateFilterProductsInput} />    
        </div>


     );
}
 
export default ProductSidebar;