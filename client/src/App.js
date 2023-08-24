import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/Details';
import Information from './components/Information';
import UserProfile from './components/UserProfile/UserProfile';
import LineProducts from './components/LineProducts';
import UserInfo from './components/UserProfile/UserInfo';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/ShoppingCart/Cart";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />    
          <Route exact path="/information" component={Information} />
          <Route exact path="/userprofile" component={UserProfile} />
          <Route exact path="/:id" render={({match}) => <ProductDetail id={match.params.id}/>} />
          <Route exact path="/products/:lineParam" component={Home} />
          <Route exact path="/category/:categoryName" component={LineProducts} />
          
          <Route exact path="/shoppingcart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;


