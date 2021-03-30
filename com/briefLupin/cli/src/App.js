import './App.css';
import { Route, Switch } from 'react-router-dom';
import {
  HomePage,
  NavBar,
  CatalogPage,
  Login
} from './components';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route  path='/' component={HomePage} exact/>
        <Route  path='/catalog' component={CatalogPage} exact/>
        <Route  path='/login' component={Login} exact/>
      </Switch>
    </div>
  );
}

export default App;
