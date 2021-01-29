import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../pages/Landing'
import ProductsCard from '../pages/ProductsCard'
import Payment from '../pages/Payment'
import DetailsProduct from '../components/DetailsProduct'
import Header from '../components/Header'
import Footer from '../components/Footer'
  

function Routes() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/products" exact component={ProductsCard} />
				<Route path="/detailsProducts/:id" exact={true} component={DetailsProduct} />
				<Route path="/payment" exact component={Payment} />
			</Switch>
		</Router>
	)
}

export default Routes;