import React, { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import CardComponent from '../components/Card';
import { getItems } from '../services/mock';
import axios from 'axios';

const ProductsPage = () => {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const result = await res.json();
      setData1(result);
    };
    getItems();
  }, []);
  // const products = data1;
  // console.log(products);
  return (
    <div>
      <h1>Products page</h1>
      {data1.map((item, index) => (
        <CardComponent
          description={item.description}
          price={item.price}
          image={item.image}
          title={item.title}
          key={index}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
