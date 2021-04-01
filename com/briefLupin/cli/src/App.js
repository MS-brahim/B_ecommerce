import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  CatalogPage,
  DashboardSeller,
  CartPage,
} from './components';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path='/' component={HomePage} exact/>
        <Route  path='/catalog' component={CatalogPage} exact/>
        <Route  path='/cart' component={CartPage} exact/>
        <Route  path='/dashboard' component={DashboardSeller} exact/>
      </Switch>
    </div>
  );
}

export default App;
