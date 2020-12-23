import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import ProductsCard from './pages/ProductsCard';
import DetailsProduct from './components/DetailsProduct'

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Landing} />
			<Route path="/ProductsCard" exact component={ProductsCard} />
			<Route path="/DetailsProduct" exact component={DetailsProduct} />
		</BrowserRouter>
	)
}

export default Routes;