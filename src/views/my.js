import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/my.css'
export default class My extends React.Component{
    render(){
        return(
            <div className="app">
                my
                <footer>
                    <NavLink exact to="/" className="home" activeClassName="current">首页</NavLink>
                    <NavLink to="/category" className="category" activeClassName="current">分类</NavLink>
                    <NavLink to="/discover/purchase" className="discover" activeClassName="current">发现</NavLink>
                    <NavLink to="/my" className="my" activeClassName="current">个人</NavLink>
                </footer>
            </div>
        );
    }
}
