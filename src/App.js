import './App.css';
import Cart from './components/cart/Cart';
import Products from './components/products/Products';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';


function App() {
  // const { products} = useSelector((state)=> state.shop)
  // const productData = useSelector((state: products)=> state).

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'><Products/></Route>
          <Route path='/cart'><Cart/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
