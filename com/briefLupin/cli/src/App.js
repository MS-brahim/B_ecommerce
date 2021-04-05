import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  CatalogPage,
  DashboardSeller,
  CartPage,
  DashboardAdmin,
} from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path='/' component={HomePage} exact/>
        <Route  path='/catalog' component={CatalogPage} exact/>
        <Route  path='/cart' component={CartPage} exact/>
        <Route  path='/seller/dashboard' component={DashboardSeller} exact/>
        <Route  path='/admin/dashboard' component={DashboardAdmin} exact/>
      </Switch>
    </div>
  );
}

export default App;
