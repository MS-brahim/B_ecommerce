import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import {Home, 
  SignInScreen, 
  AdminPage, 
  SellerPage,
  CatalogPage
} from './screens';
import ProtectedRoute from './components/ProtectedRoute';
class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <ProtectedRoute path='/admin/dashboard' component={AdminPage} exact/>
          <ProtectedRoute path='/seller/dashboard' component={SellerPage} exact/>
        </Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/catalog' component={CatalogPage} exact/>
        <Route path='/sign-in' component={SignInScreen} exact/>
      </div>
    );
  }
  
}

export default App;
