import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import {Home, 
  SignInScreen,
  SignUpScreen, 
  AdminPage, 
  SellerPage,
  SuperAdminPage,
  CatalogPage,
  DetailsPage,
  OrderPage,
  CartPage,
  SuperAdmin,
} from './screens';
import ProtectedRoute from './components/ProtectedRoute';
import { Footer, FixedNavTop } from './components';

class App extends Component {
  render(){
    return (
      <div>
        <FixedNavTop/>
        <Switch>
          <ProtectedRoute path='/admin/dashboard' component={AdminPage} exact/>
          <ProtectedRoute path='/seller/dashboard' component={SellerPage} exact/>
          <ProtectedRoute path='/super-admin/dashboard' component={SuperAdminPage} exact/>
        </Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/cart' component={CartPage} exact/>
        <Route path='/catalog' component={CatalogPage} exact/>
        <Route path='/details/:id' component={DetailsPage} exact/>
        <Route path='/order/:id' component={OrderPage} exact/>
        <Route path='/sign-in' component={SignInScreen} exact/>
        <Route path='/sign-up' component={SignUpScreen} exact/>
        <Route path='/super-a/sign-in' component={SuperAdmin} exact/>
        {/* <Footer/> */}
      </div>
    );
  }
  
}

export default App;
