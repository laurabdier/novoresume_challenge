import React from 'react';
import NavBar from '../components/navbar/navbarComponent';
import Products from '../components/products/productsComponent';
import ModalLogin from '../components/auth/login/loginComponent';
import ModalAuth from '../components/auth/modalAuth';



const ProductsPage = () => {
  return (
    <div>
      <NavBar />
      <ModalAuth />
      <ModalLogin />
      <Products />
    </div>
  )
};

export default ProductsPage;
