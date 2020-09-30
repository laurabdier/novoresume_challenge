import React from 'react';
import { useRoutes } from 'hookrouter';
import NavBar from './components/navbar/navbarComponent';
import Landing from './components/landing/landingComponent';

import LandingPage from './pages/landing';
import ProductsPage from './pages/products';

const routes = {
  '/': () => <LandingPage />,
  '/products': () => <ProductsPage />
};

function App() {
  const match = useRoutes(routes);

  return (
    <div className="App">
    {match}
    </div>
  );
}

export default App;
