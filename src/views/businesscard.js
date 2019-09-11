import React from 'react'
import '../css/businesscard.css'
import logo from '../assets/temp30.jpg'
export default class BusinessCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPay: 1,
            vipType:'xmt'
        }
    }
    render(){
        return(
            <div className="business-card">
                <div className="bg">
                    <header className="nav-bar">
                        <button className="back" onClick={()=>this.props.history.goBack()}></button>
                    </header>
                </div>
                <div className="brief-intro">
                    <div className="logo"><img src={logo} alt=""/></div>
                    <p className="contacts">李大东（个体经营）</p>
                    <i className="xmt2"></i>
                </div>
                <div className="detail-intro">
                    <ul>
                        <li><label>姓名</label><span>李大东</span></li>
                        <li><label>Email</label><span>123456@126.com</span></li>
                        <li><label>QQ</label><span>1479507878</span></li>
                        <li><label>所在地</label><span>北京市海淀区清华路清清小区</span></li>
                    </ul>
                </div>
                <div className="fixed-bottom">
                    <a className="qq" href="http://wpa.qq.com/msgrd?v=3&uin=123456789&site=china.cn&menu=yes">QQ交谈</a>
                    <a className="phone" href="tel:10086">电话联系</a>
                </div>
            </div>
        );
    }
}
