import React from 'react'
import { Link } from 'react-router-dom'
import '../css/agora.css'
import t18 from '../assets/temp18.jpg'

export default class Agora extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: this.props.history.location.state.kw,
            current: 'zonghe',
            products: [
                { id: 1, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' },
                { id: 2, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' },
                { id: 3, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' },
                { id: 4, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' },
                { id: 5, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' },
                { id: 6, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' }, { id: 7, url: t18, title: '内置泵吸式二氧化碳测定仪TD500SH-CO2_CO2气体检测仪', vip: 'xmt', price: '68.00', addr: '河北  廊坊' }
            ]
        }
        this.onKeywordChange = this.onKeywordChange.bind(this);
    }
    onKeywordChange(e) {
        this.setState({ keyword: e.target.value })
    }
    render() {
        return (
            <div className="agora">
                <header className="nav-bar">
                    <Link to="/search" className="back"></Link>
                    <div className="search-box">
                        <input placeholder="输入关键词，开始搜索" value={this.state.keyword} onChange={this.onKeywordChange}/>
                    </div>
                </header>
                <nav>
                    <span className="active">综合</span>
                    <span>热度</span>
                    <span className="filter">筛选</span>
                    <span className="switch-layout"></span>
                </nav>
                <div className="products">
                    <ul>
                        {
                            this.state.products.map(
                                (item,index)=>(
                                    <li key={index}>
                                        <div className="thumb"><img src={item.url} alt=""/></div>
                                        <div className="right">
                                            <div>
                                                <p className="title"><Link to={{pathname:`/product/${item.id}`}}>{item.title}</Link></p>
                                                {item.vip ? (<i className={item.vip}></i>) : null}
                                            </div>
                                            <div className="line">
                                                <span className="price">&yen;<em>{item.price}</em></span>
                                                <span className="addr">{item.addr}</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
