import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductsCard from './pages/ProductsCard';
import DetailsProduct from './components/DetailsProduct';
import Header from './components/Header'
import Footer from './components/Footer'
  

function Routes() {
	return (
		<BrowserRouter>
            <Header />
			<Route path="/" exact component={Landing} />
			<Route path="/products" exact component={ProductsCard} />
			<Route path="/detailsProducts/:id" exact component={DetailsProduct} />
			<Footer />
		</BrowserRouter>
	)
}

export default Routes;