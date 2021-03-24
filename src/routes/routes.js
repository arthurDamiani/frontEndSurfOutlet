import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Landing from "../pages/Landing";
import ProductsCard from "../pages/ProductsCard";
import Payment from "../pages/Payment";

import DetailsProduct from "../components/DetailsProduct";
import Login from "../components/Login";
import Form from "../components/Form";
import ForgotPassword from "../components/ForgotPassword";
import Header from "../components/Header";

import EditAccount from '../components/EditAccount'
import Footer from "../components/Footer";

function Routes() {
  const authenticated = Boolean(sessionStorage.getItem("authorized"));
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/produtos" exact component={ProductsCard} />
        <Route path="/produtos/:categoria/" exact component={ProductsCard} />
        <Route
          path="/produtos/:categoria/:subcategoria"
          exact
          component={ProductsCard}
        />
        <Route
          path="/produtos/:categoria/:subcategoria/:tipo"
          exact
          component={ProductsCard}
        />
        <Route
          path="/detailsProducts/:codigo"
          exact
          component={DetailsProduct}
        />

        <Route path="/payment" exact component={Payment} />

        <Route path="/dash" exact>
          {authenticated ? <EditAccount /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login" exact>
          {authenticated ? <Redirect to="/dash" /> : <Login />}
        </Route>

        <Route path="/form" exact>
          {authenticated ? <Redirect to="/dash" /> : <Form />}
        </Route>
        
        <Route path="/forgotPassword" exact>
          {authenticated ? <Redirect to="/dash" /> : <ForgotPassword />}
        </Route>
        
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default Routes;
