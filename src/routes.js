import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductsCard from './pages/ProductsCard';
import DetailsProduct from './components/DetailsProduct';
import Header from './components/Header'
import FloatCart from './components/FloatCart';
import InternalServer from '../components/ErrorPages/InternalServer/InternalServer';

function Routes() {
	return (
		<BrowserRouter>
            <Header />
			<Route path="/" exact component={Landing} />
			<Route path="/products" exact component={ProductsCard} />
			<Route path="/detailsProducts/:id" exact component={DetailsProduct} />
			<Route path="/500" component={InternalServer} />
		</BrowserRouter>
	)
}

export default Routes;