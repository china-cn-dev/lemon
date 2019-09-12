import React from 'react'
import { Link, NavLink,Switch,Route } from 'react-router-dom'
import '../css/ranking.css'
import tmp20 from '../assets/temp20.jpg'
import Talent from './talent'
export default class Ranking extends React.Component{
    render(){
        return(
            <div className="ranking">
                <div className="ranking-bg">
                    <img className="focus-img" src={tmp20} alt=""/>
                    <div className="nav-bar">
                        <Link to="/discover/merchant" className="back"></Link>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><NavLink exact to="/ranking">信用达人</NavLink></li>
                        <li><NavLink to="/ranking/rbxf">热榜先锋</NavLink></li>
                        <li><NavLink to="/ranking/hydn">活跃牛商</NavLink></li>
                        <li><NavLink to="/ranking/xqzx">新起之秀</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/ranking" component={Talent}></Route>
                    <Route path="/ranking/rbxf" render={props=>(<div>热榜先锋</div>)}></Route>
                    <Route path="/ranking/hydn" render={props=>(<div>活跃牛商</div>)}></Route>
                    <Route path="/ranking/xqzx" render={props=>(<div>新起之秀</div>)}></Route>
                </Switch>
            </div>
        );
    }
}
