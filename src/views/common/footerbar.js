import React from 'react'
import { NavLink } from 'react-router-dom'
export default function FooterBar() {
    return (
        <footer>
            <NavLink exact to="/" className="home">首页</NavLink>
            <NavLink to="/category" className="category">分类</NavLink>
            <NavLink to="/discover" className="discover">发现</NavLink>
            <NavLink to="/my" className="my">个人</NavLink>
        </footer>
    );
}
