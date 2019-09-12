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
import ProductList from './views/productlist'
import CompanyList from './views/companylist'
import OfferList from './views/offerlist'
import Product from './views/product'
import ProductDetail from './views/productdetail'
import MessageCenter from './views/messagecenter'
import SystemMessage from './views/systemmessage'
import Chat from './views/chat'
import BusinessCard from './views/businesscard'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/category" component={Category}></Route>
          <Route path="/discover" component={Discover}></Route>
          <Route path="/my" component={My}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route path="/news/:id" component={News}></Route>
          <Route path="/buy/:id" component={Buy}></Route>
          <Route path="/ranking" component={Ranking}></Route>
          <Route path="/search/product" component={ProductList}></Route>
          <Route path="/search/company" component={CompanyList}></Route>
          <Route path="/search/offer" component={OfferList}></Route>
          <Route exact path="/product/:id" component={Product}></Route>
          <Route path="/product/:id/details" component={ProductDetail}></Route>
          <Route exact path="/message" component={MessageCenter}></Route>
          <Route path="/message/system" component={SystemMessage}></Route>
          <Route path="/chat" component={Chat}></Route>
          <Route path="/card" component={BusinessCard}></Route>
        </Switch>
    </Router>
  );
}

export default App;
