import React from 'react';

const ProductSidebar = ({updateFilterProductsInput, filterTextInput, clearFilter}) => {
    return ( 
        <div>
        <p>Search:</p>
        <input 
          type="search" 
          onChange={updateFilterProductsInput} 
          value={filterTextInput}/>    
          <button onClick={clearFilter}>Clear Filter</button>
        </div>


     );
}
 
export default ProductSidebar;