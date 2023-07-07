import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetail from './components/Details';
import Information from './components/Information';
import User from './components/Login/User';

import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/User" component={User} />
          <Route exact path="/:id" render={({match}) => <ProductDetail id={match.params.id}/>} />
          
          {/*<Route exact path="/products/:line" component={Home} />*/}
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;


