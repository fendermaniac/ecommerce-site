import React from 'react';

const ProductList = (props) => {
  return ( 
    props.inventory.map( (item) => { 
      // <h2> {item.product_name} </h2>
    }
    )
   );
}
 
export default ProductList;