import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/Details';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" render={({match}) => <ProductDetail id={match.params.id}/>} />
          <Route exact path="/:line" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


