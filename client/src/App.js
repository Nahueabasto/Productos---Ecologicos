import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/Details';
import Information from './components/Information';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" render={({match}) => <ProductDetail id={match.params.id}/>} />
          <Route exact path="/information" component={Information} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


