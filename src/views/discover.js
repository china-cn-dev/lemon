import React from 'react'
import { Link, NavLink, BrowserRouter as Router, Route } from 'react-router-dom'
import '../css/discover.css'
import Purchase from './purchase'
import Business from './business'
import Merchant from './merchant'
export default class Discover extends React.Component{
    render(){
        return(
            <div className="app">
                <div className="discover">
                    <div className="top-bar"><Link className="back" to="/"></Link>发现</div>
                    <Router>
                        <div className="nav-bar">
                            <ul>
                                <li><NavLink to="/discover/purchase">采购</NavLink></li>
                                <li><NavLink to="/discover/business">商情</NavLink></li>
                                <li><NavLink to="/discover/merchant">商家</NavLink></li>
                            </ul>
                        </div>
                        <Route path="/discover/purchase" component={Purchase}></Route>
                        <Route path="/discover/business" component={Business}></Route>
                        <Route path="/discover/merchant" component={Merchant}></Route>
                    </Router>
                </div>
                <footer>
                    <NavLink exact to="/" className="home" activeClassName="current">首页</NavLink>
                    <NavLink to="/category" className="category" activeClassName="current">分类</NavLink>
                    <NavLink to="/discover/" className="discover" activeClassName="current">发现</NavLink>
                    <NavLink to="/my" className="my" activeClassName="current">个人</NavLink>
                </footer>
            </div>
        );
    }
}
