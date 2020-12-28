import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductsCard from './pages/ProductsCard';
import DetailsProduct from './components/DetailsProduct';
import Header from './components/Header'
import ShoppingCart from './components/ShoppingCart'


function Routes() {
	return (
		<BrowserRouter>
            <Header />
			<Route path="/" exact component={Landing} />
			<Route path="/products" exact component={ProductsCard} />
			<Route path="/detailsProducts" exact component={DetailsProduct} />
			<Route path="/checkout" exact component={ShoppingCart} />
		</BrowserRouter>
	)
}

export default Routes;