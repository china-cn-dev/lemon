import React from 'react';
import './css/app.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Home from './views/home'
import Category from './views/category'
import Discover from './views/discover'
import My from './views/my'
import Search from './views/search'
import News from './views/news'
import Buy from './views/buy'
import Ranking from './views/ranking'
import Agora from './views/agora'
import Product from './views/product'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/discover" component={Discover}></Route>
          <Route path="/my" component={My}></Route>
          <Route path="/search" component={Search}></Route>
          <Route path="/news/:id" component={News}></Route>
          <Route path="/buy/:id" component={Buy}></Route>
          <Route path="/ranking" component={Ranking}></Route>
          <Route path="/agora" component={Agora}></Route>
          <Route path="/product/:id" component={Product}></Route>
        </Switch>
    </Router>
  );
}

export default App;
