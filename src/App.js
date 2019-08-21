import React from 'react';
import './css/app.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from './views/home'
import Category from './views/category'
import Discover from './views/discover'
import My from './views/my'
import Search from './views/search'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/discover" component={Discover}></Route>
          <Route path="/my" component={My}></Route>
          <Route path="/search" component={Search}></Route>
        </Switch>
    </Router>
  );
}

export default App;
