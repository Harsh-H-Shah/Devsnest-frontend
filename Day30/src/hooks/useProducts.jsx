import React, { useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { loadProducts } from '../redux/slices/ProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const useProducts = () => {
  const dispatch = useDispatch();
  const prods = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return prods;
};

export default useProducts;
