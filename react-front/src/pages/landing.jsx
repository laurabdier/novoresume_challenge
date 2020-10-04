import React from 'react';
import ModalLogin from '../components/auth/login/loginComponent';
import ModalAuth from '../components/auth/modalAuth';
import Landing from '../components/landing/landingComponent';
import NavBar from '../components/navbar/navbarComponent';

const LandingPage = () => {
  return(
    <div>
      <NavBar/>
      <ModalAuth/>
      <ModalLogin />
      <Landing />
    </div>
  )
}

export default LandingPage;
