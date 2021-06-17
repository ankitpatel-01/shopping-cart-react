import { Route, Switch } from 'react-router';
import './App.css';
import { CartProvider } from './mics/Cart'
import NavBar from './components/NavBar';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import P404 from './pages/P404';
import Home from './pages/Home';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <hr />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/:id" exact>
            <Category />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route>
            <P404 />
          </Route>
        </Switch>
      </div>
    </CartProvider>
  );
}

export default App;
