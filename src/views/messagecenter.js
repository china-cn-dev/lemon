import React from 'react'
import {Link} from 'react-router-dom'
import '../css/messagecenter.css'
import notify from '../assets/notify.png'
import t27 from '../assets/temp27.png'
export default class MessageCenter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages:[
                {id:1,logo:t27,unread:9,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'这不只是我个人的生活经历，也是千千万...'},
                {id:2,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'在吗'},
                {id:3,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'在吗'},
                {id:4,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'不买，公司没钱，太贵了'},
                {id:5,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'不买，公司有钱，太便宜了'},
                {id:6,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'不买，公司有钱，太便宜了'},
                {id:7,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'不买，公司有钱，太便宜了'},
                {id:8,logo:t27,unread:0,companyName:'北京奇志浩天科技有限公司',time:'09:43',lastMessage:'不买，公司有钱，太便宜了'}
            ]
        }
        this.onMessageClick = this.onMessageClick.bind(this);
    }
    onMessageClick(e){
        if('system' === e){
            this.props.history.push('/systemmessage');
        }else{
            this.props.history.push('/chat',{id:e});
        }
    }
    render(){
        return(
            <div className="message-center">
                <header className="nav-bar">
                    <Link className="back" to="/"></Link>
                    <span>消息中心</span>
                    <button className="ignore-all"><span>忽略全部</span></button>
                </header>
                <div className="message-list">
                    <div className="message" onClick={()=>{this.onMessageClick('system')}}>
                        <div className="left">
                            <img src={notify} alt=""/>
                            <em className="unread">99</em>
                        </div>
                        <div className="right">
                            <p className="caption"> <em>系统消息</em> <span>09:43</span></p>
                            <p className="last-message">您的营业执照审核已通过</p>
                        </div>
                    </div>
                    <ul>
                        {this.state.messages.map((message,idx)=>(<li key={idx}>
                            <div className="message" onClick={()=>{this.onMessageClick(message.id)}}>
                                <div className="left">
                                    <img src={message.logo} alt=""/>
                                    {message.unread > 0 ? (<em className="unread">{message.unread}</em>) : null}
                                </div>
                                <div className="right">
                                    <p className="caption"> <em>{message.companyName}</em> <span>{message.time}</span></p>
                                    <p className="last-message">{message.lastMessage}</p>
                                </div>
                            </div>
                        </li>))}
                    </ul>
                </div>
            </div>
        );
    }
}
