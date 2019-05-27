import React from 'react';
import './css/app.css';
import { BrowserRouter as Router , Route, Switch, NavLink} from 'react-router-dom'
import Home from './views/home'
import Category from './views/category'
import Discover from './views/discover'
import My from './views/my'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/discover" component={Discover}></Route>
          <Route path="/my" component={My}></Route>
        </Switch>
        <footer>
          <NavLink exact to="/" className="home" activeClassName="current">首页</NavLink>
          <NavLink to="/category" className="category" activeClassName="current">分类</NavLink>
          <NavLink to="/discover" className="discover" activeClassName="current">发现</NavLink>
          <NavLink to="/my" className="my" activeClassName="current">个人</NavLink>
        </footer>
      </div>
    </Router>
  );
}

export default App;
