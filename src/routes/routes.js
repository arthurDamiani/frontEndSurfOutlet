import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import Landing from '../pages/Landing'
import ProductsCard from '../pages/ProductsCard'
import Payment from '../pages/Payment'
import EditAccount from '../pages/EditAccount'
import DetailsProduct from '../components/DetailsProduct'
import Login from '../components/Login'
import Form from '../components/Form'
import ForgotPassword from '../components/ForgotPassword'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Routes() {
	return (
		<Router>
			<Header />
			<ScrollToTop />
			<Switch>
				<Route path="/" exact component={Landing} />
				<Route path="/products" exact component={ProductsCard} />
				<Route path="/detailsProducts/:id" exact={true} component={DetailsProduct} />
				<Route path="/payment" exact component={Payment} />
				<Route path="/edit" exact component={EditAccount} />
				<Route path="/login" exact component={Login} />
				<Route path="/form" exact component={Form} />
				<Route path="/forgetPassword" exact component={ForgotPassword} />
			</Switch>
			<Footer />
		</Router>
	)
}

export default Routes;