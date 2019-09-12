import React from 'react'
import { Link, NavLink, Route, Switch } from 'react-router-dom'
import FooterBar from './common/footerbar'
import '../css/discover.css'
import Purchase from './purchase'
import Business from './business'
import Merchant from './merchant'
export default class Discover extends React.Component{
    render(){
        return(
            <div className="app">
                <div className="discover">
                    <header className="nav-bar">
                        <Link className="back" to="/"></Link>
                        <span>发现</span>
                    </header>
                    <div className="nav-tabs">
                        <ul>
                            <li><NavLink exact to="/discover">采购</NavLink></li>
                            <li><NavLink to="/discover/business">商情</NavLink></li>
                            <li><NavLink to="/discover/merchant">商家</NavLink></li>
                        </ul>
                    </div>
                    <Switch>
                        <Route exact path="/discover" component={Purchase}></Route>
                        <Route path="/discover/business" component={Business}></Route>
                        <Route path="/discover/merchant" component={Merchant}></Route>
                    </Switch>
                </div>
                <FooterBar/>
            </div>
        );
    }
}
