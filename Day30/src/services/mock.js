import axios from 'axios';

export const getItems = async() => {
  try {
    const res = await 
    axios.get('https://fakestoreapi.com/products/category/jewelery');
    const data = res.data
    return data;
  } catch(error){
    console.log(error);
  }
}