import React from 'react'
import {Link} from 'react-router-dom'
import '../css/messagecenter.css'
import contact from '../assets/contact.png'
import u1 from '../assets/temp28.jpg'
import u2 from '../assets/temp29.jpg'
export default class MessageCenter extends React.Component{
    constructor(props){
        super(props);
        console.log(props.location.state)
        this.state = {}
    }
    render(){
        return(
            <div className="chat-message">
                <header className="nav-bar fixed-top">
                    <Link className="back" to="/message"></Link>
                    <span>北京奇志浩天科技有限公司</span>
                    <button className="contact"><Link to="/card"><img src={contact} alt=""/></Link></button>
                </header>
                <div className="message-list">
                    <em className="time">08:43</em>
                    <div className="left">
                        <img src={u1} alt=""/>
                        <p><span>我今天晚上别去聚会了</span><i className="bubble"></i></p>
                    </div>
                    <div className="right">
                        <p><span>不行啊，都是老朋友，不去会说我的</span><i className="bubble"></i></p>
                        <img src={u2} alt=""/>
                    </div>
                    <div className="left">
                        <img src={u1} alt=""/>
                        <p><span>我一个人在家，害怕，我怕黑</span><i className="bubble"></i></p>
                    </div>
                    <div className="right">
                        <p><span>别怕，黑只是一种颜色，它代表不了什么</span><i className="bubble"></i></p>
                        <img src={u2} alt=""/>
                    </div>
                    <em className="time">08:43</em>
                    <div className="left">
                        <img src={u1} alt=""/>
                        <p><span>你怕绿吗？</span><i className="bubble"></i></p>
                    </div>
                    <div className="right">
                        <p><span>等我，马上回</span><i className="bubble"></i></p>
                        <img src={u2} alt=""/>
                    </div>
                </div>
                <div className="fixed-bottom">
                    <input className="content" type="text"/>
                    <button className="send-btn">发送</button>
                </div>
            </div>
        );
    }
}
