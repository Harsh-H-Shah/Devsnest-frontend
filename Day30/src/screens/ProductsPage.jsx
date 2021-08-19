import React from 'react';
import useProducts from '../hooks/useProducts';
import CardComponent from '../components/Card';

const ProductsPage = () => {
  let products = useProducts();
  console.log(products);
  return (
    <div className="itemcontainer">
      {products.map((item) => {
        <CardComponent
          description={item.description}
          id={item.id}
          price={item.price}
          image={item.image}
          title={item.title}
        />;
      })}
    </div>
  );
};

export default ProductsPage;
